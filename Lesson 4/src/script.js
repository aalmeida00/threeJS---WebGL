import './style.css';
import * as THREE from 'three';

// Scene Declaration
const scene = new THREE.Scene();

// Object Creation
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material); // Mesh is a combination of geometry and material

scene.add(mesh); // Add Mesh to screen

// Mesh/Component size
const sizes = {
  width: 800,
  height: 600,
};

// Camera to get perspective of object/scene
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

//Renderer the object on page

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('canvas.webgl'), // Add where the object can be rendered
});
renderer.setSize(sizes.width, sizes.height); // set canvas size
renderer.render(scene, camera);
