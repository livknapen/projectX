import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';
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

// Create Scenes
const scene = new THREE.Scene();
scene.background = new THREE.Color('black');

const scene2 = new THREE.Scene();

// The initial scene is scene1
let currentScene = scene;

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

// Create a cube for scene
const geometry = new BoxGeometry(0.5, 0.4, 0.01);
const textureLoader = new TextureLoader();
const cubeTexture = textureLoader.load('/Media/backgroundscene.jpeg', () => {
  renderer.render(scene, camera);
});

const cubeMaterial = new MeshBasicMaterial({
  map: cubeTexture,
});

const cube = new Mesh(geometry, cubeMaterial);
cube.position.set(-0.03, 1.18, 0.15);
scene.add(cube);

// Create a cube for scene2 as background
const geometry2 = new BoxGeometry(21.5, 12, 0);
const textureLoader2= new TextureLoader();
const cubeTexture2 = textureLoader2.load('/Media/backgroundscene.jpeg', () => {
  renderer.render(scene, camera);
});

const cubeMaterial2 = new MeshBasicMaterial({
  map: cubeTexture2,
});

const cube2 = new Mesh(geometry2, cubeMaterial2);
cube2.position.set(0, 0, -20);
scene2.add(cube2);

// Create a cube for scene loadingscene
// const geometry3 = new BoxGeometry(3, 3, 0);
// const textureLoader3 = new TextureLoader();
// const cubeTexture3 = textureLoader3.load('/Media/streetfighter2.png', () => {
//   renderer.render(scene, camera);
// });

// const cubeMaterial3 = new MeshBasicMaterial({
//   map: cubeTexture3,
// });

// const cube3 = new Mesh(geometry3, cubeMaterial3);
// cube3.position.set(0, 1, 5);
// scene.add(cube3);

// Set up the ground for scene
const groundGeometry = new THREE.PlaneGeometry(15, 15, 15, 15);
groundGeometry.rotateX(-Math.PI / 2);
const groundMaterial = new THREE.MeshStandardMaterial({
  color: 0x555555,
  side: THREE.DoubleSide,
});
const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
groundMesh.castShadow = false;
groundMesh.receiveShadow = true;
scene.add(groundMesh);

// Set up the ground for scene2
const groundGeometry2 = new THREE.PlaneGeometry(0, 0, 0, 0);
groundGeometry2.rotateX(-Math.PI / 2);
const groundMaterial2 = new THREE.MeshStandardMaterial({
  color: 0x555555,
  side: THREE.DoubleSide,
});
const groundMesh2 = new THREE.Mesh(groundGeometry2, groundMaterial2);
groundMesh2.castShadow = false;
groundMesh2.receiveShadow = true;
scene2.add(groundMesh2);

// Set up the first spotlight for the character scene
const spotLight = new THREE.SpotLight(0xffffff, 3, 100, 0.04, 1);
spotLight.position.set(1, 25, 15);
spotLight.castShadow = true;
spotLight.shadow.bias = -0.0001;
scene.add(spotLight);

// Set up the second spotlight for the character scene2
const spotLight2 = new THREE.SpotLight(0xffffff, 3, 100, 0.2, 1);
spotLight2.position.set(0, 25, 15);
spotLight2.castShadow = true;
spotLight2.shadow.bias = -0.0001;
scene2.add(spotLight2);

// Set up the second spotlight for the arcade
const spotLight3 = new THREE.SpotLight(0xff0000, 1, 100, 0.1, 1);
spotLight3.position.set(1, 20, 5);
spotLight3.castShadow = true;
spotLight3.shadow.bias = -0.0001;
scene.add(spotLight3);

// Load first 3D model
let gltf1;
const loader1 = new GLTFLoader().setPath('/node_modules/arcade_game_-_space_invaders/');
loader1.load('scene.gltf', (loadedGltf) => {
  gltf1 = loadedGltf.scene;

  gltf1.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  gltf1.position.set(0.3, 0, 2.5);
  scene.add(gltf1);

  // Set light position to the first model
  spotLight3.position.set = gltf1;
});

// Load second 3D model
let gltf2;
let teleportPoint;
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
  gltf2.position.set(0, 0, 3);
  scene.add(gltf2);

  // Set initial camera position and look-at for the second model
  camera.position.set(0, 2.5, 10);
  controls.target = gltf2.position;
  camera.lookAt(gltf2.position);

  // Set light targets to follow the second model
  spotLight.target = gltf2;
  spotLight2.target = gltf2;
});

// Load FBX model and connect animation to GLTF model
// let fbxModel;
// let mixer;
// const fbxLoader = new FBXLoader();
// fbxLoader.load('/node_modules/ryu/Walking.fbx', (fbx) => {
//     fbxModel = fbx;
//     mixer = new THREE.AnimationMixer(fbxModel);
//     const action = mixer.clipAction(fbxModel.animations[0]);
//     action.play();

//     fbxModel.scale.set(2, 2, 2);
//     fbxModel.position.set(0, 0, 3);
//     scene.add(fbxModel);

//     camera.position.set(0, 2.5, 10);
// });

// Set up OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = false;
controls.minDistance = 1.5;
controls.maxDistance = 20;
controls.minPolarAngle = 0.5;
controls.maxPolarAngle = 1.5;
controls.autoRotate = false;
controls.target = new THREE.Vector3(0, 1, 0);
controls.update();

// Set up teleportation point
teleportPoint = new THREE.Vector3(0, 0, 0);
const teleportDistanceThreshold = 0.2;

// Handle window resize
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

function switchToTeleportScene() {
  // Switch from the current scene to the other scene
  currentScene = currentScene === scene ? scene2 : scene;

  // Remove the model from the current scene
  currentScene.remove(gltf2);

  // Update the position and scale of the model
  gltf2.position.set(0, -3.5, -19);
  gltf2.scale.set(8, 8, 8);

  // Add the model to the new scene
  currentScene.add(gltf2);

  if (currentScene === scene2) {
    // Set camera position to point at the middle of cube2
    const middleOfCube2 = new THREE.Vector3(0, 0, 0);
    cube2.getWorldPosition(middleOfCube2);
    camera.position.set(0, 0, 0);

    // Set camera target to be the position of cube2
    controls.target = middleOfCube2;
  }
}

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  // Update object and camera positions based on keyboard input
  const speed = 0.05;

  if (currentScene === scene) {
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
} 

const speed2 = 0.08;
if (currentScene === scene2) {
  if (gltf2) {
    if (keyboardState['KeyA']) gltf2.position.x -= speed2;
    if (keyboardState['KeyD']) gltf2.position.x += speed2;

    // Update light positions to follow the second model
    spotLight2.position.copy(gltf2.position).add(new THREE.Vector3(1, 30, 10));
  }
}

// if (currentScene === scene) {
//   if (fbxModel && mixer) {
//     const action = mixer.clipAction(fbxModel.animations[0]);
//     if (keyboardState['KeyW']) fbxModel.position.z -= speed;
//     if (keyboardState['KeyA']) fbxModel.position.x -= speed;
//     if (keyboardState['KeyS']) fbxModel.position.z += speed;
//     if (keyboardState['KeyD']) fbxModel.position.x += speed;

//     controls.target = fbxModel.position;
//     action.play();}
    
//     else{
//       action.stop();
//     }
// }

// if (mixer) {
//     mixer.update(0.016); // Assuming a fixed delta time for updating the animation
// }

// // Sync GLTF model position and rotation with FBX model
// if (gltf2 && fbxModel) {
//     gltf2.position.copy(fbxModel.position);
//     gltf2.rotation.copy(fbxModel.rotation);
// }

  // Check if the model is close to the teleportation point
  const distance = gltf2.position.distanceTo(teleportPoint);
  if (distance < teleportDistanceThreshold) {
      // Teleport the model to a new scene or change its position
      switchToTeleportScene();
  }

  controls.update();
  renderer.render(currentScene, camera);
}


animate();
document.onkeydown = function (e) {
    console.log(e);
  };
