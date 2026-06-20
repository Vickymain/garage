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

    document.querySelectorAll('.brand-tab').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.slug === slug)
    })

    document.getElementById('brand-name').textContent = brand.name
    document.getElementById('brand-tagline').textContent = brand.tagline

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
    panel.innerHTML = cat.models
      .map(
        (m) => `<div class="model-card"><span class="model-name">${m.name}</span><span class="model-year">${m.year}</span></div>`
      )
      .join('')
  }
}
