import * as THREE from 'three'

export function setupEnvironment(scene) {
  scene.background = new THREE.Color(0x0d0d0d)
  scene.fog = new THREE.FogExp2(0x0d0d0d, 0.035)

  // Garage floor — reflective dark concrete
  const floorGeo = new THREE.PlaneGeometry(40, 40)
  const floorMat = new THREE.MeshStandardMaterial({
    color: 0x1a1a1a,
    roughness: 0.3,
    metalness: 0.4,
  })
  const floor = new THREE.Mesh(floorGeo, floorMat)
  floor.rotation.x = -Math.PI / 2
  floor.receiveShadow = true
  scene.add(floor)
}
