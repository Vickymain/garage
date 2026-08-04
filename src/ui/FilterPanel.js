import { esc } from './format.js'

// Every filter value below is drawn from the tag vocabulary already present in
// the brand data, so a group only appears when the active brand actually has
// models to match it. Body design is handled by the category tabs instead.
const GROUPS = [
  {
    key: 'drive',
    label: 'Drive',
    values: ['All-Wheel Drive', 'Rear-Wheel Drive', 'Front-Wheel Drive'],
  },
  {
    key: 'fuel',
    label: 'Fueltype',
    values: ['Gasoline', 'Hybrid', 'Electric'],
  },
  {
    key: 'transmission',
    label: 'Transmission',
    values: ['Automatic', 'Manual'],
  },
]

export class FilterPanel {
  constructor(container, { onChange }) {
    this.container = container
    this.onChange = onChange
    this.selected = new Map() // group key -> Set of tag values
    this.groups = []

    this.container.addEventListener('change', (e) => {
      const input = e.target.closest('input[type="checkbox"][data-group]')
      if (!input) return

      const set = this.selected.get(input.dataset.group) ?? new Set()
      if (input.checked) set.add(input.dataset.value)
      else set.delete(input.dataset.value)
      this.selected.set(input.dataset.group, set)

      this._syncCounts()
      this.onChange()
    })
  }

  // Rebuild for a brand, keeping only groups whose values that brand offers.
  setBrand(brand) {
    const available = new Set(
      brand.categories.flatMap((cat) => cat.models.flatMap((m) => m.tags))
    )

    this.groups = GROUPS.map((group) => ({
      ...group,
      values: group.values.filter((value) => available.has(value)),
    })).filter((group) => group.values.length > 1)

    this.selected = new Map(this.groups.map((g) => [g.key, new Set()]))
    this._render()
  }

  get activeCount() {
    let total = 0
    for (const set of this.selected.values()) total += set.size
    return total
  }

  matches(model) {
    const tags = new Set(model.tags)
    for (const set of this.selected.values()) {
      if (set.size === 0) continue
      let hit = false
      for (const value of set) {
        if (tags.has(value)) {
          hit = true
          break
        }
      }
      if (!hit) return false
    }
    return true
  }

  reset() {
    for (const set of this.selected.values()) set.clear()
    this.container
      .querySelectorAll('input[type="checkbox"][data-group]')
      .forEach((input) => (input.checked = false))
    this._syncCounts()
    this.onChange()
  }

  _render() {
    this.container.innerHTML = this.groups
      .map(
        (group) => `
        <details class="filter-group" data-group-key="${esc(group.key)}" open>
          <summary>
            <svg class="filter-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span class="filter-label">${esc(group.label)}</span>
            <span class="filter-count" hidden></span>
          </summary>
          <div class="filter-options">
            ${group.values
              .map(
                (value) => `
              <label class="filter-option">
                <input type="checkbox" data-group="${esc(group.key)}" value="${esc(value)}"
                  data-value="${esc(value)}" />
                <span>${esc(value)}</span>
              </label>`
              )
              .join('')}
          </div>
        </details>`
      )
      .join('')
  }

  _syncCounts() {
    this.groups.forEach((group) => {
      const count = this.selected.get(group.key)?.size ?? 0
      const badge = this.container.querySelector(
        `[data-group-key="${group.key}"] .filter-count`
      )
      if (!badge) return
      badge.hidden = count === 0
      badge.textContent = String(count)
    })
  }
}
