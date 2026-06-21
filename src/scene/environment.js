import * as THREE from 'three'

export function setupEnvironment(scene) {
  scene.background = new THREE.Color(0xf4f4f2)
  scene.fog = new THREE.FogExp2(0xf4f4f2, 0.03)

  // Garage floor — light polished surface
  const floorGeo = new THREE.PlaneGeometry(40, 40)
  const floorMat = new THREE.MeshStandardMaterial({
    color: 0xe8e8e6,
    roughness: 0.4,
    metalness: 0.1,
  })
  const floor = new THREE.Mesh(floorGeo, floorMat)
  floor.rotation.x = -Math.PI / 2
  floor.receiveShadow = true
  scene.add(floor)
}
