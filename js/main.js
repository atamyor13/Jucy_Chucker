const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


//-----------------------------------Extras--------------------------------------------------------
var effect = new THREE.StereoEffect(renderer);
effect.setSize(window.innerWidth, window.innerHeight);

//const controles = new THREE.DeviceOrientationControls(camera);
const controles = new THREE.OrbitControls(camera);

//--------------------------------------nivel--------------------------------------------------------
const l = new Ligths();
const n1 = new Nivel("escenario5.fbx");

//--------------------------------------Player--------------------------------------------------------
const p1 = new Player(camera, scene);
const ctrl = new Controls(p1);



camera.position.z = 20;
camera.position.y = 15;

/*//skybox
cubeLoader.setPath('fondo1/');
const textureCube = cubeLoader.load([
    'fondo3.png', 'fondo3.png',
    'fondo3.png', 'fondo3.png',
    'fondo3.png', 'fondo3.png'
]);
scene.background = textureCube;*/

const animate = function () {
    requestAnimationFrame(animate);
    if (mixer) mixer.update(0.015);

    p1.update();

    controles.update();
    renderer.render(scene, camera);//cambiar renderer por effect
};

animate();