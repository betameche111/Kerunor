import { WebGLRenderer, Scene, PerspectiveCamera, MOUSE, Vector3, TextureLoader, RepeatWrapping, PlaneBufferGeometry, HemisphereLight, HemisphereLightHelper, DirectionalLight, DirectionalLightHelper } from 'three';
import { OrbitControls } from './OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Water } from 'three/examples/jsm/objects/Water.js';
import { Sky } from 'three/examples/jsm/objects/Sky.js';

import azerothMap from "./assets/gltf/map.gltf";
import waterNormals from "./assets/img/waternormals.jpg";


// Create Object
var scene = new Scene();
var camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 100, 100000);
var loader = new GLTFLoader();
var renderer = new WebGLRenderer();
var controls = new OrbitControls(camera, renderer.domElement);

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

// Light creation
var light = new DirectionalLight(0xffffff, 1);
scene.add(light);

// Sky creation
var skyParameters = {
    distance: 4000,
    inclination: 0.3,
    azimuth: 0.205
};


var theta = Math.PI * (skyParameters.inclination - 0.5);
var phi = 2 * Math.PI * (skyParameters.azimuth - 0.5);

light.position.x = skyParameters.distance * Math.cos(phi);
light.position.y = skyParameters.distance * Math.sin(phi) * Math.sin(theta);
light.position.z = skyParameters.distance * Math.sin(phi) * Math.cos(theta);

var sky = new Sky();
sky.scale.setScalar(450000);
sky.material.uniforms["turbidity"].value = 10;
sky.material.uniforms["rayleigh"].value = 2;
sky.material.uniforms["luminance"].value = 1;
sky.material.uniforms["mieCoefficient"].value = 0.005;
sky.material.uniforms["mieDirectionalG"].value = 0.8;
sky.material.uniforms["sunPosition"].value = light.position.copy(light.position);

scene.add(sky);

var waterGeometry = new PlaneBufferGeometry(100000, 100000);

var water = new Water(
    waterGeometry, {
        textureWidth: 512,
        textureHeight: 512,
        waterNormals: new TextureLoader().load(waterNormals, function(texture) {
            texture.wrapS = texture.wrapT = RepeatWrapping;
        }),
        alpha: 1.0,
        sunDirection: light.position.clone().normalize(),
        sunColor: 0xffffff,
        waterColor: 0x001e0f,
        distortionScale: 3.7,
        fog: scene.fog !== undefined
    }
);

water.rotation.x = -Math.PI / 2;
scene.add(water);


// Object Control
loader.load(azerothMap, function(gltf) {
    gltf.scene.scale.set(1000, 1000, 1000);
    gltf.scene.position.set(0, -80, 0);
    scene.add(gltf.scene);
}, function(xhr) {
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
}, function(error) {
    console.error(error);
});

var dirLightHelper = new DirectionalLightHelper(light, 5);
scene.add(dirLightHelper);

// Camera Control
camera.position.set(0, 1000, 3000);

// Control Options
controls.maxPolarAngle = Math.PI / 2.5;
controls.autoRotate = true;
controls.enableDamping = true;
controls.maxDistance = 4000;
controls.minDistance = 1000;
controls.mouseButtons = {
    LEFT: MOUSE.ROTATE,
    MIDDLE: MOUSE.PAN,
    RIGHT: MOUSE.PAN
};
controls.maxPan = new Vector3(1000, 1000, 1000);
controls.minPan = new Vector3(-1000, -1000, -1000);
controls.update();

var animate = function() {
    water.material.uniforms['time'].value += 1.0 / 60.0;
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
};

animate();