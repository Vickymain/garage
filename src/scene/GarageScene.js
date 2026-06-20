import * as THREE from 'three'
import { setupLights } from './lights.js'
import { setupEnvironment } from './environment.js'

export class GarageScene {
  constructor(canvas) {
    this.canvas = canvas
    this.renderer = null
    this.scene = null
    this.camera = null
    this.animationId = null
  }

  init() {
    this.scene = new THREE.Scene()

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: false,
    })
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping
    this.renderer.toneMappingExposure = 1.2

    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    this.camera.position.set(0, 2, 8)
    this.camera.lookAt(0, 0, 0)

    setupLights(this.scene)
    setupEnvironment(this.scene)

    window.addEventListener('resize', this._onResize.bind(this))
  }

  start() {
    this.init()
    this._animate()
  }

  _animate() {
    this.animationId = requestAnimationFrame(this._animate.bind(this))
    this.renderer.render(this.scene, this.camera)
  }

  _onResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(window.innerWidth, window.innerHeight)
  }

  dispose() {
    cancelAnimationFrame(this.animationId)
    this.renderer.dispose()
    window.removeEventListener('resize', this._onResize.bind(this))
  }
}
