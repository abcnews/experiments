# Three.js

An experiment with [Three.js](https://threejs.org/) on the web.

```js echo
import * as THREE from "three"

const aspectRatio = 4 / 3

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000)
const renderer = new THREE.WebGLRenderer({ alpha: true })
renderer.setSize(width, width / aspectRatio)

function animate() {
  cube.rotation.x += 0.001
  cube.rotation.y += 0.001
  renderer.render(scene, camera)
}

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0x2370dc })
material.wireframe = true
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

camera.position.z = 2

renderer.setAnimationLoop(animate)

display(renderer.domElement)
```


