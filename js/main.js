const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);



const l = new Ligths();

var obj = [];

const n1 = new Nivel("escenario.fbx");


camera.position.y = -17;

const animate = function () {
    requestAnimationFrame(animate);

    //if ( mixer ) mixer.update( 0.015);


    renderer.render(scene, camera);
};

animate();