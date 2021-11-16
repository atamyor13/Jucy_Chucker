function Ball() {

    const loader = new THREE.TextureLoader();

    const sphere = new THREE.SphereGeometry();
    const mat = new THREE.MeshPhongMaterial({ 
        map: loader.load("js/3D/ball_map.png"),
        normalMap: loader.load("js/3D/ball_normal.png"),
        shininess: 20
    });
    const ball = new THREE.Mesh(sphere, mat);
    scene.add(ball);

    ball.position.set(0, 20, 0)
}