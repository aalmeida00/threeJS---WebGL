// Scene
const scene = new THREE.Scene();

// Red Cube
const geometry = new THREE.BoxGeometry(1, 1, 1); //Geometry has 3 unit/parameter
const material = new THREE.MeshBasicMaterial({ color: 'red' }); //U need to provide a object to pass parameters
const mesh = new THREE.Mesh(geometry, material); // Mesh is a compose of geometry and material
scene.add(mesh); // Add component to scene

// Camera
const camera = new THREE.PerspectiveCamera(); // First parameter: Field of View on Vertical
scene.add(camera); // Add Camera to Scene
