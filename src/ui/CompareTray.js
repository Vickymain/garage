import { esc, formatPriceLabel, monthlyLeaseLabel, modelKey } from './format.js'

const MAX_COMPARE = 4

export class CompareTray {
  constructor(container, { modal, onChange }) {
    this.container = container
    this.modal = modal
    this.onChange = onChange
    this.entries = new Map() // key -> { model, brand }

    this.container.addEventListener('click', (e) => {
      const remove = e.target.closest('[data-compare-remove]')
      if (remove) return this.remove(remove.dataset.compareRemove)
      if (e.target.closest('[data-compare-clear]')) return this.clear()
      if (e.target.closest('[data-compare-open]')) return this._openTable()
    })
  }

  get size() {
    return this.entries.size
  }

  get isFull() {
    return this.entries.size >= MAX_COMPARE
  }

  has(key) {
    return this.entries.has(key)
  }

  // Returns false when the tray is full so the caller can revert its checkbox.
  add(model, brand) {
    const key = modelKey(brand.slug, model.name)
    if (this.entries.has(key)) return true
    if (this.isFull) return false
    this.entries.set(key, { model, brand })
    this._render()
    this.onChange()
    return true
  }

  remove(key) {
    if (!this.entries.delete(key)) return
    this._render()
    this.onChange()
  }

  clear() {
    this.entries.clear()
    this._render()
    this.onChange()
  }

  _render() {
    if (this.entries.size === 0) {
      this.container.hidden = true
      this.container.innerHTML = ''
      return
    }

    const chips = [...this.entries.entries()]
      .map(
        ([key, { model, brand }]) => `
        <span class="compare-chip">
          <span class="chip-brand">${esc(brand.name)}</span>
          <span class="chip-model">${esc(model.name)}</span>
          <button type="button" data-compare-remove="${esc(key)}"
            aria-label="Remove ${esc(model.name)} from comparison">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M1 1l8 8M9 1L1 9" stroke="currentColor" stroke-width="1.4"
                stroke-linecap="round"/>
            </svg>
          </button>
        </span>`
      )
      .join('')

    this.container.hidden = false
    this.container.innerHTML = `
      <div class="tray-inner">
        <div class="tray-chips">${chips}</div>
        <div class="tray-actions">
          <span class="tray-count">${this.entries.size} of ${MAX_COMPARE} selected</span>
          <button class="btn btn-secondary btn-sm" type="button" data-compare-clear>Clear</button>
          <button class="btn btn-primary btn-sm" type="button" data-compare-open
            ${this.entries.size < 2 ? 'disabled' : ''}>Compare</button>
        </div>
      </div>`
  }

  _openTable() {
    const entries = [...this.entries.values()]
    if (entries.length < 2) return

    // Stat labels vary slightly between brands ('Top speed' vs 'Top speed
    // (est.)'), so build the row set as a union in first-seen order.
    const labels = []
    entries.forEach(({ model }) => {
      model.stats.forEach((stat) => {
        if (!labels.includes(stat.label)) labels.push(stat.label)
      })
    })

    const headers = entries
      .map(
        ({ model, brand }) => `
        <th scope="col">
          <span class="compare-th-brand">${esc(brand.name)}</span>
          <span class="compare-th-model">${esc(model.name)}</span>
        </th>`
      )
      .join('')

    const row = (label, cells) => `
      <tr>
        <th scope="row">${esc(label)}</th>
        ${cells.map((value) => `<td>${value}</td>`).join('')}
      </tr>`

    const statRows = labels
      .map((label) =>
        row(
          label,
          entries.map(({ model }) => {
            const stat = model.stats.find((s) => s.label === label)
            return stat ? esc(stat.value) : '<span class="compare-na">—</span>'
          })
        )
      )
      .join('')

    const priceRow = row(
      'Price',
      entries.map(({ model }) => esc(formatPriceLabel(model.price)))
    )
    const leaseRow = row(
      'Monthly lease (est.)',
      entries.map(({ model }) => {
        const lease = monthlyLeaseLabel(model.price)
        return lease ? esc(lease.replace(/^e\.g\. /, '').replace(/ monthly lease rate$/, '')) : '—'
      })
    )
    const yearRow = row(
      'Model year',
      entries.map(({ model }) => esc(model.year))
    )
    const tagRow = row(
      'Drivetrain',
      entries.map(({ model }) => esc(model.tags.join(' · ')))
    )

    this.modal.open(
      `
      <h2 class="compare-title">Compare models</h2>
      <div class="compare-scroll">
        <table class="compare-table">
          <thead><tr><td class="compare-corner"></td>${headers}</tr></thead>
          <tbody>${priceRow}${leaseRow}${yearRow}${tagRow}${statRows}</tbody>
        </table>
      </div>`,
      { label: 'Model comparison' }
    )
  }
}

export { MAX_COMPARE }
