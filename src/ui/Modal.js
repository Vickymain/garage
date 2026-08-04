// Minimal dialog shell shared by the model detail view and the compare table.
// Built lazily so index.html stays free of empty overlay markup.
export class Modal {
  constructor() {
    this.el = null
    this.content = null
    this.lastFocused = null
    this._onKeydown = this._onKeydown.bind(this)
  }

  _build() {
    if (this.el) return

    this.el = document.createElement('div')
    this.el.className = 'modal'
    this.el.setAttribute('role', 'dialog')
    this.el.setAttribute('aria-modal', 'true')
    this.el.hidden = true
    this.el.innerHTML = `
      <div class="modal-scrim" data-modal-dismiss></div>
      <div class="modal-panel">
        <button class="modal-close" type="button" aria-label="Close" data-modal-dismiss>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" stroke-width="1.6"
              stroke-linecap="round"/>
          </svg>
        </button>
        <div class="modal-content"></div>
      </div>`

    this.content = this.el.querySelector('.modal-content')
    this.el.addEventListener('click', (e) => {
      if (e.target.closest('[data-modal-dismiss]')) this.close()
    })

    document.body.appendChild(this.el)
  }

  open(html, { label } = {}) {
    this._build()
    this.lastFocused = document.activeElement
    this.content.innerHTML = html
    if (label) this.el.setAttribute('aria-label', label)
    this.el.hidden = false
    document.body.classList.add('scroll-locked')
    document.addEventListener('keydown', this._onKeydown)
    this.el.querySelector('.modal-close').focus()
  }

  close() {
    if (!this.el || this.el.hidden) return
    this.el.hidden = true
    this.content.innerHTML = ''
    document.body.classList.remove('scroll-locked')
    document.removeEventListener('keydown', this._onKeydown)
    if (this.lastFocused?.isConnected) this.lastFocused.focus()
  }

  get isOpen() {
    return Boolean(this.el) && !this.el.hidden
  }

  _onKeydown(e) {
    if (e.key === 'Escape') this.close()
  }
}
