
export default (scene, y) => {    

    var THREE = require('three');   

    var boxGeometry = new THREE.BoxGeometry(1.0, 1.0, 20);
    boxGeometry.rotateY( Math.PI / 2 );
    var boxMaterial = new THREE.MeshBasicMaterial({color: 0x1f3a3d, wireframe: false, side: THREE.DoubleSide});
    var box = new THREE.Mesh(boxGeometry, boxMaterial);
    box.position.x = 0;
    box.position.y = y;
    box.position.z = 0;
    scene.add(box);

    function update(time) {
        
        //box.rotation.x += 0.1
    }

    return {
        update
    }
}