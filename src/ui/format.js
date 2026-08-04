// Shared formatting helpers for the showroom UI.

// Illustrative monthly lease figure. Real quotes on the reference showroom work
// out to ~1.045% of MSRP per month on a 36-month term, so we use that flat rate
// purely for display — it is not a real finance offer (see the card footnote).
const MONTHLY_LEASE_RATE = 0.01045

const COMBINING_MARKS = /[̀-ͯ]/g

export function esc(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

// 'Huracán Sterrato' -> 'huracan-sterrato'
export function slugify(value) {
  return String(value)
    .toLowerCase()
    .normalize('NFD')
    .replace(COMBINING_MARKS, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// 'From $114,900' -> 114900
export function parsePrice(priceLabel) {
  const digits = String(priceLabel ?? '').replace(/[^0-9]/g, '')
  return digits ? Number(digits) : null
}

export function formatCurrency(amount, { cents = false } = {}) {
  return amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: cents ? 2 : 0,
    maximumFractionDigits: cents ? 2 : 0,
  })
}

// 'From $114,900' -> 'From $ 114,900' (spaced, matching the reference layout)
export function formatPriceLabel(priceLabel) {
  const msrp = parsePrice(priceLabel)
  if (msrp === null) return String(priceLabel ?? '')
  return `From $ ${msrp.toLocaleString('en-US')}`
}

export function monthlyLeaseLabel(priceLabel) {
  const msrp = parsePrice(priceLabel)
  if (msrp === null) return null
  return `e.g. ${formatCurrency(msrp * MONTHLY_LEASE_RATE, { cents: true })} monthly lease rate`
}

// Stable identity for a model across brands, used for compare + detail lookups.
export function modelKey(brandSlug, modelName) {
  return `${brandSlug}/${slugify(modelName)}`
}
