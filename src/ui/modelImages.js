import { slugify } from './format.js'

// Optional car photography, resolved at build time so missing images cost
// nothing (no 404s, no data edits). To give a model a picture, drop a file at:
//
//   src/assets/models/<brand-slug>/<model-name-slugified>.png
//
// e.g. src/assets/models/porsche/911-carrera.png  ->  Porsche "911 Carrera"
//      src/assets/models/audi/rs6-avant.webp      ->  Audi "RS6 Avant"
//
// Transparent PNG/WebP of the car in side profile works best — the card floats
// the image above its white body, so a transparent background looks seamless.
const files = import.meta.glob('../assets/models/**/*.{png,jpg,jpeg,webp,avif}', {
  eager: true,
  query: '?url',
  import: 'default',
})

const byKey = new Map()
for (const [path, url] of Object.entries(files)) {
  const match = path.match(/\/models\/([^/]+)\/(.+)\.[^.]+$/)
  if (match) byKey.set(`${match[1]}/${slugify(match[2])}`, url)
}

export function modelImage(brandSlug, modelName) {
  return byKey.get(`${brandSlug}/${slugify(modelName)}`) ?? null
}

export function hasModelImages() {
  return byKey.size > 0
}
