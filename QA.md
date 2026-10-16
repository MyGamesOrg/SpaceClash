# Prelaunch QA — Voidward Command

## Status (2026-10-16)
The game has been rebranded and switched to original procedural fleet models. This is a **code-review branch**, not a certified release. The browser/Playwright tests and manual visual checks **must be rerun** before publishing.

## Changes to verify
- All four fleet types render in gameplay, hangar and fleet gallery without missing GLB requests.
- Original building models, upgrades, camps and workshop visuals render.
- Skybox switching works; both CC BY 4.0 backgrounds load and Credits remains accessible.
- Existing saves under the legacy `stellar-clash` / `stellar-preferences` keys continue to load.
- Desktop and mobile layouts, combat, fleet dismissal, export, and reduced-motion mode work.
- Browser network panel shows no requests to `assets/quaternius/`.

## Tests
- `tests/storage-service.cjs`: local snapshot validation and preferences.
- `tests/browser-original-fleet.cjs`: original fleet geometry, export and mobile gallery.
- Other `tests/browser-*.cjs`: gameplay and UI regressions (Node + Playwright + local HTTP server).
- Existing `test-artifacts/` JSON reports reflect **earlier builds** and do not prove this rebranded version passes.

## Legal/provenance review
The Quaternius GLB assets were removed from the current working tree pending redistribution clarification. The historical Git commits may still contain them. The two Jungle Jim skyboxes are credited under CC BY 4.0. Three.js remains MIT-licensed. Verify the underlying third-party source terms before publishing.
