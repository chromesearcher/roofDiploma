//import * as THREE from 'three';

export default scene => {    


    var THREE = require('three');
    
    const lightIn = new THREE.PointLight("#4CAF50", 30, 30);
    const lightOut = new THREE.PointLight("#2196F3", 10, 30);
    lightOut.position.set(40,20,40);

    //scene.add(lightIn);
    //scene.add(lightOut);

    var ambientLight = new THREE.AmbientLight( 0x606060 );
    scene.add( ambientLight );

    var directionalLight = new THREE.DirectionalLight( 0xffffff );
    directionalLight.position.set( 1, 0.75, 0.5 ).normalize();
    scene.add( directionalLight );

    const rad = 80;

    function update(time) {
        //const x = rad * Math.sin(time*0.2)
        //lightOut.position.x = x;
    }

    return {
        update
    }
}