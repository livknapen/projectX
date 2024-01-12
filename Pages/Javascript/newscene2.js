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

// ... (existing code)

// New scene for teleportation
const teleportScene = new THREE.Scene();
teleportScene.background = new THREE.Color('purple');

// Objects and camera for the new scene
const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const teleportObject = new THREE.Mesh(sphereGeometry, sphereMaterial);
teleportObject.position.set(2, 1, 0);
teleportScene.add(teleportObject);

const teleportCamera = new THREE.PerspectiveCamera(fov, aspect, near, far);
teleportCamera.position.set(0, 2, 7);

// Teleportation point for the new scene
const teleportPointNewScene = new THREE.Vector3(2, 1, 0);

// Function to switch to the new scene
function switchToTeleportScene() {
  controls.enabled = false; // Disable OrbitControls temporarily

  // Set up camera and controls for the teleport scene
  camera.copy(teleportCamera);
  controls.target = teleportObject.position;

  // Render the teleportation scene
  renderer.render(teleportScene, camera);

  // Update light targets to follow the teleport object
  spotLight.position.copy(teleportObject.position).add(new THREE.Vector3(1, 20, 10));
  spotLight.target = teleportObject;

  // Enable OrbitControls for the teleport scene
  controls.enabled = true;
}

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  // Update object and camera positions based on keyboard input
  const speed = 0.03;

  if (gltf2) {
    // ... (existing movement code)

    // Check if the model is close to the teleportation point
    const distance = gltf2.position.distanceTo(teleportPoint);
    if (distance < 0.2) {
      // Switch to the new scene when the model reaches the teleportation point
      switchToTeleportScene();
    }
  }

  // ... (existing animation code)
}

// ... (existing code)
