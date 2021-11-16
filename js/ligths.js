function Ligths() {

    const light = new THREE.AmbientLight(0x404040, 2); // soft white light
    scene.add(light);

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