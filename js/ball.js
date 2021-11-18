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

    //---------------------RayCast's----------------------------------

    const raycaster_up = new THREE.Raycaster();
    const raycaster_down = new THREE.Raycaster();

    const raycaster_left = new THREE.Raycaster();
    const raycaster_right = new THREE.Raycaster();

    const raycaster_front = new THREE.Raycaster();
    const raycaster_back = new THREE.Raycaster();

    //---------------------Ray Directions-----------------------------

    const dir_up = new THREE.Vector3(0, 1, 0);
    const dir_down = new THREE.Vector3(0, -1, 0);

    const dir_left = new THREE.Vector3(-1, 0, 0);
    const dir_right = new THREE.Vector3(1, 0, 0);

    const dir_front = new THREE.Vector3(-0, 0, -1);
    const dir_back = new THREE.Vector3(0, 0, 1);

    //-----------------------physics---------------------------------

    var acc = new THREE.Vector3(0, -0.01, 0);
    var vel = vector;

    ball.position.set(0, 20, -10);


    this.update = function () {

        vel.x += acc.x;
        vel.y += acc.y;
        vel.z += acc.z;

        ball.position.x += vel.x;
        ball.position.y += vel.y;
        ball.position.z += vel.z;

        //-----------------RayCast Up-------------------------------
        raycaster_up.set(ball.position, dir_up);
        const inter_up = raycaster_up.intersectObjects(scene.children, true);
        if (inter_up.length > 0) {
            if (inter_up[0].distance < 1) {
                vel.y = -vel.y;
                //vel[1] += 0.1;
            }
        }

        //-----------------RayCast Down-------------------------------
        raycaster_down.set(ball.position, dir_down);
        const inter_down = raycaster_down.intersectObjects(scene.children, true);
        if (inter_down.length > 0) {
            if (inter_down[0].distance < 1) {
                vel.y = -vel.y;
                //vel[1] += 0.1;
            }
        }

        //-----------------RayCast Left-------------------------------
        raycaster_left.set(ball.position, dir_left);
        const inter_left = raycaster_left.intersectObjects(scene.children, true);
        if (inter_left.length > 0) {
            if (inter_left[0].distance < 1) {
                vel.x = -vel.x;
                //vel[1] += 0.1;
            }
        }
        //-----------------RayCast Rigth-------------------------------
        raycaster_right.set(ball.position, dir_right);
        const inter_right = raycaster_right.intersectObjects(scene.children, true);
        if (inter_right.length > 0) {
            if (inter_right[0].distance < 1) {
                vel.x = -vel.x;
                //vel[1] += 0.1;
            }
        }
        
        //-----------------RayCast Front-------------------------------
        raycaster_front.set(ball.position, dir_front);
        const inter_front = raycaster_front.intersectObjects(scene.children, true);
        if (inter_front.length > 0) {
            if (inter_front[0].distance < 1) {
                vel.z = -vel.z;
                //vel[1] += 0.1;
            }
        }
        
        //-----------------RayCast Back-------------------------------
        raycaster_back.set(ball.position, dir_back);
        const inter_back = raycaster_back.intersectObjects(scene.children, true);
        if (inter_back.length > 0) {
            if (inter_back[0].distance < 1) {
                vel.z = -vel.z;
                //vel[1] += 0.1;
            }
        }
        
    }
}
