function Player(miCamera) {

    this.cam = miCamera;
    const rayCast = new THREE.Raycaster();
    const mouse = new THREE.Vetor2();

    window.addEventListener('keydown', function (e) {
        keyDownWalk(e);
    });
    window.addEventListener('keyup', function (e) {
        keyUpWalkStop(e);
    });

    function keyDownWalk(e) {
        let keyCode = e.keyCode;
        let position = walkingMan.position, rotation = walkingMan.rotation.y;
        switch (keyCode) {
            case 87:        //w
                position.x += 0.02 * Math.cos(rotation);
                position.z += 0.02 * Math.sin(-rotation);
                break;
            case 65:        //a
                position.x += 0.02 * Math.cos(rotation + Math.PI / 2);
                position.z += 0.02 * Math.sin(-rotation - Math.PI / 2);
                break;
            case 68:        //d
                position.x += 0.02 * Math.cos(rotation - Math.PI / 2);
                position.z += 0.02 * Math.sin(-rotation + Math.PI / 2);
                break;
            case 83:        //s
                position.x -= 0.02 * Math.cos(rotation);
                position.z -= 0.02 * Math.sin(-rotation);
                break;
            default:
                break;
        }
    }

    let desPosX = eyePosition[0] + Math.sin(eyeRotation), desPosZ = eyePosition[2] + Math.cos(eyeRotation);
    camera.position.set(eyePosition[0] - 1.5 * Math.sin(eyeRotation), eyePosition[1] + 1, eyePosition[2] - 1.5 * Math.cos(eyeRotation));
    camera.lookAt(new THREE.Vector3(desPosX, eyePosition[1], desPosZ));
    this.actualiar = function () {
        rayCast.setFromCamera(mouse, this.cam);

        const intersects = rayCast.intersectsObjects(scene.childres, true);

        if (intersects.length > 0) {
            console.log("ssss");

        }
    }
}