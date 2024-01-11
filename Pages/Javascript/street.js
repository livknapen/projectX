import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

<<<<<<< HEAD

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
camera.position.set(0, 0, 8);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = false;
controls.minDistance = 1;
controls.maxDistance = 30;
controls.minPolarAngle = 0.5;
controls.maxPolarAngle = 1.5;
=======
// Setup Three.js renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x85bcc9);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);

// Create a Three.js scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 1, 1000);

// Create OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = false;
controls.minDistance = 20;
controls.maxDistance = 300;
controls.minPolarAngle = 0.5;
controls.maxPolarAngle = Math.PI / 2.5;
>>>>>>> 3c6500bfc94634cf9ba91a268596f4e216d8941b
controls.autoRotate = false;
controls.target = new THREE.Vector3(0, 1, 0);
controls.update();

<<<<<<< HEAD
const groundGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
=======
// Create ground
const groundGeometry = new THREE.PlaneGeometry(200, 200, 320, 320);
>>>>>>> 3c6500bfc94634cf9ba91a268596f4e216d8941b
groundGeometry.rotateX(-Math.PI / 2);
const groundMaterial = new THREE.MeshStandardMaterial({
  color: 0x555555,
  side: THREE.DoubleSide
});
const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
groundMesh.castShadow = false;
groundMesh.receiveShadow = true;
scene.add(groundMesh);

<<<<<<< HEAD
const spotLight = new THREE.SpotLight(0xffffff,  3, 100, 0.22, 1);
spotLight.position.set(1, 25, 15);
spotLight.castShadow = true;
spotLight.shadow.bias = -0.0001;
scene.add(spotLight);

const loader = new GLTFLoader().setPath('/node_modules/arcade_game_-_space_invaders/');
loader.load('scene.gltf', (gltf) => {
  const mesh = gltf.scene;

  mesh.traverse((child) => {
=======
// Set Spotlights
const spotLight1 = new THREE.SpotLight(0xffffff, 3, 100, 0.22, 1)
spotLight1.angle = Math.PI / 30
spotLight1.penumbra = 0.5
spotLight1.castShadow = true
spotLight1.shadow.mapSize.width = 1024
spotLight1.shadow.mapSize.height = 1024
spotLight1.shadow.camera.near = 0.5
spotLight1.shadow.camera.far = 20
scene.add(spotLight1)
spotLight1.position.set(2.5, 5, 2.5)

// Load first 3D model
let gltf3;
const loader1 = new GLTFLoader().setPath('/node_modules/street/');
loader1.load('scene.gltf', (loadedGltf) => {
  gltf3 = loadedGltf.scene;

  gltf3.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  gltf3.position.set(0, 2.5, 2.5);
  scene.add(gltf3);

  document.getElementById('progress-container').style.display = 'none';
}, (xhr) => {
  document.getElementById('progress').innerHTML = `LOADING ${Math.max((xhr.loaded / xhr.total) * 100, 1)}/100`;
});

// Load second 3D model
let gltf2;
const loader2 = new GLTFLoader().setPath('/node_modules/ryu/');
loader2.load('scene.gltf', (loadedGltf) => {
  gltf2 = loadedGltf.scene;

  gltf2.traverse((child) => {
>>>>>>> 3c6500bfc94634cf9ba91a268596f4e216d8941b
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

<<<<<<< HEAD
  mesh.position.set(0.3, 0, 2.5);
  scene.add(mesh);

  document.getElementById('progress-container').style.display = 'none';
}, ( xhr ) => {
  document.getElementById('progress').innerHTML = `LOADING ${Math.max(xhr.loaded / xhr.total, 1) * 100}/100`;
},);
=======
  gltf2.scale.set(5, 5, 5);
  gltf2.position.set(0, 0.5, 0);
  scene.add(gltf2);

  // Set initial camera position and look-at for the second model
  camera.position.set(0, 0, 10);
  controls.target = gltf2.position;
  camera.lookAt(gltf2.position);

  // Set light targets to follow the second model
  spotLight1.target = gltf2;

  document.getElementById('progress-container').style.display = 'none';
}, (xhr) => {
  document.getElementById('progress').innerHTML = `LOADING ${Math.max((xhr.loaded / xhr.total) * 100, 1)}/100`;
});
>>>>>>> 3c6500bfc94634cf9ba91a268596f4e216d8941b

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

<<<<<<< HEAD
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
  
  animate();
=======
// Handle keyboard input
const keyboardState = {};
document.addEventListener('keydown', (event) => {
  keyboardState[event.code] = true;
});

document.addEventListener('keyup', (event) => {
  keyboardState[event.code] = false;
});

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  // Update object and camera positions based on keyboard input
  const speed = 0.05;

  if (gltf2) {
    if (keyboardState['KeyW']) gltf2.position.z -= speed;
    if (keyboardState['KeyA']) gltf2.position.x -= speed;
    if (keyboardState['KeyS']) gltf2.position.z += speed;
    if (keyboardState['KeyD']) gltf2.position.x += speed;

    controls.target = gltf2.position;

    // Update light positions to follow the second model
    spotLight1.position.copy(gltf2.position).add(new THREE.Vector3(1, 20, 10));
  }

  if (keyboardState['KeyW']) camera.position.z -= speed;
  if (keyboardState['KeyA']) camera.position.x -= speed;
  if (keyboardState['KeyS']) camera.position.z += speed;
  if (keyboardState['KeyD']) camera.position.x += speed;

  controls.update();
  renderer.render(scene, camera);
}

animate();

document.onkeydown = function (e) {
  console.log(e);
};
>>>>>>> 3c6500bfc94634cf9ba91a268596f4e216d8941b
