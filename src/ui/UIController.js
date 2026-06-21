export class UIController {
  constructor(brandRegistry, scene) {
    this.registry = brandRegistry
    this.scene = scene
    this.activeBrand = null
    this.activeCategory = null
  }

  init() {
    this._buildBrandNav()
    this._selectBrand(this.registry.getAll()[0].slug)
  }

  _buildBrandNav() {
    const nav = document.getElementById('brand-nav')
    this.registry.getAll().forEach((brand) => {
      const btn = document.createElement('button')
      btn.className = 'brand-tab'
      btn.dataset.slug = brand.slug
      btn.textContent = brand.name
      btn.style.setProperty('--accent', brand.accentColor)
      btn.addEventListener('click', () => this._selectBrand(brand.slug))
      nav.appendChild(btn)
    })
  }

  _selectBrand(slug) {
    const brand = this.registry.getBySlug(slug)
    if (!brand) return

    this.activeBrand = brand
    window.scrollTo({ top: 0, behavior: 'smooth' })

    document.querySelectorAll('.brand-tab').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.slug === slug)
    })

    document.getElementById('brand-name').textContent = brand.name
    document.getElementById('brand-tagline').textContent = brand.tagline
    const mark = document.getElementById('logo-mark')
    mark.innerHTML = `<img src="${brand.logo}" alt="${brand.name} logo" />`
    document.documentElement.style.setProperty('--brand-accent', brand.accentColor)

    this._buildCategoryNav(brand)
    this._selectCategory(brand.categories[0].slug)
  }

  _buildCategoryNav(brand) {
    const nav = document.getElementById('category-nav')
    nav.innerHTML = ''
    brand.categories.forEach((cat) => {
      const btn = document.createElement('button')
      btn.className = 'category-pill'
      btn.dataset.slug = cat.slug
      btn.textContent = cat.label
      btn.addEventListener('click', () => this._selectCategory(cat.slug))
      nav.appendChild(btn)
    })
  }

  _selectCategory(slug) {
    this.activeCategory = slug
    const cat = this.activeBrand.categories.find((c) => c.slug === slug)
    if (!cat) return

    document.querySelectorAll('.category-pill').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.slug === slug)
    })

    const panel = document.getElementById('model-panel')
    panel.innerHTML = cat.models.map((m) => this._renderModelCard(m)).join('')
  }

  _renderModelCard(model) {
    const tags = model.tags
      .map((t) => `<span class="model-tag">${t}</span>`)
      .join('')

    const stats = model.stats
      .map(
        (s) => `<div class="model-stat">
          <span class="stat-value">${s.value}</span>
          <span class="stat-label">${s.label}</span>
        </div>`
      )
      .join('')

    return `
      <div class="model-card">
        <div class="card-image-slot"></div>
        <div class="card-body">
          <div class="card-header">
            <h3 class="model-name">${model.name}</h3>
            <p class="model-price">${model.price}</p>
          </div>
          <div class="model-tags">
            <span class="model-tag year-tag">${model.year}</span>
            ${tags}
          </div>
          <div class="model-stats">${stats}</div>
        </div>
      </div>`
  }
}
