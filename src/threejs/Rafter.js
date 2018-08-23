
export default (scene, len) => {    

    var THREE = require('three');   

    var boxGeometry = new THREE.BoxGeometry(1, 0.2, len);
    var boxMaterial = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: false, side: THREE.DoubleSide});
    var box = new THREE.Mesh(boxGeometry, boxMaterial);
    box.position.x = 0;
    box.position.y = 0;
    box.position.z = 0;
    scene.add(box);

    const speed = 0.02;
    const textureOffsetSpeed = 0.02;

    function update(time) {
        
        //box.rotation.x += 0.1
    }

    return {
        update
    }
}