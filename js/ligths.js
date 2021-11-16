function Ligths() {

    const lightP1 = new THREE.PointLight(0xffffff, 1.5, 0);
    lightP1.position.set(0, 30, 0);

    const lightP2 = new THREE.PointLight(0xffffff, 1.5, 0);
    lightP2.position.set(0, 30, 50);

    scene.add(
        lightP1,
        lightP2
    );

    lightP1.castShadow = true;
    lightP2.castShadow = true;

    const pointLightHelper1 = new THREE.PointLightHelper(lightP1, 0.5);
    const pointLightHelper2 = new THREE.PointLightHelper(lightP2, 0.5);

    scene.add(
        pointLightHelper1,
        pointLightHelper2
    );

    const lightP = new THREE.PointLight(0x11E5E5, 1, 200);
    lightP.position.set(20, 0, 0);
    scene.add(lightP);
    lightP.castShadow = true
    const sphereSize = 1;
    const pointLightHelper = new THREE.PointLightHelper(lightP, sphereSize);
    scene.add(pointLightHelper);

    const light1 = new THREE.PointLight(0xc502b5, 1, 200);
    light1.position.set(-20, 0, 0);
    scene.add(light1);
    light1.castShadow = true
    const sphereSize1 = 1;
    const pointLightHelper1 = new THREE.PointLightHelper(light1, sphereSize1);
    scene.add(pointLightHelper1);

}