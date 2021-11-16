function Nivel(path) {
    this.contenedor = new THREE.Object3D();


    var a = 0.001;
    var v = 0;

    const loader = new THREE.FBXLoader();
    loader.load('js/3D/' + path, function (object) {

        /*this.mixer = new THREE.AnimationMixer(object);

        const action = mixer.clipAction(object.animations[0]);
        action.play();*/

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

                child.material.skinning = true;

            }

            if(child.name=="piso"){

                child.material=new THREE.MeshPhongMaterial(
                    {
                        color: 0xFF8844,
                        map:loader.load('cancha.png')													
                    }
                )
                child.material.skinning=true;
                }

        });

        scene.add(object);
    });



    this.update = function () {

    }

}