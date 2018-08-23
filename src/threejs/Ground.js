
export default (scene, len) => {    

    var THREE = require('three');   

    var geometry = new THREE.PlaneGeometry( 5, 20 );
    var material = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: false, side: THREE.DoubleSide});
    var plane = new THREE.Mesh(geometry, material);
    plane.position.x = 0;
    plane.position.y = 0;
    plane.position.z = 10;

    plane.rotation.x = Math.PI / 2;

    scene.add(plane);

    const speed = 0.02;
    const textureOffsetSpeed = 0.02;

    function update(time) {
        
        //box.rotation.x += 0.1
    }

    return {
        update
    }
}