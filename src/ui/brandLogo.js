import { esc } from './format.js'

// Brand logo files are dropped in by hand at the path each brand declares, so a
// file can legitimately be missing. Rather than let the browser render its
// broken-image icon, fall back to an accent-coloured monogram tile.
function monogram(brand) {
  const initials = brand.name
    .replace(/[^A-Za-z0-9 -]/g, '')
    .split(/[\s-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join('')

  const el = document.createElement('span')
  el.className = 'brand-monogram'
  el.style.setProperty('--monogram-color', brand.accentColor)
  el.textContent = initials || '?'
  el.setAttribute('role', 'img')
  el.setAttribute('aria-label', `${brand.name} logo`)
  return el
}

export function logoImgHTML(brand, className) {
  return `<img class="${className}" data-brand-logo="${esc(brand.slug)}"
    src="${esc(brand.logo)}" alt="${esc(brand.name)} logo" loading="lazy" />`
}

// Swaps any logo <img> that failed to load for its monogram. Call after the
// markup lands in the DOM; handles images that already errored before we
// attached a listener (complete && naturalWidth === 0).
export function attachLogoFallbacks(root, registry) {
  root.querySelectorAll('img[data-brand-logo]').forEach((img) => {
    const brand = registry.getBySlug(img.dataset.brandLogo)
    if (!brand) return

    const replace = () => {
      const mark = monogram(brand)
      mark.classList.add(...img.classList)
      img.replaceWith(mark)
    }

    if (img.complete) {
      if (img.naturalWidth === 0) replace()
    } else {
      img.addEventListener('error', replace, { once: true })
    }
  })
}
