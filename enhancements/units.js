import {UNIT_DEFS} from '../config/unit-rules.js';
import {createOriginalUnit} from './original-units.js';
import {preloadFleetAssets,assetStatus} from './asset-library.js';
export {UNIT_DEFS,preloadFleetAssets,assetStatus};

// The public design names and troop IDs remain stable for existing saved games.
export const FLEET_DESIGNS={
 interceptor:{label:'Aster / interceptor',source:'Original procedural model',description:'A compact original interceptor with twin wings, an armored hull and a bright engine plume.'},
 bomber:{label:'Kestrel / siege',source:'Original procedural model',description:'An original heavy attack craft with reinforced wings and a broad strike silhouette.'},
 cruiser:{label:'Atlas / command',source:'Original procedural model',description:'An original command-class cruiser with reinforced armor and long-range weapon fittings.'},
 sentinel:{label:'Sentinel / defense',source:'Original procedural model',description:'An original compact armored defense drone with twin weapon mounts.'}
};
export function createUnit(type='interceptor'){
 if(!Object.prototype.hasOwnProperty.call(UNIT_DEFS,type))throw Error('Unknown troop type');
 const unit=createOriginalUnit(type);
 unit.userData.design=FLEET_DESIGNS[type].label;
 unit.userData.source=FLEET_DESIGNS[type].source;
 return unit;
}
