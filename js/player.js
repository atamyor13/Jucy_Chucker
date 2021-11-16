function Player(path){

    const loader = new THREE.FBXLoader();
    loader.load('js/3D/' + path, function (object) {

        this.mixer = new THREE.AnimationMixer(object);

        const action = mixer.clipAction(object.animations[0]);
        action.play();

        object.traverse(function (child) {

            if (child.isMesh) {

                child.castShadow = true;
                child.receiveShadow = true;
                console.log(child.name);

                if (child.name == "Beta_Surface") {
                    child.material = new THREE.MeshLambertMaterial({
                        color: 0xBCC0C0
                    });
                }

                object.scale.set(0.2, 0.2, 0.2);
                object.position.y = -20;

                child.material.skinning = true;

            }

        });

        object.position.x = posX;
        scene.add(object);
    });

}