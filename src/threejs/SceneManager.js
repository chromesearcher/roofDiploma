//import * as THREE from 'three';
import SceneSubject from './SceneSubject';
import GeneralLights from './GeneralLights';
import Rafter from './Rafter';
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

   // alert('hello SM 2');


    const scene = buildScene();

    // alert('hello SM 3');

    const renderer = buildRender(screenDimensions);
    const camera = buildCamera(screenDimensions);//alert('hello SM 4');
    const sceneSubjects = createSceneSubjects(scene);


    renderer.setClearColor(new THREE.Color(0xEEEEEE));
	renderer.setSize(window.innerWidth, window.innerHeight);


    //('hello SM 4');

    camera.position.x = -30;
    camera.position.y = 40;
    camera.position.z = 30;
    camera.lookAt(scene.position);

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
        const fieldOfView = 60;
        const nearPlane = 4;
        const farPlane = 100; 
        const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
        //const camera = new THREE.OrthographicCamera(width / - 2, width / 2, height / 2, height / - 2, 4, 100 )
        camera.position.z = 0;

        return camera;
    }

    function createSceneSubjects(scene) {
        const sceneSubjects = [
            new GeneralLights(scene),
            new SceneSubject(scene),
            new Rafter(scene, 11),
            new Ground(scene)
        ];

        var geometry = new THREE.PlaneBufferGeometry( 1000, 1000 );
        geometry.rotateX( - Math.PI / 2 );
        var plane = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { visible: true } ) );
        scene.add( plane );

        //alert('hello end create subj-s');

        return sceneSubjects;
    }

    function update() {
        const elapsedTime = clock.getElapsedTime();

        for(let i=0; i<sceneSubjects.length; i++)
            sceneSubjects[i].update(elapsedTime);

        updateCameraPositionRelativeToMouse();

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