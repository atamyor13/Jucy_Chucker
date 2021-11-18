function Player(miCamera){

    this.cam = miCamera;
    const rayCast = new THREE.Raycaster();
    const mouse = new THREE.Vector2(0, 0);

    this.update = function(){
        rayCast.setFromCamera(mouse, this.cam);

        const intersects = rayCast.intersectObjects(scene.childres, true);

        if(intersects.length > 0){
            console.log("sss");

        }
    }
}