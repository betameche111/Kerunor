import css from "./style.scss";
import { Poi } from "./Poi.js";
import { WebGLRenderer, Scene, PerspectiveCamera, MeshStandardMaterial, Mesh, Fog, MOUSE, Vector3, Vector2, TextureLoader, RepeatWrapping, PlaneBufferGeometry, HemisphereLight, DirectionalLight, Raycaster } from 'three';
import { OrbitControls } from './OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { Water } from 'three/examples/jsm/objects/Water.js';
import { Sky } from 'three/examples/jsm/objects/Sky.js';

import mountain from "./assets/glb/map.glb";
import ocean_ground from "./assets/glb/ocean.glb";
import waterNormals from "./assets/img/waternormals.jpg";
import preloaderBackground from "./assets/img/preload_background.jpg";
import poiBackground from "./assets/img/poi_background.png";

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('preloader-background').setAttribute("src", preloaderBackground);
    document.getElementById('modal-content').setAttribute("data-src", poiBackground);

    // Create Object
    var scene = new Scene();
    var camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1000, 110000);
    var renderer = new WebGLRenderer({ antialias: true });
    var controls = new OrbitControls(camera, renderer.domElement);

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;

    // Camera Control
    camera.position.set(-2000, 16907, 20788);

    // Control Options
    controls.maxPolarAngle = Math.PI / 3.1;
    //controls.autoRotate = true;
    controls.enableDamping = true;
    controls.maxDistance = 25000;
    controls.minDistance = 7000;
    controls.mouseButtons = {
        LEFT: MOUSE.ROTATE,
        MIDDLE: MOUSE.PAN,
        RIGHT: MOUSE.PAN
    };
    controls.maxPan = new Vector3(20000, 10000, 10000);
    controls.minPan = new Vector3(-20000, -10000, -10000);
    controls.update();

    // Light creation
    var light = new DirectionalLight(0xffffff, 2.3);
    var hemiLight = new HemisphereLight(0xDDFCFE, 0x2C3D4F, 1.3);
    scene.add(light);
    scene.add(hemiLight);

    // Sky creation
    var skyParameters = {
        distance: 40000,
        inclination: 1.2,
        azimuth: 0.6,
    };

    var theta = Math.PI * (skyParameters.inclination - 0.5);
    var phi = 2 * Math.PI * (skyParameters.azimuth - 0.5);

    light.castShadow = true;
    light.shadow.camera.near = 21000;
    light.shadow.camera.far = 59500;
    light.shadow.camera.left = -17000;
    light.shadow.camera.right = 16500;
    light.shadow.camera.top = 12000;
    light.shadow.camera.bottom = -10000;

    light.position.x = skyParameters.distance * Math.cos(phi);
    light.position.y = skyParameters.distance * Math.sin(phi) * Math.sin(theta);
    light.position.z = skyParameters.distance * Math.sin(phi) * Math.cos(theta);

    //scene.add(new CameraHelper(light.shadow.camera));

    var sky = new Sky();
    sky.scale.setScalar(450000);
    sky.material.uniforms["turbidity"].value = 10;
    sky.material.uniforms["rayleigh"].value = 2;
    sky.material.uniforms["luminance"].value = 1;
    sky.material.uniforms["mieCoefficient"].value = 0.005;
    sky.material.uniforms["mieDirectionalG"].value = 0.8;
    sky.material.uniforms["sunPosition"].value = light.position.copy(light.position);


    //Fog control
    scene.fog = new Fog(0x2C3D4F, 1000, 100000);

    scene.add(sky);

    var waterGeometry = new PlaneBufferGeometry(200000, 200000);

    var water = new Water(
        waterGeometry, {
            textureWidth: 1024,
            textureHeight: 1024,
            waterNormals: new TextureLoader().load(waterNormals, function(texture) {
                texture.wrapS = texture.wrapT = RepeatWrapping;
            }),
            alpha: 0.6,
            sunDirection: light.position.clone().normalize(),
            sunColor: 0xffffff,
            waterColor: 0x001e0f,
            distortionScale: 3.7,
            fog: scene.fog
        }
    );
    water.material.transparent = true;
    water.rotation.x = -Math.PI / 2;
    water.receiveShadow = true;
    scene.add(water);


    var waterGroundGeometry = new PlaneBufferGeometry(220000, 220000);
    var material = new MeshStandardMaterial({ color: 0x000000 });
    var waterGroundGeometryMech = new Mesh(waterGroundGeometry, material);
    waterGroundGeometryMech.position.set(0, -12, 0);
    waterGroundGeometryMech.rotation.x = -Math.PI / 2;
    scene.add(waterGroundGeometryMech);


    Poi.forEach(element => scene.add(element));

    var raycaster = new Raycaster();
    var mouse = new Vector2();
    var object_hover = null;

    function getIntersect(event) {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        return raycaster.intersectObjects(Poi);
    }

    function onMouseMove(event) {
        var intersects = getIntersect(event);

        if (intersects.length > 0) {
            object_hover = intersects[0];
            object_hover.object.hover();
        } else if (object_hover != null) {
            object_hover.object.unhover();
            object_hover = null;
        }
    }

    function onMouseClick(event) {
        var intersects = getIntersect(event);

        if (intersects.length > 0) {
            object_hover = intersects[0];
            object_hover.object.click();
        }
    }

    window.addEventListener('mousemove', onMouseMove, false);
    window.addEventListener('click', onMouseClick, false);

    var animate = function() {
        controls.update();
        water.material.uniforms['time'].value += 1.0 / 60.0;
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    };

    var bar = document.getElementById('progressbar');
    var preloader = document.getElementById('preloader');
    var button = document.getElementById('button');
    button.onclick = function() {
        button.classList.add("uk-animation-reverse");
        preloader.classList.add("uk-animation-reverse");
        preloader.classList.add("uk-animation-fade");
        animate();
        setTimeout(() => preloader.classList.add("uk-hidden"), 1000);
    };

    var loader = new GLTFLoader();
    var dracoLoader = new DRACOLoader();
    var total_load = 10712276 + 2364872;
    var map_load;
    var ocean_load;

    dracoLoader.setDecoderPath("https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/js/libs/draco/");
    loader.setDRACOLoader(dracoLoader);

    loader.load(ocean_ground, function(gltf) {
            gltf.scene.scale.set(100, 100, 100);
            gltf.scene.position.set(0, -10, 0);
            gltf.scene.traverse(function(child) {
                if (child.isMesh) {
                    child.material.roughness = 1;
                }
            });
            scene.add(gltf.scene);
        },
        function(xhr) {
            console.log("Ocean load : " + xhr.loaded + "/" + xhr.total);
            bar.max = total_load;
            ocean_load = xhr.loaded;
            bar.value = map_load + ocean_load;
        },
        function(error) {
            console.log('An error happened' + error);
        });

    loader.load(mountain, function(gltf) {
            gltf.scene.scale.set(100, 100, 100);
            gltf.scene.traverse(function(child) {
                if (child.isMesh) {
                    child.material.transparent = false;
                    child.material.depthWrite = true;
                    child.castShadow = true;
                    child.receiveShadow = true;
                }
            });
            scene.add(gltf.scene);
            bar.classList.add("uk-animation-reverse");
            bar.classList.add("uk-animation-slide-bottom");
            button.classList.add("uk-animation-fade");
            button.classList.remove("uk-hidden");
        },
        function(xhr) {
            console.log("Map load : " + xhr.loaded + "/" + xhr.total);
            bar.max = total_load;
            map_load = xhr.loaded;
            bar.value = map_load + ocean_load;
        },
        function(error) {
            console.log('An error happened' + error);
        });


    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener('resize', onWindowResize, false);
    document.body.appendChild(renderer.domElement);
    // animate();

});