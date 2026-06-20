import * as THREE from 'three'

export function setupLights(scene) {
  const ambient = new THREE.AmbientLight(0xffffff, 0.4)
  scene.add(ambient)

  // Key light — main overhead garage strip
  const key = new THREE.DirectionalLight(0xffffff, 2)
  key.position.set(5, 10, 5)
  key.castShadow = true
  key.shadow.mapSize.set(2048, 2048)
  key.shadow.camera.near = 0.1
  key.shadow.camera.far = 50
  key.shadow.camera.left = -10
  key.shadow.camera.right = 10
  key.shadow.camera.top = 10
  key.shadow.camera.bottom = -10
  scene.add(key)

  // Fill light — subtle from the opposite side
  const fill = new THREE.DirectionalLight(0x8ab4f8, 0.6)
  fill.position.set(-5, 5, -5)
  scene.add(fill)

  // Ground bounce — warm reflection from the garage floor
  const bounce = new THREE.HemisphereLight(0xffffff, 0x444444, 0.5)
  scene.add(bounce)
}
