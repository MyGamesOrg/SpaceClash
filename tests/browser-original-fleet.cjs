// Original-assets-only release regression: serve the repository at http://localhost:8000 first.
const {chromium}=require('playwright');
(async()=>{
 const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||undefined,headless:true,args:['--no-sandbox','--enable-unsafe-swiftshader','--use-angle=swiftshader']});
 try{
  const page=await browser.newPage({viewport:{width:1440,height:900},reducedMotion:'reduce',acceptDownloads:true});
  const errors=[],missing=[],requests=[];
  page.on('pageerror',e=>errors.push(e.message));
  page.on('response',r=>{if(r.status()>=400)missing.push(r.url());});
  page.on('request',r=>{if(r.url().includes('/assets/quaternius/'))requests.push(r.url());});
  await page.goto(process.env.GAME_URL||'http://localhost:8000/fleet-gallery.html');
  await page.waitForFunction(()=>window.modelReady,{timeout:30000});
  const checks=[];
  for(const type of ['interceptor','bomber','cruiser','sentinel']){
   await page.selectOption('#models',type);
   const result=await page.evaluate(()=>{const m=gallery.model();let finite=true,meshes=0;m.traverse(o=>{if(o.geometry){meshes++;for(const v of o.geometry.attributes.position.array)if(!Number.isFinite(v))finite=false;}});return {name:m.name,finite,meshes,exhaust:!!m.userData.exhaust,source:m.userData.source};});
   if(!result.finite||!result.meshes||!result.exhaust||result.source!=='Original procedural model')throw Error(type+' invalid '+JSON.stringify(result));
   checks.push({type,...result});
  }
  const dlPromise=page.waitForEvent('download');await page.click('#export');const dl=await dlPromise;if(!dl.suggestedFilename().endsWith('.glb'))throw Error('GLB export failed');
  await page.setViewportSize({width:390,height:844});
  const mobileOk=await page.evaluate(()=>document.documentElement.scrollWidth<=390);
  if(!mobileOk)throw Error('Mobile horizontal overflow');
  await page.goto('http://localhost:8000/credits.html');
  if(!await page.getByText('Jungle Jim').count())throw Error('Skybox attribution missing');
  if(errors.length||missing.length||requests.length)throw Error(JSON.stringify({errors,missing,requests}));
  console.log(JSON.stringify({checks,mobileOk,export:dl.suggestedFilename(),errors,missing,requests},null,2));
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1)});
