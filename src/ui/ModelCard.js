import { esc, formatPriceLabel, monthlyLeaseLabel, modelKey } from './format.js'
import { modelImage } from './modelImages.js'
import { carSilhouetteHTML } from './carSilhouette.js'

const FOOTNOTE =
  'Manufacturer’s Suggested Retail Price. Excludes options; taxes; title; ' +
  'registration; delivery; processing and handling fee; dealer charges. Dealer ' +
  'sets actual selling price. The monthly lease rate shown is an illustrative ' +
  'estimate for this showroom, not a finance offer.'

const INFO_ICON = `
  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="1.2"/>
    <path d="M8 7v4.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
    <circle cx="8" cy="4.9" r="0.85" fill="currentColor"/>
  </svg>`

function mediaHTML(model, brand) {
  const src = modelImage(brand.slug, model.name)
  if (src) {
    return `<img class="card-photo" src="${esc(src)}"
      alt="${esc(brand.name)} ${esc(model.name)}" loading="lazy" />`
  }
  return carSilhouetteHTML()
}

export function renderModelCard(model, brand, { compared = false } = {}) {
  const key = modelKey(brand.slug, model.name)
  const lease = monthlyLeaseLabel(model.price)

  const tags = model.tags
    .map((tag) => `<span class="model-tag">${esc(tag)}</span>`)
    .join('')

  const stats = model.stats
    .map(
      (stat) => `
      <div class="model-stat">
        <span class="stat-value">${esc(stat.value)}</span>
        <span class="stat-label">${esc(stat.label)}</span>
      </div>`
    )
    .join('')

  return `
    <article class="model-card" data-model-key="${esc(key)}">
      <div class="card-media">${mediaHTML(model, brand)}</div>

      <div class="card-body">
        <h3 class="model-name">${esc(model.name)}</h3>

        <div class="model-pricing">
          <span class="model-price">${esc(formatPriceLabel(model.price))}<sup>1</sup></span>
          ${
            lease
              ? `<span class="model-lease">${esc(lease)}
                   <button class="info-dot" type="button" data-action="footnote"
                     aria-label="About this price and lease estimate">${INFO_ICON}</button>
                 </span>`
              : ''
          }
        </div>

        <div class="model-tags">
          <span class="model-tag year-tag">${esc(model.year)}</span>
          ${tags}
        </div>

        <div class="model-stats">${stats}</div>

        <p class="card-footnote"><sup>1</sup> ${esc(FOOTNOTE)}</p>

        <div class="card-actions">
          <button class="btn btn-primary" type="button" data-action="detail">
            Explore in Detail
          </button>
          <button class="btn btn-secondary" type="button" data-action="configure" disabled
            title="A configurator is not part of this showroom">
            Configure
          </button>
        </div>

        <label class="compare-toggle">
          <input type="checkbox" data-action="compare" ${compared ? 'checked' : ''} />
          <span>Compare</span>
        </label>
      </div>
    </article>`
}

export function renderModelDetail(model, brand) {
  const lease = monthlyLeaseLabel(model.price)

  const stats = model.stats
    .map(
      (stat) => `
      <div class="detail-stat">
        <span class="stat-value">${esc(stat.value)}</span>
        <span class="stat-label">${esc(stat.label)}</span>
      </div>`
    )
    .join('')

  const tags = model.tags
    .map((tag) => `<span class="model-tag">${esc(tag)}</span>`)
    .join('')

  return `
    <div class="detail-head">
      <p class="detail-brand">${esc(brand.name)}</p>
      <h2 class="detail-name">${esc(model.name)}</h2>
      <div class="model-tags">
        <span class="model-tag year-tag">${esc(model.year)}</span>
        ${tags}
      </div>
    </div>

    <div class="detail-media">${mediaHTML(model, brand)}</div>

    <div class="detail-pricing">
      <span class="model-price">${esc(formatPriceLabel(model.price))}</span>
      ${lease ? `<span class="model-lease">${esc(lease)}</span>` : ''}
    </div>

    <div class="detail-stats">${stats}</div>

    <p class="card-footnote">${esc(FOOTNOTE)}</p>`
}

export { FOOTNOTE }
