
export default (scene, x, y, z, angle) => {    

    var THREE = require('three');   

    var boxGeometry = new THREE.BoxGeometry(1, 0.2, 10*Math.sqrt(2));
    boxGeometry.rotateX( angle )
    var boxMaterial = new THREE.MeshBasicMaterial({color: 0xc93c20, wireframe: false, side: THREE.DoubleSide});
    var box = new THREE.Mesh(boxGeometry, boxMaterial);
    box.position.x = x;
    box.position.y = y;
    box.position.z = z;
    scene.add(box);

    function update(time) {
        
        //box.rotation.x += 0.1
    }

    return {
        update
    }
}