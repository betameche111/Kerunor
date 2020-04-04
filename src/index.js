import * as THREE from 'three';
import {
    OrbitControls
} from 'three/examples/jsm/controls/OrbitControls';
import {
    GLTFLoader
} from 'three/examples/jsm/loaders/GLTFLoader';
import azerothMap from "./assets/gltf/map.gltf";

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var loader = new GLTFLoader();
var renderer = new THREE.WebGLRenderer();
var controls = new OrbitControls(camera, renderer.domElement);

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x808080);
document.body.appendChild(renderer.domElement);

loader.load(azerothMap, function (gltf) {
    scene.add(gltf.scene);
}, undefined, function (error) {
    console.error(error);
});

camera.position.set(0, 5, 2);
controls.update();

var animate = function () {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
};

animate();