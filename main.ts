import * as THREE from 'three'; // import three.js

const w:number = window.innerWidth; // get the dimensions of the inner browser window
const h:number = window.innerHeight;
const scene:THREE.Scene = new THREE.Scene(); // create a scene
scene.background = new THREE.Color(THREE.Color.NAMES.red); // set background color
const camera:THREE.PerspectiveCamera = new THREE.PerspectiveCamera(75, w/h, 0.1, 100); // create camera
const renderer:THREE.WebGLRenderer = new THREE.WebGLRenderer(); // create renderer
renderer.setSize(w, h); // set the renderer size
document.body.appendChild(renderer.domElement); // append the rendering to body
renderer.render(scene, camera); // render the scene and camera