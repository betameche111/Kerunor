import {
    WebGLRenderer,
    Scene,
    PerspectiveCamera
} from 'three';
import {
    OrbitControls
} from 'three/examples/jsm/controls/OrbitControls';
import {
    GLTFLoader
} from 'three/examples/jsm/loaders/GLTFLoader';
import azerothMap from "./assets/gltf/map.gltf";

var scene = new Scene();
var camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
var loader = new GLTFLoader();
var renderer = new WebGLRenderer();
var controls = new OrbitControls(camera, renderer.domElement);

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x808080);
document.body.appendChild(renderer.domElement);

loader.load(azerothMap, function (gltf) {
    scene.add(gltf.scene);
}, undefined, function (error) {
    console.error(error);
});

camera.position.set(0, 1, 3);

controls.maxPolarAngle = Math.PI / 3;
controls.autoRotate = true;
controls.enableDamping = true;

controls.update();

var animate = function () {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
};

animate();