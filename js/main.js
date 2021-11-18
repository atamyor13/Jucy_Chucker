const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var effect = new THREE.StereoEffect(renderer);
effect.setSize(window.innerWidth, window.innerHeight);

//const controles = new THREE.DeviceOrientationControls(camera);
const controles = new THREE.OrbitControls(camera);

const l = new Ligths();

var obj = [];

const n1 = new Nivel("escenario.fbx");

const player = new Player(camera);

const ball = new Ball(scene, new THREE.Vector3(0, 0.4, -0.3));

camera.position.z = 20;
camera.position.y = 15;

const animate = function () {
    requestAnimationFrame(animate);
    //if ( mixer ) mixer.update( 0.015);

    ball.update();
    player.update();

    controles.update();
    //camera.rotation.x = 0.1;
    renderer.render(scene, camera);//cambiar render por effect
};

animate();