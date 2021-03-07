// Scene
const scene = new THREE.Scene();

// Red Cube
const geometry = new THREE.BoxGeometry(1, 1, 1); //Geometry has 3 unit/parameter
const material = new THREE.MeshBasicMaterial({ color: 'red' }); //U need to provide a object to pass parameters
const mesh = new THREE.Mesh(geometry, material); // Mesh is a compose of geometry and material
scene.add(mesh); // Add component to scene

// Camera - Second parameter: Aspect Ratio == size
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height); // First parameter: Field of View on Vertical
// To move a object we need to move with x, y and z position
// y = up x = horizontal z = our position
camera.position.z = 3;
camera.position.y = 1;
camera.position.x = -1;

scene.add(camera); // Add Camera to Scene

const canvas = document.querySelector('.webgl');

// Render
const render = new THREE.WebGLRenderer({
  canvas: canvas,
});

// Set size of render
render.setSize(sizes.width, sizes.height);

render.render(scene, camera);
