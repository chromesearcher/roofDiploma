
export default (scene, x, y, z, angle) => {    

    var THREE = require('three');   

    var boxGeometry = new THREE.BoxGeometry(1, 0.2, 10*Math.sqrt(2));
    boxGeometry.rotateX( angle )
    var material = new THREE.MeshBasicMaterial({color: 0xc93c20, wireframe: false, side: THREE.DoubleSide});
    // document.getElementById('')

    var shader = THREE.FresnelShader;
    console.log("start");
    console.log(shader);
    console.log("end");

    // var material = new THREE.ShaderMaterial( {

    //     uniforms: {

    //         time: { value: 1.0 },
    //         resolution: { value: new THREE.Vector2() }

    //     },

    //     vertexShader: document.getElementById( 'vertexShader' ).textContent, //shader.vertexShader, // 

    //     fragmentShader: document.getElementById( 'fragmentShader' ).textContent //shader.fragmentShader //

    // } );    


    // var shader = THREE.FresnelShader;
    // //var uniforms = THREE.UniformsUtils.clone( shader.uniforms );
    // //uniforms[ "tCube" ].value = textureCube;
    // var material = new THREE.ShaderMaterial( {
    //     //niforms: uniforms,
    //     vertexShader: shader.vertexShader,
    //     fragmentShader: shader.fragmentShader
    // } );




    var box = new THREE.Mesh(boxGeometry, material);
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