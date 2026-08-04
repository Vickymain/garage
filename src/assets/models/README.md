# Model photography

Optional car images for the model cards. Anything dropped in here is picked up
automatically by `src/ui/modelImages.js` — no code or brand-data changes needed.

## Naming

```
src/assets/models/<brand-slug>/<model-name-slugified>.<png|jpg|webp|avif>
```

The brand slug is the `slug` field in `src/brands/<brand>/index.js`. The model
slug is the model's `name`, lowercased with non-alphanumerics collapsed to `-`.

| Brand / model | File path |
|---|---|
| Porsche → `911 Carrera` | `porsche/911-carrera.png` |
| Audi → `RS6 Avant` | `audi/rs6-avant.webp` |
| Mercedes-Benz → `C 63 S AMG` | `mercedes/c-63-s-amg.png` |
| Lamborghini → `Huracán Sterrato` | `lamborghini/huracan-sterrato.png` |

Accents are stripped, so `Huracán` becomes `huracan`.

## What works best

A **side-profile shot on a transparent background** (PNG or WebP). The card
floats the artwork above its white body, so a transparent cutout looks seamless.
Roughly 800×340 is plenty — the card renders it at 150px tall.

Any model without a file here falls back to a silhouette drawn in the brand's
accent colour, so a partially-filled folder still looks intentional.
