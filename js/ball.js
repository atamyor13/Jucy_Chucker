function Ball() {

    const loader = new THREE.TextureLoader();

    const sphere = new THREE.SphereGeometry();
    const sphere1 = new THREE.SphereGeometry(5);
    const mat = new THREE.MeshPhongMaterial({ 
        map: loader.load("js/3D/ball_map.png"),
        normalMap: loader.load("js/3D/ball_normal.png"),
        shininess: 20
    });
    const mat1 = new THREE.MeshPhongMaterial({ 
        transparent:true, opacity:0.61
    });
    const ball = new THREE.Mesh(sphere, mat);
    const ball1 = new THREE.Mesh(sphere1, mat1);
    scene.add(ball,ball1);

    ball.position.set(0, 20, 0)
    ball1.position.set(-0.5, 22, -30)
}