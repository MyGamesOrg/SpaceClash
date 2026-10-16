// Original-assets-only release: no third-party fleet GLBs are fetched.
// Preserve this module's public interface for the game and gallery importers.
export const assetStatus={ready:true,loaded:[],failed:[]};
export function preloadFleetAssets(){return Promise.resolve(assetStatus);}
export function assetInstance(){return null;}
export function centeredAsset(){return null;}
