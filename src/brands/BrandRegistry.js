import { mercedes } from './mercedes/index.js'
import { bmw } from './bmw/index.js'
import { porsche } from './porsche/index.js'
import { ferrari } from './ferrari/index.js'

export class BrandRegistry {
  constructor() {
    this.brands = [mercedes, bmw, porsche, ferrari]
  }

  getAll() {
    return this.brands
  }

  getBySlug(slug) {
    return this.brands.find((b) => b.slug === slug) ?? null
  }
}
