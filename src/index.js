import { WebGLRenderer, Scene, PerspectiveCamera, Fog, MOUSE, Vector3, TextureLoader, RepeatWrapping, PlaneBufferGeometry, HemisphereLight, DirectionalLight } from 'three';
import { OrbitControls } from './OrbitControls.js';
import { Poi } from "./Poi.js";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { Water } from 'three/examples/jsm/objects/Water.js';
import { Sky } from 'three/examples/jsm/objects/Sky.js';

import azerothMap from "./assets/glb/map.glb";
import waterNormals from "./assets/img/waternormals.jpg";



// Create Object
var scene = new Scene();
var camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1000, 110000);
var loader = new GLTFLoader();
var renderer = new WebGLRenderer({ antialias: true });
var controls = new OrbitControls(camera, renderer.domElement);

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

// Light creation
var light = new DirectionalLight(0xffffff, 1);
var hemiLight = new HemisphereLight(0x77b5fe, 0x001e0f, 1);
scene.add(light);
scene.add(hemiLight);

// Sky creation
var skyParameters = {
    distance: 40000,
    inclination: 0.7,
    azimuth: 0.8
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


//Fog control
scene.fog = new Fog(0xE7E7E7, 1000, 100000);

scene.add(sky);

var waterGeometry = new PlaneBufferGeometry(2700000, 270000);

var water = new Water(
    waterGeometry, {
        textureWidth: 1024,
        textureHeight: 1024,
        waterNormals: new TextureLoader().load(waterNormals, function(texture) {
            texture.wrapS = texture.wrapT = RepeatWrapping;
        }),
        alpha: 0.0,
        sunDirection: light.position.clone().normalize(),
        sunColor: 0xffffff,
        waterColor: 0x001e0f,
        distortionScale: 3.7,
        fog: scene.fog
    }
);

water.rotation.x = -Math.PI / 2;
water.renderOrder = 1;
scene.add(water);

// Object Control
DRACOLoader.setDecoderPath('three/exemple/js/libs/draco/gltf/')
loader.setDRACOLoader(new DRACOLoader());
loader.load(azerothMap, function(gltf) {
        gltf.scene.scale.set(100, 100, 100);
        gltf.scene.traverse(function(child) {
            if (child.isMesh) {
                child.material.transparent = false;
                child.material.depthWrite = true;

            }
        });
        scene.add(gltf.scene);
    },
    function(xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    function(error) {
        console.error(error);
    });

// Camera Control
camera.position.set(0, 15835, 40378);

// Control Options
controls.maxPolarAngle = Math.PI / 3;
// controls.autoRotate = true;
controls.enableDamping = true;
controls.maxDistance = 30000;
controls.minDistance = 15000;
controls.mouseButtons = {
    LEFT: MOUSE.ROTATE,
    MIDDLE: MOUSE.PAN,
    RIGHT: MOUSE.PAN
};
controls.maxPan = new Vector3(7000, 7000, 7000);
controls.minPan = new Vector3(-7000, -7000, -7000);
controls.update();

scene.add(Poi);


var animate = function() {
    controls.update();
    requestAnimationFrame(animate);
    water.material.uniforms['time'].value += 1.0 / 60.0;
    renderer.render(scene, camera);
};

animate();