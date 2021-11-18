function Player(miCamera, miScene) {

    this.cam = miCamera;
    this.sc = miScene;
    this.isShootting = false;
    
    var delta = 0;
    var myballs;

    const clock = new THREE.Clock();
    const rayCast = new THREE.Raycaster();
    const mouse = new THREE.Vector2();


    this.update = function () {
        rayCast.setFromCamera(mouse, this.cam);
        
        //console.log(rayCast);
        if(this.isShootting){
            myballs.update();
            delta += clock.getDelta();
            if(delta >= 4){
                this.killBall();
            }
        }
    }

    this.shoot = function () {
        if (!this.isShootting) {
            myballs = new Ball(this.sc, new THREE.Vector3(0, 0.1, -0.5), this.cam.position);
            this.isShootting = true;
        }
    }

    this.killBall = function () {
        this.isShootting = false;
        delta = 0;
        myballs.die();
    }
}