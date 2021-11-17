function Ball() {

    const loader = new THREE.TextureLoader();

    const sphere = new THREE.SphereGeometry(1, 32, 16);
    const mat = new THREE.MeshPhongMaterial({ 
        map: loader.load("js/3D/ball_map2.png"),
        normalMap: loader.load("js/3D/ball_normal.png"),
        shininess: 20
    });
    const ball = new THREE.Mesh(sphere, mat);
    scene.add(ball);

    var a = [0, 0.09, 0];
    var v =[0, 0, 0];

    ball.position.set(0, 15, 15);
        
    this.update = function () {

        v[1] += a[1];

        ball.rotation.y += 0.01;
    }
}