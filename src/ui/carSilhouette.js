// Stand-in artwork for models that have no photograph yet. Drawn in the active
// brand accent at low opacity so an image-less card still reads as intentional
// rather than broken. See modelImages.js for how to supply real photography.
export function carSilhouetteHTML(className = 'card-silhouette') {
  return `
    <svg class="${className}" viewBox="0 0 240 96" fill="none" aria-hidden="true">
      <path
        d="M12 68c0-11 7-15 19-17l26-5c12-12 28-18 50-18h38c22 0 38 7 50 19l19 4c12 2 16 8 16 17v4c0 3-2 5-6 5H18c-4 0-6-2-6-5z"
        fill="currentColor" opacity="0.16" />
      <path
        d="M75 46c10-9 23-13 42-13h32c19 0 33 5 44 14"
        stroke="currentColor" stroke-width="2.5" stroke-linecap="round" opacity="0.3" />
      <circle cx="68" cy="74" r="14" fill="currentColor" opacity="0.28" />
      <circle cx="180" cy="74" r="14" fill="currentColor" opacity="0.28" />
      <circle cx="68" cy="74" r="6" fill="currentColor" opacity="0.18" />
      <circle cx="180" cy="74" r="6" fill="currentColor" opacity="0.18" />
    </svg>`
}
