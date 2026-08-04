import { esc, slugify } from './format.js'
import { logoImgHTML, attachLogoFallbacks } from './brandLogo.js'
import { modelImage } from './modelImages.js'
import { carSilhouetteHTML } from './carSilhouette.js'

// Full-bleed menu overlay: brand list on the left, that brand's model lines
// previewed on the right. Hovering or focusing a brand previews it; clicking a
// brand opens it, and clicking a model jumps straight to its category.
export class BrandDrawer {
  constructor(root, registry, { toggle, onSelectBrand, onSelectModel }) {
    this.root = root
    this.registry = registry
    this.toggle = toggle
    this.onSelectBrand = onSelectBrand
    this.onSelectModel = onSelectModel

    this.isOpen = false
    this.previewSlug = null
    this.lastFocused = null
    this._onKeydown = this._onKeydown.bind(this)

    this._buildShell()
    this._bind()
  }

  _buildShell() {
    this.root.innerHTML = `
      <div class="drawer-brands">
        <p class="drawer-eyebrow">Brands</p>
        <ul class="drawer-brand-list" role="list"></ul>
      </div>

      <div class="drawer-preview" aria-live="polite">
        <div class="drawer-preview-head">
          <h2 class="drawer-preview-name"></h2>
          <p class="drawer-preview-tagline"></p>
        </div>
        <div class="drawer-preview-body"></div>
      </div>

      <div class="drawer-scrim" data-drawer-dismiss>
        <button class="drawer-close" type="button" aria-label="Close menu"
          data-drawer-dismiss>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" stroke-width="1.6"
              stroke-linecap="round"/>
          </svg>
        </button>
      </div>`

    this.list = this.root.querySelector('.drawer-brand-list')
    this.previewName = this.root.querySelector('.drawer-preview-name')
    this.previewTagline = this.root.querySelector('.drawer-preview-tagline')
    this.previewBody = this.root.querySelector('.drawer-preview-body')

    this.list.innerHTML = this.registry
      .getAll()
      .map(
        (brand) => `
        <li>
          <button class="drawer-brand" type="button" data-slug="${esc(brand.slug)}">
            ${logoImgHTML(brand, 'drawer-brand-logo')}
            <span class="drawer-brand-name">${esc(brand.name)}</span>
            <svg class="drawer-brand-chevron" width="12" height="12" viewBox="0 0 12 12"
              fill="none" aria-hidden="true">
              <path d="M4 2.5L7.5 6L4 9.5" stroke="currentColor" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </li>`
      )
      .join('')

    attachLogoFallbacks(this.list, this.registry)
  }

  _bind() {
    this.toggle.addEventListener('click', () => (this.isOpen ? this.close() : this.open()))

    this.root.addEventListener('click', (e) => {
      if (e.target.closest('[data-drawer-dismiss]')) return this.close()

      const brandBtn = e.target.closest('.drawer-brand')
      if (brandBtn) {
        this.onSelectBrand(brandBtn.dataset.slug)
        return this.close()
      }

      const modelBtn = e.target.closest('.drawer-model')
      if (modelBtn) {
        this.onSelectModel(
          modelBtn.dataset.brand,
          modelBtn.dataset.category,
          modelBtn.dataset.model
        )
        return this.close()
      }
    })

    // Preview follows the pointer / keyboard focus without committing.
    this.list.addEventListener('pointerenter', (e) => this._maybePreview(e.target), true)
    this.list.addEventListener('focusin', (e) => this._maybePreview(e.target))
  }

  _maybePreview(target) {
    const btn = target.closest?.('.drawer-brand')
    if (btn && btn.dataset.slug !== this.previewSlug) this.preview(btn.dataset.slug)
  }

  open() {
    this.isOpen = true
    this.lastFocused = document.activeElement
    this.root.hidden = false
    this.root.setAttribute('aria-hidden', 'false')
    this.toggle.setAttribute('aria-expanded', 'true')
    document.body.classList.add('scroll-locked')
    document.addEventListener('keydown', this._onKeydown)

    // Reveal after unhide so the CSS transition runs.
    requestAnimationFrame(() => this.root.classList.add('open'))

    const active = this.previewSlug ?? this.registry.getAll()[0].slug
    this.preview(active)
    this.list.querySelector(`.drawer-brand[data-slug="${active}"]`)?.focus()
  }

  close() {
    if (!this.isOpen) return
    this.isOpen = false
    this.root.classList.remove('open')
    this.root.setAttribute('aria-hidden', 'true')
    this.toggle.setAttribute('aria-expanded', 'false')
    document.body.classList.remove('scroll-locked')
    document.removeEventListener('keydown', this._onKeydown)

    const finish = () => {
      if (!this.isOpen) this.root.hidden = true
    }
    this.root.addEventListener('transitionend', finish, { once: true })
    setTimeout(finish, 400) // fallback if the transition never fires

    if (this.lastFocused?.isConnected) this.lastFocused.focus()
  }

  setActive(slug) {
    this.previewSlug = slug
    this.list.querySelectorAll('.drawer-brand').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.slug === slug)
    })
  }

  preview(slug) {
    const brand = this.registry.getBySlug(slug)
    if (!brand) return

    this.previewSlug = slug
    this.list.querySelectorAll('.drawer-brand').forEach((btn) => {
      btn.classList.toggle('previewing', btn.dataset.slug === slug)
    })

    this.root.style.setProperty('--brand-accent', brand.accentColor)
    this.previewName.textContent = brand.name
    this.previewTagline.textContent = brand.tagline

    this.previewBody.innerHTML = brand.categories
      .map(
        (cat) => `
        <section class="drawer-category">
          <h3 class="drawer-category-label">${esc(cat.label)}</h3>
          <div class="drawer-model-grid">
            ${cat.models.map((model) => this._modelTile(model, cat, brand)).join('')}
          </div>
        </section>`
      )
      .join('')
  }

  _modelTile(model, category, brand) {
    const src = modelImage(brand.slug, model.name)
    const media = src
      ? `<img class="drawer-model-photo" src="${esc(src)}"
          alt="${esc(brand.name)} ${esc(model.name)}" loading="lazy" />`
      : carSilhouetteHTML('drawer-model-silhouette')

    // The first tag is always the fuel type in the brand data.
    const fuel = model.tags[0]

    return `
      <button class="drawer-model" type="button"
        data-brand="${esc(brand.slug)}"
        data-category="${esc(category.slug)}"
        data-model="${esc(model.name)}"
        data-model-slug="${esc(slugify(model.name))}">
        <span class="drawer-model-name">${esc(model.name)}</span>
        <span class="drawer-model-media">${media}</span>
        ${fuel ? `<span class="model-tag">${esc(fuel)}</span>` : ''}
      </button>`
  }

  _onKeydown(e) {
    if (e.key === 'Escape') this.close()
  }
}
