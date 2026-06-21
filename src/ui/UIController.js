export class UIController {
  constructor(brandRegistry, scene) {
    this.registry = brandRegistry
    this.scene = scene
    this.activeBrand = null
    this.activeCategory = null
    this.menuOpen = false
  }

  init() {
    this._buildBrandMenu()
    this._setupMenuToggle()
    this._selectBrand(this.registry.getAll()[0].slug)
  }

  _buildBrandMenu() {
    const inner = document.getElementById('brand-menu-inner')
    this.registry.getAll().forEach((brand) => {
      const btn = document.createElement('button')
      btn.className = 'brand-option'
      btn.dataset.slug = brand.slug
      btn.innerHTML = `
        <img class="brand-option-logo" src="${brand.logo}" alt="${brand.name}" />
        <span>${brand.name}</span>
      `
      btn.addEventListener('click', () => {
        this._selectBrand(brand.slug)
        this._closeMenu()
      })
      inner.appendChild(btn)
    })
  }

  _setupMenuToggle() {
    const toggle = document.getElementById('menu-toggle')
    toggle.addEventListener('click', (e) => {
      e.stopPropagation()
      this.menuOpen ? this._closeMenu() : this._openMenu()
    })

    document.addEventListener('click', () => this._closeMenu())
    document.getElementById('brand-menu').addEventListener('click', (e) =>
      e.stopPropagation()
    )
  }

  _openMenu() {
    this.menuOpen = true
    document.getElementById('brand-menu').classList.add('open')
    document.getElementById('brand-menu').setAttribute('aria-hidden', 'false')
  }

  _closeMenu() {
    this.menuOpen = false
    document.getElementById('brand-menu').classList.remove('open')
    document.getElementById('brand-menu').setAttribute('aria-hidden', 'true')
  }

  _selectBrand(slug) {
    const brand = this.registry.getBySlug(slug)
    if (!brand) return

    this.activeBrand = brand
    window.scrollTo({ top: 0, behavior: 'smooth' })

    document.querySelectorAll('.brand-option').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.slug === slug)
    })

    document.getElementById('brand-name').textContent = brand.name
    document.getElementById('brand-tagline').textContent = brand.tagline
    document.getElementById('logo-mark').innerHTML = `<img src="${brand.logo}" alt="${brand.name} logo" />`
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

    document.getElementById('model-panel').innerHTML =
      cat.models.map((m) => this._renderModelCard(m)).join('')
  }

  _renderModelCard(model) {
    const tags = model.tags.map((t) => `<span class="model-tag">${t}</span>`).join('')
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
