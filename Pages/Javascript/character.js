import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


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
controls.minDistance = 3;
controls.maxDistance = 30;
controls.minPolarAngle = 0.5; // Adjust the viewing angle (elevation)
controls.maxPolarAngle = Math.PI / 2.5; // Adjust the maximum viewing angle (elevation)
controls.autoRotate = false;
controls.target = new THREE.Vector3(0, 1, 0);
controls.update();


// Create ground
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


// Load 3D model
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

  // Set initial camera position and look-at
  camera.position.set(0, 0, 20);
  controls.target = gltf.position;
  camera.lookAt(gltf.position);
  
  // Set light targets to follow the model
  spotLight1.target = gltf;

  // Set initial camera position and look-at
  camera.position.set(0, 0, 10);
  controls.target = gltf.position;
  camera.lookAt(gltf.position);

  document.getElementById('progress-container').style.display = 'none';
}, (xhr) => {
  document.getElementById('progress').innerHTML = `LOADING ${Math.max((xhr.loaded / xhr.total) * 100, 1)}/100`;
});

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
  const speed = 0.1;

  if (gltf) {
    if (keyboardState['KeyW']) gltf.position.z -= speed;
    if (keyboardState['KeyA']) gltf.position.x -= speed;
    if (keyboardState['KeyS']) gltf.position.z += speed;
    if (keyboardState['KeyD']) gltf.position.x += speed;

    controls.target = gltf.position;

        // Update light positions to follow the model
        spotLight1.position.copy(gltf.position).add(new THREE.Vector3(1, 20, 10));
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
