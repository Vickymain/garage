import { GarageScene } from './scene/GarageScene.js'
import { BrandRegistry } from './brands/BrandRegistry.js'
import { UIController } from './ui/UIController.js'

const canvas = document.getElementById('garage-canvas')

const scene = new GarageScene(canvas)
const brands = new BrandRegistry()
const ui = new UIController(brands, scene)

ui.init()
scene.start()
