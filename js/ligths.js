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

}