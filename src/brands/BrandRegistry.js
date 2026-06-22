import { mercedes } from './mercedes/index.js'
import { bmw } from './bmw/index.js'
import { porsche } from './porsche/index.js'
import { ferrari } from './ferrari/index.js'
import { bugatti } from './bugatti/index.js'
import { lamborghini } from './lamborghini/index.js'
import { mclaren } from './mclaren/index.js'
import { astonmartin } from './astonmartin/index.js'
import { koenigsegg } from './koenigsegg/index.js'
import { pagani } from './pagani/index.js'
import { audi } from './audi/index.js'
import { bentley } from './bentley/index.js'
import { volkswagen } from './volkswagen/index.js'

export class BrandRegistry {
  constructor() {
    this.brands = [
      mercedes,
      bmw,
      porsche,
      ferrari,
      lamborghini,
      mclaren,
      bugatti,
      koenigsegg,
      pagani,
      astonmartin,
      audi,
      bentley,
      volkswagen,
    ]
  }

  getAll() {
    return this.brands
  }

  getBySlug(slug) {
    return this.brands.find((b) => b.slug === slug) ?? null
  }
}
