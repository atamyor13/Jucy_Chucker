const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const controls = new THREE.OrbitControls(camera, renderer.domElement);
/*const cubeLoader = new THREE.CubeTextureLoader();*/




const l = new Ligths();

var obj = [];

const n1 = new Nivel("escenario4.fbx");

const ball = new Ball();

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

        if ( mixer ) mixer.update( 0.015);


    renderer.render(scene, camera);
};

animate();