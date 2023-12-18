import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.outputColorSpace = THREE.SRGBColorSpace;

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000);
renderer.setPixelRatio(window.devicePixelRatio);

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(12, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(0, 0, 15);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = false;
controls.minDistance = 1;
controls.maxDistance = 30;
controls.minPolarAngle = 0.5;
controls.maxPolarAngle = 1.5;
controls.autoRotate = false;
controls.target = new THREE.Vector3(0, 1, 0);
controls.update();

const groundGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
groundGeometry.rotateX(-Math.PI / 2);
const groundMaterial = new THREE.MeshStandardMaterial({
  color: 0x555555,
  side: THREE.DoubleSide
});
const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
groundMesh.castShadow = false;
groundMesh.receiveShadow = true;
scene.add(groundMesh);

const spotLight = new THREE.SpotLight(0xffffff, 3, 100, 0.22, 1);
spotLight.position.set(1, 25, 15);
spotLight.castShadow = true;
spotLight.shadow.bias = -0.0001;
scene.add(spotLight);

let gltf;

const loader = new GLTFLoader().setPath('/node_modules/ryu/');
loader.load('scene.gltf', (loadedGltf) => {
  gltf = loadedGltf.scene;

  gltf.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  gltf.scale.set(2, 2, 2);
  gltf.position.set(0, 0, 0);
  scene.add(gltf);

  document.getElementById('progress-container').style.display = 'none';
}, (xhr) => {
  document.getElementById('progress').innerHTML = `LOADING ${Math.max(xhr.loaded / xhr.total, 1) * 100}/100`;
});

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Set up keyboard input
var keys = {};
window.addEventListener('keydown', function (e) {
  keys[e.code] = true;
});

window.addEventListener('keyup', function (e) {
  keys[e.code] = false;
});

// Update function
function update() {
  // Move the model based on keyboard input
  if (gltf) {
    if (keys['ArrowUp']) {
      gltf.position.z -= 0.1;
    }
    if (keys['ArrowDown']) {
      gltf.position.z += 0.1;
    }
    if (keys['ArrowLeft']) {
      gltf.position.x -= 0.1;
    }
    if (keys['ArrowRight']) {
      gltf.position.x += 0.1;
    }
  }

  // Update other animations, rotations, etc.
  renderer.render(scene, camera);
  requestAnimationFrame(update);
}

// Start the animation loop
update();

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();

document.onkeydown = function (e) {
  console.log(e);
};
