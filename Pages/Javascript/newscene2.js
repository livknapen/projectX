import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import {
  BoxGeometry,
  Color,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  TextureLoader,
} from 'three';

const container = document.querySelector('#scene-container');

// Create a Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('skyblue');

// Create a camera
const fov = 35;
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1;
const far = 100;

const camera = new PerspectiveCamera(fov, aspect, near, far);
camera.position.set(0, 2, 7);

// Create the renderer
const renderer = new WebGLRenderer();
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.append(renderer.domElement);

// Create a cube
const geometry = new BoxGeometry(0.5, 0.4, 0.01);
const textureLoader = new TextureLoader();
const texture = textureLoader.load('/Media/backgroundscene.jpeg', () => {
  renderer.render(scene, camera);
});

const material = new MeshBasicMaterial({ map: texture });
const cube = new Mesh(geometry, material);
cube.position.set(-0.03, 1.18, 0.15)
scene.add(cube);

// Set up the ground
const groundGeometry = new THREE.PlaneGeometry(10, 10, 12, 22);
groundGeometry.rotateX(-Math.PI / 2);
const groundMaterial = new THREE.MeshStandardMaterial({
  color: 0x555555,
  side: THREE.DoubleSide,
});
const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
groundMesh.castShadow = false;
groundMesh.receiveShadow = true;
scene.add(groundMesh);

// Set up the spotlight
const spotLight = new THREE.SpotLight(0xffffff, 3, 100, 0.1, 1);
spotLight.position.set(1, 25, 15);
spotLight.castShadow = true;
spotLight.shadow.bias = -0.0001;
scene.add(spotLight);

// Load 3D model
const loader = new GLTFLoader().setPath('/node_modules/arcade_game_-_space_invaders/');
loader.load('scene.gltf', (gltf) => {
  const mesh = gltf.scene;

  mesh.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  mesh.position.set(0.3, 0, 2.5);
  scene.add(mesh);
});

// Load second 3D model
let gltf2;
const loader2 = new GLTFLoader().setPath('/node_modules/ryu/');
loader2.load('scene.gltf', (loadedGltf) => {
  gltf2 = loadedGltf.scene;

  gltf2.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  gltf2.scale.set(2, 2, 2);
  gltf2.position.set(0, 0, 0);
  scene.add(gltf2);

  // Set initial camera position and look-at for the second model
  camera.position.set(0, 0, 20);
  controls.target = gltf2.position;
  camera.lookAt(gltf2.position);

  // Set light targets to follow the second model
  spotLight.target = gltf2;
});

// Set up OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = false;
controls.minDistance = 1.5;
controls.maxDistance = 40;
controls.minPolarAngle = 0.5;
controls.maxPolarAngle = 1.5;
controls.autoRotate = false;
controls.target = new THREE.Vector3(0, 1, 0);
controls.update();



window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

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
    spotLight.position.copy(gltf2.position).add(new THREE.Vector3(1, 20, 10));
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