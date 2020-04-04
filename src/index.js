import { WebGLRenderer, Scene, PerspectiveCamera, MOUSE, Vector3 } from 'three';
import { OrbitControls } from './OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import azerothMap from "./assets/gltf/map.gltf";

var scene = new Scene();
var camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
var loader = new GLTFLoader();
var renderer = new WebGLRenderer();
var controls = new OrbitControls(camera, renderer.domElement);

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x808080);
document.body.appendChild(renderer.domElement);

loader.load(azerothMap, function(gltf) {
    scene.add(gltf.scene);
}, undefined, function(error) {
    console.error(error);
});

camera.position.set(0, 1, 3);

// Control Options
controls.maxPolarAngle = Math.PI / 3;
controls.autoRotate = true;
controls.enableDamping = true;
controls.maxDistance = 4;
controls.minDistance = 1;
controls.mouseButtons = {
    LEFT: MOUSE.ROTATE,
    MIDDLE: MOUSE.PAN,
    RIGHT: MOUSE.PAN
};
controls.maxPan = new Vector3(1, 1, 1);
controls.minPan = new Vector3(-1, -1, -1);
controls.update();

var animate = function() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
};

animate();