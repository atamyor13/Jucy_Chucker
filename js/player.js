function Player(miCamera){

    this.cam = miCamera;
    const rayCast = new THREE.Raycaster();
    const mouse = new THREE.Vetor2();

    this.actualiar = function(){
        rayCast.setFromCamera(mouse, this.cam);

        const intersects = rayCast.intersectsObjects(scene.childres, true);

        if(intersects.length > 0){
            console.log("ssss");

        }
    }
}