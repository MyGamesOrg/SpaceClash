# Voidward Command

A browser-based 3D space-base strategy prototype built with JavaScript, Three.js and WebGL. Build and upgrade a base, manage an original procedural fleet, defend against raids and attack outposts.

**Status:** Prelaunch cleanup on a review branch. Not yet deployed or independently regression-tested after this asset change.

## Run locally

Serve this folder over HTTP, then open http://localhost:8000/ :

```powershell
py -m http.server 8000
```

On Windows, `start-game.bat` is also provided. Do not open `index.html` directly from the filesystem: browser modules and GLB asset fetches need HTTP.

## Gameplay and storage

- 19 structure types with five visual tiers; fleet camps, workshops, upgrades and defenses.
- Four troop classes: Interceptor, Siege Bomber, Sentinel Drone and Strike Cruiser.
- Fleet hangar, combat simulations, attack/retreat, model galleries, and sound settings.
- Manual SAVE BASE / LOAD BASE use browser localStorage. **No account, cloud save or multiplayer backend.**
- Legacy save keys `stellar-clash`, `stellar-preferences` and `stellar-sky` are intentionally retained for compatibility after rebranding. Clearing browser site data can erase saves.

## Assets and licenses

- Original procedural fleet meshes and original building models are used in this release.
- The Quaternius GLB ships, modular pieces and adapted exports from the earlier prototype are **removed** from the current release while redistribution terms are clarified.
- Two Jungle Jim nebula skyboxes remain under **CC BY 4.0** with source links, license links and modification notices in [ASSET-CREDITS.md](ASSET-CREDITS.md) and the visible [credits page](credits.html).
- Three.js and its addons are MIT licensed; see [libs/LICENSE.txt](libs/LICENSE.txt).
- The root [LICENSE](LICENSE) reserves rights only in the original project materials to the extent owned by `sugadev-collab`; it does not cover third-party components.

## Structure

- `index.html` / `main.js`: application and gameplay
- `enhancements/original-units.js`: original fleet meshes
- `enhancements/units.js`: troop creation and public fleet descriptions
- `models/building-factory.js`: original building geometry
- `enhancements/skyboxes.js`: credited nebula backgrounds
- `storage/`: local save validation and preferences
- `fleet-gallery.html`, `model-gallery.html`, `credits.html`: supporting pages
- `tests/`, `QA.md`: development tests and historical QA records

## Deployment

The current app is static with no build step. It can be served on GitHub Pages or Cloudflare Pages after browser testing. Use relative asset URLs when hosted under a repository subpath.

## Important

This is a prototype, not a live multiplayer game. Browser storage is not authoritative or secure for future networked gameplay. Review [QA.md](QA.md) before release.
