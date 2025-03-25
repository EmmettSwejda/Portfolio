import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Renderer setup
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);

// Scene and Camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(0, 20, 20);
camera.lookAt(0, 2.5, -1);

// Ground
const groundGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
groundGeometry.rotateX(-Math.PI / 2);
const groundMaterial = new THREE.MeshStandardMaterial({
    color: 0x555555,
    side: THREE.DoubleSide
});
const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
groundMesh.castShadow = false;
groundMesh.receiveShadow = true;
scene.add(groundMesh);

// Variables for the model, mixer, and actions
let mixer;
let gltfScene; // holds the loaded model scene
let actions = {}; // will store the clipActions

// Loader
const loader = new GLTFLoader().setPath('/Assets/item/');
loader.load('scene.gltf', (gltf) => {
    console.log('loading model');
    gltfScene = gltf.scene;
    mixer = new THREE.AnimationMixer(gltfScene);

    // Create and store each action; start them stopped.
    gltf.animations.forEach((clip) => {
        const action = mixer.clipAction(clip);
        // Set loop mode so that when reversing, it stops at the start.
        action.setLoop(THREE.LoopOnce);
        action.clampWhenFinished = true;
        action.stop();
        actions[clip.name] = action;
    });

    // Enable shadows on the model meshes
    gltfScene.traverse((child) => {
        if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
        }
    });

    gltfScene.position.set(0, 1.05, -1);
    scene.add(gltfScene);

    document.getElementById('progress-container').style.display = 'none';
}, (xhr) => {
    console.log(`loading ${xhr.loaded / xhr.total * 100}%`);
}, (error) => {
    console.error(error);
});

// Raycaster and mouse vector for detecting hover
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let hovering = false; // tracks whether the model is hovered

window.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
});

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Clock for mixer update
const clock = new THREE.Clock();

// Play all actions forward (normal speed, 1x)
function playAllActionsForward() {
    Object.values(actions).forEach(action => {
        // If the action was reversing, switch it to forward.
        if (action.timeScale < 0) {
            action.timeScale = 1;
        }
        // If it's not running, play it (it will continue from its current time).
        if (!action.isRunning()) {
            action.play();
        }
    });
}

// Play all actions in reverse at half speed
function playAllActionsReverse() {
    Object.values(actions).forEach(action => {
        // Only reverse if the action is currently running and its time > 0.
        if (action.isRunning() && action.time > 0) {
            action.timeScale = -0.25;
        }
    });
}

// In the animation loop we update the actions and check their times.
function updateReverseActions() {
    // For any action playing in reverse, if it has reached or gone below 0, stop it.
    Object.values(actions).forEach(action => {
        if (action.timeScale < 0 && action.time <= 0) {
            action.stop();
            // Reset time to 0 to avoid negative values.
            action.time = 0;
        }
    });
}

function animate() {
    requestAnimationFrame(animate);

    const delta = clock.getDelta();
    if (mixer) {
        mixer.update(delta);
    }

    // Raycast only when the model is loaded.
    if (gltfScene) {
        raycaster.setFromCamera(mouse, camera);
        // Check intersections with all descendant meshes in the gltfScene.
        const intersects = raycaster.intersectObjects(gltfScene.children, true);

        if (intersects.length > 0) {
            // If hovering, ensure we are playing forward.
            if (!hovering) {
                hovering = true;
            }
            playAllActionsForward();
        } else {
            // When not hovered, if we were previously hovering, switch to reverse.
            if (hovering) {
                hovering = false;
                playAllActionsReverse();
            }
        }
    }

    // Update reverse actions to stop when they reach the start.
    updateReverseActions();

    renderer.render(scene, camera);
}
animate();
