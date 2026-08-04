import { esc, modelKey } from './format.js'
import { logoImgHTML, attachLogoFallbacks } from './brandLogo.js'
import { renderModelCard, renderModelDetail, FOOTNOTE } from './ModelCard.js'
import { BrandDrawer } from './BrandDrawer.js'
import { FilterPanel } from './FilterPanel.js'
import { CompareTray } from './CompareTray.js'
import { Modal } from './Modal.js'

const ALL_CATEGORIES = 'all'

export class UIController {
  constructor(brandRegistry, scene) {
    this.registry = brandRegistry
    this.scene = scene
    this.activeBrand = null
    this.activeCategory = ALL_CATEGORIES

    this.modal = new Modal()
  }

  init() {
    this.el = {
      brandName: document.getElementById('brand-name'),
      brandTagline: document.getElementById('brand-tagline'),
      logoMark: document.getElementById('logo-mark'),
      categoryNav: document.getElementById('category-nav'),
      modelPanel: document.getElementById('model-panel'),
      resultCount: document.getElementById('result-count'),
      promoQuestion: document.getElementById('promo-question'),
      promoToggle: document.getElementById('promo-toggle'),
      promoBody: document.getElementById('promo-body'),
    }

    this.drawer = new BrandDrawer(
      document.getElementById('brand-drawer'),
      this.registry,
      {
        toggle: document.getElementById('menu-toggle'),
        onSelectBrand: (slug) => {
          this._selectBrand(slug)
          window.scrollTo({ top: 0, behavior: 'smooth' })
        },
        onSelectModel: (brandSlug, categorySlug, modelName) => {
          this._selectBrand(brandSlug)
          this._selectCategory(categorySlug)
          this._revealModel(brandSlug, modelName)
        },
      }
    )

    this.filters = new FilterPanel(document.getElementById('filter-groups'), {
      onChange: () => this._renderModels(),
    })

    this.compare = new CompareTray(document.getElementById('compare-tray'), {
      modal: this.modal,
      onChange: () => this._syncCompareCheckboxes(),
    })

    this._bindCategoryNav()
    this._bindModelPanel()
    this._bindSidebar()

    this._selectBrand(this.registry.getAll()[0].slug)
  }

  // ── Brand ──────────────────────────────────────────────────────────────

  _selectBrand(slug) {
    const brand = this.registry.getBySlug(slug)
    if (!brand || brand === this.activeBrand) {
      if (brand) this.drawer.setActive(slug)
      return
    }

    this.activeBrand = brand
    this.activeCategory = ALL_CATEGORIES

    document.documentElement.style.setProperty('--brand-accent', brand.accentColor)
    this.el.brandName.textContent = brand.name
    this.el.brandTagline.textContent = brand.tagline
    this.el.logoMark.innerHTML = logoImgHTML(brand, 'brand-hero-logo')
    attachLogoFallbacks(this.el.logoMark, this.registry)

    this.drawer.setActive(slug)
    this.filters.setBrand(brand)
    this._buildCategoryNav(brand)
    this._buildPromo(brand)
    this._renderModels()
  }

  // ── Category tabs ──────────────────────────────────────────────────────

  _buildCategoryNav(brand) {
    const tabs = [
      { slug: ALL_CATEGORIES, label: 'All Models' },
      ...brand.categories.map((cat) => ({ slug: cat.slug, label: cat.label })),
    ]

    this.el.categoryNav.innerHTML = tabs
      .map(
        (tab) => `
        <button class="category-pill${tab.slug === this.activeCategory ? ' active' : ''}"
          type="button" data-slug="${esc(tab.slug)}"
          aria-pressed="${tab.slug === this.activeCategory}">
          ${esc(tab.label)}
        </button>`
      )
      .join('')
  }

  _bindCategoryNav() {
    this.el.categoryNav.addEventListener('click', (e) => {
      const pill = e.target.closest('.category-pill')
      if (pill) this._selectCategory(pill.dataset.slug)
    })
  }

  _selectCategory(slug) {
    this.activeCategory = slug
    this.el.categoryNav.querySelectorAll('.category-pill').forEach((pill) => {
      const active = pill.dataset.slug === slug
      pill.classList.toggle('active', active)
      pill.setAttribute('aria-pressed', String(active))
    })
    this._renderModels()
  }

  // ── Sidebar ────────────────────────────────────────────────────────────

  _bindSidebar() {
    document
      .getElementById('reset-filter')
      .addEventListener('click', () => this.filters.reset())

    this.el.promoToggle.addEventListener('click', () => {
      const open = this.el.promoBody.hidden
      this.el.promoBody.hidden = !open
      this.el.promoToggle.setAttribute('aria-expanded', String(open))
    })
  }

  _buildPromo(brand) {
    this.el.promoQuestion.textContent =
      `What are the differences between ${brand.name}’s model lines?`

    this.el.promoBody.innerHTML = brand.categories
      .map(
        (cat) => `
        <div class="promo-line">
          <p class="promo-line-label">${esc(cat.label)}
            <span class="promo-line-count">${cat.models.length}</span>
          </p>
          <p class="promo-line-models">
            ${esc(cat.models.map((m) => m.name).join(', '))}
          </p>
        </div>`
      )
      .join('')

    this.el.promoBody.hidden = true
    this.el.promoToggle.setAttribute('aria-expanded', 'false')
  }

  // ── Model grid ─────────────────────────────────────────────────────────

  // Flattened [{ model, category }] for the active brand + category tab.
  _visibleEntries() {
    const cats =
      this.activeCategory === ALL_CATEGORIES
        ? this.activeBrand.categories
        : this.activeBrand.categories.filter((c) => c.slug === this.activeCategory)

    return cats.flatMap((cat) => cat.models.map((model) => ({ model, category: cat })))
  }

  _renderModels() {
    const entries = this._visibleEntries()
    const matching = entries.filter(({ model }) => this.filters.matches(model))

    if (matching.length === 0) {
      this.el.modelPanel.innerHTML = `
        <p class="models-empty">
          No ${esc(this.activeBrand.name)} models match these filters.
          <button class="link-button" type="button" data-action="clear-filters">
            Clear filters
          </button>
        </p>`
    } else {
      this.el.modelPanel.innerHTML = matching
        .map(({ model }) =>
          renderModelCard(model, this.activeBrand, {
            compared: this.compare.has(modelKey(this.activeBrand.slug, model.name)),
          })
        )
        .join('')
    }

    const total = entries.length
    const shown = matching.length
    this.el.resultCount.textContent =
      shown === total
        ? `${total} ${total === 1 ? 'model' : 'models'}`
        : `${shown} of ${total} models`
  }

  _bindModelPanel() {
    this.el.modelPanel.addEventListener('click', (e) => {
      if (e.target.closest('[data-action="clear-filters"]')) return this.filters.reset()

      const card = e.target.closest('.model-card')
      if (!card) return
      const found = this._findByKey(card.dataset.modelKey)
      if (!found) return

      if (e.target.closest('[data-action="detail"]')) {
        this.modal.open(renderModelDetail(found.model, found.brand), {
          label: `${found.brand.name} ${found.model.name}`,
        })
      } else if (e.target.closest('[data-action="footnote"]')) {
        this.modal.open(
          `<h2 class="compare-title">About this price</h2>
           <p class="footnote-body">${esc(FOOTNOTE)}</p>`,
          { label: 'About this price' }
        )
      }
    })

    // Checkbox state lives on the tray, which can refuse when it is full.
    this.el.modelPanel.addEventListener('change', (e) => {
      const box = e.target.closest('input[data-action="compare"]')
      if (!box) return

      const card = box.closest('.model-card')
      const found = this._findByKey(card.dataset.modelKey)
      if (!found) return

      if (box.checked) {
        if (!this.compare.add(found.model, found.brand)) {
          box.checked = false
          this._flashTrayFull()
        }
      } else {
        this.compare.remove(card.dataset.modelKey)
      }
    })
  }

  _syncCompareCheckboxes() {
    this.el.modelPanel
      .querySelectorAll('input[data-action="compare"]')
      .forEach((box) => {
        const key = box.closest('.model-card')?.dataset.modelKey
        box.checked = Boolean(key) && this.compare.has(key)
      })
  }

  _flashTrayFull() {
    const tray = document.getElementById('compare-tray')
    tray.classList.add('tray-full')
    setTimeout(() => tray.classList.remove('tray-full'), 600)
  }

  // ── Lookup + reveal ────────────────────────────────────────────────────

  _findByKey(key) {
    if (!key) return null
    for (const brand of this.registry.getAll()) {
      for (const cat of brand.categories) {
        for (const model of cat.models) {
          if (modelKey(brand.slug, model.name) === key) return { model, brand, category: cat }
        }
      }
    }
    return null
  }

  // Scroll a specific card into view and pulse it, after the grid has painted.
  _revealModel(brandSlug, modelName) {
    const key = modelKey(brandSlug, modelName)
    requestAnimationFrame(() => {
      const card = this.el.modelPanel.querySelector(`[data-model-key="${key}"]`)
      if (!card) {
        document.getElementById('models-section').scrollIntoView({ behavior: 'smooth' })
        return
      }
      card.scrollIntoView({ behavior: 'smooth', block: 'center' })
      card.classList.add('revealed')
      setTimeout(() => card.classList.remove('revealed'), 1600)
    })
  }
}
