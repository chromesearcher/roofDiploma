//import * as THREE from 'three';
import SceneSubject from './SceneSubject';
import GeneralLights from './GeneralLights';
import Rafter from './Rafter';
import RafterTop from './RafterTop';
import Ground from './Ground';



export default canvas => {

    //alert('hello scenemanager');


    var THREE = require('three');
    const clock = new THREE.Clock();
    const origin = new THREE.Vector3(0,0,0);

    const screenDimensions = {
        width: canvas.width,
        height: canvas.height
    }

    const mousePosition = {
        x: 0,
        y: 0
    }

    const scene = buildScene();

    const renderer = buildRender(screenDimensions);
    const camera = buildCamera(screenDimensions);
    const sceneSubjects = createSceneSubjects(scene);


    renderer.setClearColor(new THREE.Color(0xEEEEEE));
	renderer.setSize(window.innerWidth, window.innerHeight);

    
    // var controls = new THREE.TrackballControls( camera );
    // controls.rotateSpeed = 1.0;
    // controls.zoomSpeed = 1.2;
    // controls.panSpeed = 0.8;
    // controls.noZoom = false;
    // controls.noPan = false;
    // controls.staticMoving = true;
    // controls.dynamicDampingFactor = 0.3;
    // controls.keys = [ 65, 83, 68 ];
    //controls.addEventListener( 'change', update );
    var OrbitControls = require('three-orbit-controls')(THREE)
    var controls = new OrbitControls( camera );

    controls.update();
    

    renderer.render(scene, camera);

    function buildScene() {
        const scene = new THREE.Scene();
        scene.background = new THREE.Color("#808080");

        return scene;
    }

    function buildRender({ width, height }) {
        const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true }); 
        const DPR = window.devicePixelRatio ? window.devicePixelRatio : 1;
        renderer.setPixelRatio(DPR);
        renderer.setSize(width, height);

        renderer.gammaInput = true;
        renderer.gammaOutput = true; 

        return renderer;
    }

    function buildCamera({ width, height }) {
        const aspectRatio = width / height;
        const fieldOfView = 45; //60
        const nearPlane = 1; //4
        const farPlane = 1000; //100
        // const camera = new THREE.OrthographicCamera(width / - 2, width / 2, height / 2, height / - 2, 4, 100 )
        const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
        camera.position.set(50, 80, 130 );
        // camera.position.x = -30;
        // camera.position.y = 40;
        // camera.position.z = 30;

        // camera.lookAt(origin);
        camera.lookAt(scene.position);

        

        return camera;
    }

    function createSceneSubjects(scene) {
        var sceneSubjects = [
            new GeneralLights(scene),
            //new SceneSubject(scene),
            new Rafter(scene, 0)
            //new Ground(scene)
        ];

        var axis = new THREE.AxesHelper(100);
        scene.add(axis);

        var size = 100;
        var divisions = 10;

        var gridHelper = new THREE.GridHelper( size, divisions );
        scene.add( gridHelper );


        var rollOverGeo = new THREE.BoxBufferGeometry( 20, 20, 20 );
        var rollOverMaterial = new THREE.MeshBasicMaterial( { color: 0x000000, opacity: 0.5, transparent: true } );
        var rollOverMesh = new THREE.Mesh( rollOverGeo, rollOverMaterial );
        scene.add( rollOverMesh );

        var geometry = new THREE.PlaneBufferGeometry( 100, 100 );
        geometry.rotateX( - Math.PI / 2 );
        var plane = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { visible: true } ) );
        scene.add( plane );

        //sceneSubjects.push(new Rafter(scene, 2));
        // sceneSubjects.push(new Rafter(scene, 4));
        // sceneSubjects.push(new Rafter(scene, 6));
        // sceneSubjects.push(new Rafter(scene, 8));
        // sceneSubjects.push(new Rafter(scene, 10));

        sceneSubjects = generateRafters(sceneSubjects, 10, -10, 2);


        var yOffset = 0.5;
        var y = 20 - yOffset;
        sceneSubjects.push(new RafterTop(scene, y))

        return sceneSubjects;
    }

    function generateRafters(arr, n, startPos, step) {

        var angle1 = - Math.PI / 4;
        var angle2 = Math.PI / 4;

        var zOffset = 0.5;
        var z1 = - (5 + zOffset);
        var z2 = 5 + zOffset;

        var yOffset = 0.5;
        var y = 15 - yOffset;


        for(let i=0; i<n+1; i++)
            arr.push(new Rafter(scene, startPos + i*step, y, z1, angle1));   

        for(let i=0; i<n+1; i++)
            arr.push(new Rafter(scene, startPos + i*step, y, z2, angle2));
        
        return arr;
    }

    function update() {
        const elapsedTime = clock.getElapsedTime();

        for(let i=0; i<sceneSubjects.length; i++)
            sceneSubjects[i].update(elapsedTime);

        // updateCameraPositionRelativeToMouse();
        controls.update();

        renderer.render(scene, camera);
    }

    function updateCameraPositionRelativeToMouse() {
        camera.position.x += (  (mousePosition.x * 0.1) - camera.position.x ) * 0.1;
        camera.position.y += ( -(mousePosition.y * 0.1) - camera.position.y ) * 0.1;
        camera.lookAt(origin);
    }

    function onWindowResize() {
        const { width, height } = canvas;
        
        screenDimensions.width = width;
        screenDimensions.height = height;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        
        renderer.setSize(width, height);
    }

    function onMouseMove(x, y) {
        mousePosition.x = x;
        mousePosition.y = y;
    }

    return {
        update,
        onWindowResize,
        onMouseMove
    }
}