function Nivel(path) {
    this.contenedor = new THREE.Object3D();

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

                child.material.skinning = true;

                if (child.name == "Estructura_rocola") {

                    child.material = new THREE.MeshPhongMaterial({
                        color: 0xFF8844,
                        map: loader.load("js/3D/REIN.jpg")
                    });
                }

                if (child.name == "Postes_luz_pCube22") {

                    child.material = new THREE.MeshPhongMaterial({
                        color: 0xFF8844, emissive: 0xffd500, shininess: 100, opacity: 0.58

                    });
                }

                if (child.name == "metal_postes") {

                    child.material = new THREE.MeshPhongMaterial({
                        color: 0xFF8844, emissive: 0xffd500, shininess: 100, opacity: 0.58

                    });
                }

                if (child.name == "peques") {

                    child.material = new THREE.MeshPhongMaterial({
                        color: 0xFF8844,
                        emissive: 0xff38,
                        shininess: 100

                    });
                }

                if (child.name == "Baseboton") {

                    child.material = new THREE.MeshPhongMaterial({
                        color: 0xFF8844,
                        emissive: 0xff38,
                        shininess: 100

                    });
                }

                if (child.name == "boton") {

                    child.material = new THREE.MeshPhongMaterial({
                        color: 0xFF8844, emissive: 0xE907F5, shininess: 100

                    });
                }

                if (child.name == "a") {

                    child.material = new THREE.MeshPhongMaterial(+{
                        color: 0xffffff,
                        emissive: 0x82FA0D,
                        shininess: 100

                    });
                }

                if (child.name == "bolita1") {

                    child.material = new THREE.MeshPhongMaterial(+{
                        color: 0xFF8844,
                        emissive: 0xff38,
                        shininess: 100

                    });
                }

                if (child.name == "Varillas_grandes") {

                    child.material = new THREE.MeshPhongMaterial({
                        color: 0xFF8844,
                        emissive: 0x9804DE,
                        shininess: 100

                    });
                }


                if (child.name == "base") {

                    child.material = new THREE.MeshNormalMaterial();
                }

                if (child.name == "cilindro_poste") {

                    child.material = new THREE.MeshNormalMaterial();

                }

            }
        });

        scene.add(object);
    });



    this.update = function () {

    }

}