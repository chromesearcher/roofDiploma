//import * as THREE from 'three';
import SceneSubject from './SceneSubject';
import GeneralLights from './GeneralLights';
import Rafter from './Rafter';
import RafterTop from './RafterTop';
import Ground from './Ground';



export default (canvas, L_input, W_input, La_input, Wa_input, H_input, h_input) => {

    // alert('hello scenemanager');
    // alert(L_input);


    var THREE = require('three');
    const clock = new THREE.Clock();
    const origin = new THREE.Vector3(0,0,0);

    const screenDimensions = {
        width: canvas.width * 0.75,
        height: canvas.height * 0.75
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
        const nearPlane = 4; //4
        const farPlane = 1000; //100
        // const camera = new THREE.OrthographicCamera(width / - 2, width / 2, height / 2, height / - 2, 4, 100 )
        const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
        camera.position.set(120, 150, 80 );
        
        // camera.position.x = -30;
        // camera.position.y = 40;
        // camera.position.z = 30;

        // camera.lookAt(origin);
        camera.lookAt(scene.position);

        

        return camera;
    }

    function createSceneSubjects(scene) {
        var sceneSubjects = [
            new GeneralLights(scene)
            //new SceneSubject(scene),
            //new Rafter(scene, 0)
            //new Ground(scene)
        ];

        // HELPERS -----------------------------------------------------------------------------------

        var axis = new THREE.AxesHelper(200);
        scene.add(axis);
        // sceneSubjects.push(axis);

        var size = 200;
        var divisions = 20;

        var gridHelper = new THREE.GridHelper( size, divisions );
        // gridHelper.position = new THREE.Vector3(0, 40, 0);
        scene.add( gridHelper );
        // sceneSubjects.push(gridHelper);

        var material = new THREE.LineBasicMaterial({
            color: 0x0000ff
        });
        
        var geometry = new THREE.Geometry();
        geometry.vertices.push(
            new THREE.Vector3( -100, 47, 0 ),
            // new THREE.Vector3( 0, 50, 0 ),
            new THREE.Vector3( 100, 47, 0 )
        );
        
        var line = new THREE.Line( geometry, material );
        line.rotateY( - Math.PI / 2 );
        // scene.add( line );

        var geometry = new THREE.Geometry();
        geometry.vertices.push(
            new THREE.Vector3( -100, 30, 10 ),
            // new THREE.Vector3( 0, 50, 0 ),
            new THREE.Vector3( 100, 30, 10 )
        );
        
        var line = new THREE.Line( geometry, material );
        line.rotateY( - Math.PI / 2 );
        // scene.add( line );

        var geometry = new THREE.Geometry();
        geometry.vertices.push(
            new THREE.Vector3( -100, 30, -10 ),
            // new THREE.Vector3( 0, 50, 0 ),
            new THREE.Vector3( 100, 30, -10 )
        );
        
        var line = new THREE.Line( geometry, material );
        line.rotateY( - Math.PI / 2 );
        // scene.add( line );

        var geometry = new THREE.Geometry();
        geometry.vertices.push(
            new THREE.Vector3( -100, 30, 5 ),
            // new THREE.Vector3( 0, 50, 0 ),
            new THREE.Vector3( 100, 30, 5 )
        );
        
        var line = new THREE.Line( geometry, material );
        line.rotateY( - Math.PI / 2 );
        // scene.add( line );

        var geometry = new THREE.Geometry();
        geometry.vertices.push(
            new THREE.Vector3( -100, 30, -5 ),
            // new THREE.Vector3( 0, 50, 0 ),
            new THREE.Vector3( 100, 30, -5 )
        );
        
        var line = new THREE.Line( geometry, material );
        line.rotateY( - Math.PI / 2 );
        // scene.add( line );

         // GROUND -----------------------------------------------------------------------------------
         var geometry = new THREE.PlaneBufferGeometry( 160, 200 );
         geometry.rotateX( - Math.PI / 2 );
         var plane = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { visible: true } ) );
         scene.add( plane );
         // sceneSubjects.push(plane);

        // HOUSE -----------------------------------------------------------------------------------
        // 1 = 1 santimetr
        // 1 metr = 100
        var N = 10; // koef mashtab
        
        var L = 1400 / N; //L_input / N; // length of house (along konek) sm. eskiz // 1200
        var W = 900 / N;// W_input / N; // prolet (width of house) // 900
        var h_house = 300 / N;//H_input / N; // 300
        var houseGeo = new THREE.BoxBufferGeometry( L - 0.1, h_house*2 - 0.1, W - 0.1 );
        var houseMaterial = new THREE.MeshBasicMaterial( { color: 0x000000, opacity: 0.5, transparent: true } );
        var houseMesh = new THREE.Mesh( houseGeo, houseMaterial );
        scene.add( houseMesh );
        // sceneSubjects.push(HouseMesh);

        // ANNEX
        var h_annex = h_house;
        var La = 500 / N;//La_input / N; // length of house (along konek) sm. eskiz // 500
        var Wa = 400 / N;//Wa_input / N; // width of annex // 400
        houseGeo = new THREE.BoxBufferGeometry( La - 0.1, h_annex*2 - 0.1, Wa - 0.1 );
        houseMaterial = new THREE.MeshBasicMaterial( { color: 0x000000, opacity: 0.5, transparent: true } );
        houseMesh = new THREE.Mesh( houseGeo, houseMaterial );
        houseMesh.position.set( 0, 0, W / 2 + Wa / 2 );
        scene.add( houseMesh );


        // WALLS -----------------------------------------------------------------------------------
        var w_wall = 30 / N;
        var wall_opacity = 0.5;

        var wallGeo = new THREE.BoxBufferGeometry( W , h_house, w_wall );
        var wallMaterial = new THREE.MeshBasicMaterial( { color: 0x884535, opacity: 0.8, transparent: true } );
        // var WallMaterial = new THREE.MeshStandardMaterial({color: 0x884535, /*wireframe: false,*/ opacity: wall_opacity, side: THREE.DoubleSide});
        var wallMesh = new THREE.Mesh( wallGeo, wallMaterial );
        wallMesh.rotateY(Math.PI / 2);
        wallMesh.position.set( - (L / 2 - w_wall / 2), h_house / 2, 0 );
        scene.add( wallMesh );

        var wallMesh = new THREE.Mesh( wallGeo, wallMaterial );
        wallMesh.rotateY(Math.PI / 2);
        wallMesh.position.set( L / 2 - w_wall / 2, h_house / 2, 0 );
        scene.add( wallMesh );

        // walls along konek

        wallGeo = new THREE.BoxBufferGeometry( L - w_wall*2 , h_house, w_wall );

        wallMesh = new THREE.Mesh( wallGeo, wallMaterial );
        // WallMesh.rotateY(Math.PI / 2);
        wallMesh.position.set( 0, h_house / 2, -( W / 2 - w_wall / 2) );
        scene.add( wallMesh );

        wallMesh = new THREE.Mesh( wallGeo, wallMaterial );
        // WallMesh.rotateY(Math.PI / 2);
        wallMesh.position.set( 0, h_house / 2, W / 2 - w_wall / 2 );
        scene.add( wallMesh );

        var wallMaterial = new THREE.MeshStandardMaterial({color: 0x884535, /*wireframe: false,*/ opacity: wall_opacity, side: THREE.DoubleSide});
        wallMesh = new THREE.Mesh( wallGeo, wallMaterial );
        // WallMesh.rotateY(Math.PI / 2);
        wallMesh.position.set( 0, h_house / 2, 0 );
        scene.add( wallMesh );

        // ANNEX WALLS

        var w_wall_a = w_wall;

        var wallGeo = new THREE.BoxBufferGeometry( Wa , h_annex, w_wall_a );
        var wallMaterial = new THREE.MeshBasicMaterial( { color: 0x884535, opacity: 0.8, transparent: true } );
        // var WallMaterial = new THREE.MeshStandardMaterial({color: 0x884535, /*wireframe: false,*/ opacity: wall_opacity, side: THREE.DoubleSide});
        var wallMesh = new THREE.Mesh( wallGeo, wallMaterial );
        wallMesh.rotateY(Math.PI / 2);
        wallMesh.position.set( - (La / 2 - w_wall_a / 2), h_annex / 2, W/2 + Wa / 2);
        scene.add( wallMesh );

        var wallMesh = new THREE.Mesh( wallGeo, wallMaterial );
        wallMesh.rotateY(Math.PI / 2);
        wallMesh.position.set( (La / 2 - w_wall_a / 2), h_annex / 2, W/2 + Wa / 2);
        scene.add( wallMesh );

        // walls along MAIN konek (of house, not annex)

        wallGeo = new THREE.BoxBufferGeometry( La - w_wall_a*2 , h_annex, w_wall_a );

        wallMesh = new THREE.Mesh( wallGeo, wallMaterial );
        wallMesh.position.set( 0, h_annex / 2, ( W / 2 + Wa - w_wall_a / 2) );
        scene.add( wallMesh );

        //sceneSubjects.push(new Rafter(scene, 2));
        // sceneSubjects.push(new Rafter(scene, 4));
        // sceneSubjects.push(new Rafter(scene, 6));
        // sceneSubjects.push(new Rafter(scene, 8));
        // sceneSubjects.push(new Rafter(scene, 10));

        // rafters are pushed to sceneSubjects inside of a function
        // sceneSubjects = generateRafters(sceneSubjects, nRafters, -10, 2);
        
        // MAUERLATS -----------------------------------------------------------------------------------
        var mauerlat_width = 15 / N;
        var mauerlat_thickness = 15 / N;
        var mauerlatGeo = new THREE.BoxBufferGeometry( W, mauerlat_width, mauerlat_thickness );
        // var mauerlatMaterial = new THREE.MeshBasicMaterial( { color: 0x884535, opacity: 0.8, transparent: true } );
        var mauerlatMaterial = new THREE.MeshStandardMaterial({color: 0xdfcc65, /*wireframe: false,*/ opacity: 1, side: THREE.DoubleSide});
        var mauerlatMesh = new THREE.Mesh( mauerlatGeo, mauerlatMaterial );
        mauerlatMesh.rotateY(Math.PI / 2);
        mauerlatMesh.position.set( - (L / 2 - w_wall + mauerlat_thickness / 2 ), h_house + mauerlat_width / 2, 0 );
        scene.add( mauerlatMesh );

        mauerlatMesh = new THREE.Mesh( mauerlatGeo, mauerlatMaterial );
        mauerlatMesh.rotateY(Math.PI / 2);
        mauerlatMesh.position.set( + (L / 2 - w_wall + mauerlat_thickness / 2 ), h_house + mauerlat_width / 2, 0 );
        scene.add( mauerlatMesh );


        // mauerlats along central wall / konek

        var Lm = L - w_wall*2;  
        mauerlatGeo = new THREE.BoxBufferGeometry( Lm , mauerlat_width, mauerlat_thickness );
        mauerlatMesh = new THREE.Mesh( mauerlatGeo, mauerlatMaterial );
        mauerlatMesh.position.set( 0, h_house + mauerlat_width / 2, 0 );
        scene.add( mauerlatMesh );

        mauerlatMesh = new THREE.Mesh( mauerlatGeo, mauerlatMaterial );
        mauerlatMesh.position.set( 0, h_house + mauerlat_width / 2, 0 + (W / 2 - w_wall + mauerlat_thickness / 2 ) );
        scene.add( mauerlatMesh );

        mauerlatMesh = new THREE.Mesh( mauerlatGeo, mauerlatMaterial );
        mauerlatMesh.position.set( 0, h_house + mauerlat_width / 2, 0 - (W / 2 - w_wall + mauerlat_thickness / 2 ) );
        scene.add( mauerlatMesh );

        // ANNEX MAUERLATS
        // annex mauerlats have the same width and thickness as main mauerlats 

        var mauerlatGeo = new THREE.BoxBufferGeometry( Wa + (w_wall - mauerlat_thickness), mauerlat_width, mauerlat_thickness );
        // var mauerlatMaterial = new THREE.MeshBasicMaterial( { color: 0x884535, opacity: 0.8, transparent: true } );
        var mauerlatMaterial = new THREE.MeshStandardMaterial({color: 0xdfcc65, /*wireframe: false,*/ opacity: 1, side: THREE.DoubleSide});
        var mauerlatMesh = new THREE.Mesh( mauerlatGeo, mauerlatMaterial );
        mauerlatMesh.rotateY(Math.PI / 2);
        mauerlatMesh.position.set( - (La / 2 - w_wall_a + mauerlat_thickness / 2 ), h_annex + mauerlat_width / 2, W/2 + Wa/2 - (w_wall - mauerlat_thickness) / 2);
        scene.add( mauerlatMesh );

        var mauerlatMesh = new THREE.Mesh( mauerlatGeo, mauerlatMaterial );
        mauerlatMesh.rotateY(Math.PI / 2);
        mauerlatMesh.position.set( (La / 2 - w_wall_a + mauerlat_thickness / 2 ), h_annex + mauerlat_width / 2, W/2 + Wa/2 - (w_wall - mauerlat_thickness) / 2);
        scene.add( mauerlatMesh );

        // mauerlat along MAIN konek
        mauerlatGeo = new THREE.BoxBufferGeometry( La - w_wall_a*2 , mauerlat_width, mauerlat_thickness );
        mauerlatMesh = new THREE.Mesh( mauerlatGeo, mauerlatMaterial );
        mauerlatMesh.position.set( 0, h_annex + mauerlat_width / 2, W/2 + Wa - w_wall + mauerlat_thickness / 2 );
        scene.add( mauerlatMesh );


        // BALKI PEREKRYTIYA (ceiling rafters) -------------------------------------------------------

        var ceiling_width = 20 / N;
        var ceiling_thickness = 5 / N;
        var ceilingGeo = new THREE.BoxBufferGeometry( W - 2*w_wall + mauerlat_thickness , ceiling_width, ceiling_thickness );
        // var mauerlatMaterial = new THREE.MeshBasicMaterial( { color: 0x884535, opacity: 0.8, transparent: true } );
        
        var step_ceiling = 80 / N; // step of balok perekrytiya 0.6 - 1 m (60-100 sm)
        var ceiling_delta = 5 / N;// + ceiling_thickness / 2; // otstup from wall

        var l = L / 2 - w_wall - ceiling_delta;
        var step = step_ceiling + ceiling_thickness;
        // var x = 10;
        // var y = 3;
        var n = Math.floor( l / step ); //чтобы отбросить дробную часть
        var b = l % step;
        // alert('L / 2 = ' + L / 2);
        // alert('w_wall = ' + w_wall);
        // alert('delta = ' + delta);
        // alert('l = ' + l);
        // alert('step = ' + step);
        // alert('n = ' + n);
        // alert('b = ' + b);


        var ceilingMaterial = new THREE.MeshStandardMaterial({color: 0xdfcc65, /*wireframe: false,*/ opacity: 1, side: THREE.DoubleSide});
        var ceilingMesh = new THREE.Mesh( ceilingGeo, ceilingMaterial );
        if ( b > step / 2)  // to avoid too far rafters in the middle
        {
            // n = n - 1;
            ceilingMesh.rotateY(Math.PI / 2);
            ceilingMesh.position.set( 0, h_house + mauerlat_width + ceiling_width / 2, 0);
            scene.add( ceilingMesh );
        }

        // var i = 0;
        // alert('i =' + i);
        // n = n+2;
        for(let i = 0; i <= n; i++)
        {
            ceilingMesh = new THREE.Mesh( ceilingGeo, ceilingMaterial );
            ceilingMesh.rotateY(Math.PI / 2);
            ceilingMesh.position.set( L / 2 - ceiling_thickness / 2 - w_wall - ceiling_delta - step*i, h_house + mauerlat_width + ceiling_width / 2, 0);
            
            scene.add( ceilingMesh );
        }

        for(let i = 0; i <= n; i++)
        {
            ceilingMesh = new THREE.Mesh( ceilingGeo, ceilingMaterial );
            ceilingMesh.rotateY(Math.PI / 2);
            ceilingMesh.position.set( - (L / 2 - ceiling_thickness / 2 - w_wall - ceiling_delta - step*i), h_house + mauerlat_width + ceiling_width / 2, 0);

            scene.add( ceilingMesh );
        }

        // ANNEX ceiling rafters

        var ceilingGeo = new THREE.BoxBufferGeometry( La - 2*w_wall + mauerlat_thickness , ceiling_width, ceiling_thickness );

        l = Wa - w_wall - ceiling_delta;
        step = step_ceiling + ceiling_thickness;
        n = Math.floor( l / step ); //чтобы отбросить дробную часть
        b = l % step;
        // alert('L / 2 = ' + L / 2);
        // alert('w_wall = ' + w_wall);
        // alert('delta = ' + delta);
        // alert('l = ' + l);
        // alert('step = ' + step);
        // alert('n = ' + n);
        // alert('b = ' + b);


        ceilingMaterial = new THREE.MeshStandardMaterial({color: 0xdfcc65, /*wireframe: false,*/ opacity: 1, side: THREE.DoubleSide});
        ceilingMesh = new THREE.Mesh( ceilingGeo, ceilingMaterial );

        for(let i = 0; i <= n; i++)
        {
            ceilingMesh = new THREE.Mesh( ceilingGeo, ceilingMaterial );
            // ceilingMesh.rotateY(Math.PI / 2);
            ceilingMesh.position.set(0, h_house + mauerlat_width + ceiling_width / 2, W/2 + Wa - ceiling_thickness / 2 -  w_wall - ceiling_delta - step*i);
            
            scene.add( ceilingMesh );
        }

        // STANDS (stoyki) ---------------------------------------------------------------------------

        var h_stand = 300 / N; //h_input / N; // 300

        var stand_width = 15 / N;
        var stand_thickness = 10 / N;
        var standGeo = new THREE.BoxBufferGeometry( h_stand, stand_width, stand_thickness );
        // var mauerlatMaterial = new THREE.MeshBasicMaterial( { color: 0x884535, opacity: 0.8, transparent: true } );
        var standMaterial = new THREE.MeshStandardMaterial({color: 0xdfcc65, /*wireframe: false,*/ opacity: 1, side: THREE.DoubleSide});
        var standMesh = new THREE.Mesh( standGeo, standMaterial );
        standMesh.rotateZ(Math.PI / 2);
        standMesh.position.set( 0, h_house + mauerlat_width + h_stand / 2, 0 );
        scene.add( standMesh );

        var step_stand = 180 / N; // step of stands < 2m (200 sm)

        var l = L / 2 - w_wall - ceiling_delta - ceiling_thickness;
        var step = step_stand + stand_width;
        // var x = 10;
        // var y = 3;
        var n = Math.floor( l / step ); //чтобы отбросить дробную часть
        var b = l % step;

        for(let i = 1; i <= n; i++)
        {
            standMesh = new THREE.Mesh( standGeo, standMaterial );
            standMesh.position.set( step*i, h_house + mauerlat_width + h_stand / 2, 0);
            standMesh.rotateZ(Math.PI / 2);
            scene.add( standMesh );
        }

        for(let i = 1; i <= n; i++)
        {
            standMesh = new THREE.Mesh( standGeo, standMaterial );
            standMesh.position.set( - step*i, h_house + mauerlat_width + h_stand / 2, 0);
            standMesh.rotateZ(Math.PI / 2);
            scene.add( standMesh );
        }



        // KONEK -----------------------------------------------------------------------------------

        var konek_width = 25 / N;
        var konek_thickness = 10 / N;
        var konek_addition = w_wall /2;
        var konekGeo = new THREE.BoxBufferGeometry( L - w_wall*2 + konek_addition*2 , konek_width, konek_thickness );
        // var mauerlatMaterial = new THREE.MeshBasicMaterial( { color: 0x884535, opacity: 0.8, transparent: true } );
        var konekMaterial = new THREE.MeshStandardMaterial({color: 0xdfcc65, /*wireframe: false,*/ opacity: 1, side: THREE.DoubleSide});
        var konekMesh = new THREE.Mesh( konekGeo, konekMaterial );
        // mauerlatMesh.rotateY(Math.PI / 2);
        konekMesh.position.set( 0, h_house + mauerlat_width + h_stand + konek_width / 2, 0 );
        scene.add( konekMesh );


        // RAFTERS -----------------------------------------------------------------------------------

        // var N = 10;
        
        var h = h_stand + mauerlat_width + konek_width;//300 / N; // hegth of main roof
        var w_rafter = 20 / N; // shirina doski (dimension 1) == rafter_width
        var rafter_thickness = 5 / N; // tolshina doski (dimension 2) == w_thickness
        var w_sves = 50 / N; 
        
        

        var x1 = W/2 - (w_wall - mauerlat_thickness) - konek_thickness / 2;
        var y1 = h - mauerlat_width;

        var x2 = W/2 + w_sves; //x
        var y2 = (y1 / x1) * x2;

        var l2 = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));// watch the eskiz
        var w2 = (l2 * w_rafter) / x2;

        var y3 = (y1 / x1) * konek_thickness;
        var y4 = y2 - y3 - h;

        var zapil = w2 / 3;
        // alert('w2 = ' + w2);
        // alert('zapil = ' + zapil);
        
        // alert('w2 = ' + w2);
        var rafterShape = new THREE.Shape();
        rafterShape.moveTo(0, 0);
        rafterShape.lineTo(0, w2);
        rafterShape.lineTo(x2, y2 + w2);
        rafterShape.lineTo(x2, y2);
        rafterShape.lineTo(0, 0);

        var extrudeSettings = {
            steps: 1,
            depth: rafter_thickness,
            bevelEnabled: false,
            bevelThickness: 1,
            bevelSize: 1,
            bevelSegments: 1
        }
        var rafterGeometry = new THREE.ExtrudeBufferGeometry(rafterShape, extrudeSettings);

        // const subjectMaterial = new THREE.MeshStandardMaterial({ color: "#1100ff", opacity: 1, transparent: true, side: THREE.DoubleSide, alphaTest: 0.5 });
        // var boxMaterial = new THREE.MeshBasicMaterial({color: 0x1f3a3d, wireframe: false, side: THREE.DoubleSide});
        var rafterMaterial = new THREE.MeshStandardMaterial({color: 0xff8c00, wireframe: false, opacity: 1, side: THREE.DoubleSide});
        var mesh = new THREE.Mesh(rafterGeometry, rafterMaterial);
        mesh.position.set( La / 2 + w_sves, h_house - y4 - zapil, x2);
        mesh.rotateY(Math.PI / 2);
        scene.add(mesh);

        var mesh = new THREE.Mesh(rafterGeometry, rafterMaterial);
        mesh.position.set( - (La / 2 + w_sves) - rafter_thickness, h_house - y4 - zapil, x2);
        mesh.rotateY(Math.PI / 2);
        scene.add(mesh);

        var mesh = new THREE.Mesh(rafterGeometry, rafterMaterial);
        mesh.position.set( La / 2 + w_sves + rafter_thickness, h_house - y4 - zapil, - x2);
        mesh.rotateY(- Math.PI / 2);
        scene.add(mesh);

        var mesh = new THREE.Mesh(rafterGeometry, rafterMaterial);
        mesh.position.set( - (La / 2 + w_sves), h_house - y4 - zapil, - x2);
        mesh.rotateY(- Math.PI / 2);
        scene.add(mesh);

        // USUAL RAFTERS

        var step_rafter = 60 / N; // step of stands < 2m (200 sm)

        var l =  (L / 2 - w_wall - ceiling_delta - ceiling_thickness - rafter_thickness) - (La / 2 + w_sves + rafter_thickness);
        var step = step_rafter + rafter_thickness;
        var n = Math.floor( l / step ); //чтобы отбросить дробную часть
        var b = l % step;

        for(let i = 1; i <= n; i++)
        {
            var mesh = new THREE.Mesh(rafterGeometry, rafterMaterial);
            mesh.position.set( La / 2 + w_sves + rafter_thickness + step*i, h_house - y4 - zapil, x2);
            mesh.rotateY(Math.PI / 2);
            scene.add(mesh);

            var mesh = new THREE.Mesh(rafterGeometry, rafterMaterial);
            mesh.position.set( - (La / 2 + w_sves + rafter_thickness + step*i + rafter_thickness), h_house - y4 - zapil, x2);
            mesh.rotateY(Math.PI / 2);
            scene.add(mesh);

            var mesh = new THREE.Mesh(rafterGeometry, rafterMaterial);
            mesh.position.set( La / 2 + w_sves + rafter_thickness + step*i + rafter_thickness, h_house - y4 - zapil, - x2);
            mesh.rotateY(- Math.PI / 2);
            scene.add(mesh);

            var mesh = new THREE.Mesh(rafterGeometry, rafterMaterial);
            mesh.position.set( - (La / 2 + w_sves + rafter_thickness + step*i), h_house - y4 - zapil, - x2);
            mesh.rotateY(- Math.PI / 2);
            scene.add(mesh);
        }


        // END RAFTERS
        var mesh = new THREE.Mesh(rafterGeometry, rafterMaterial);
        // L / 2 - ceiling_thickness / 2 - w_wall - ceiling_delta
        mesh.position.set( L / 2 - w_wall - ceiling_delta - ceiling_thickness - rafter_thickness, h_house - y4 - zapil, x2);
        mesh.rotateY(Math.PI / 2);
        scene.add(mesh);

        var mesh = new THREE.Mesh(rafterGeometry, rafterMaterial);
        // L / 2 - ceiling_thickness / 2 - w_wall - ceiling_delta
        mesh.position.set( L / 2 - w_wall - ceiling_delta - ceiling_thickness, h_house - y4 - zapil, - x2);
        mesh.rotateY( - Math.PI / 2);
        scene.add(mesh);

        var mesh = new THREE.Mesh(rafterGeometry, rafterMaterial);
        // L / 2 - ceiling_thickness / 2 - w_wall - ceiling_delta
        mesh.position.set( - (L / 2 - w_wall - ceiling_delta - ceiling_thickness), h_house - y4 - zapil, x2);
        mesh.rotateY(Math.PI / 2);
        scene.add(mesh);

        var mesh = new THREE.Mesh(rafterGeometry, rafterMaterial);
        // L / 2 - ceiling_thickness / 2 - w_wall - ceiling_delta
        mesh.position.set( - (L / 2 - w_wall - ceiling_delta - ceiling_thickness - rafter_thickness), h_house - y4 - zapil, - x2);
        mesh.rotateY( - Math.PI / 2);
        scene.add(mesh);



        // ANNEX RAFTERS

        var x1_a = La/2 - (w_wall - mauerlat_thickness) - konek_thickness / 2;
        var y1_a = (y1 / x1) * x1_a;

        var x2_a = La/2 + w_sves;
        var y2_a = (y1 / x1) * x2_a;

        var l2_a = Math.sqrt(Math.pow(x2_a, 2) + Math.pow(y2_a, 2));// watch the eskiz
        var w2_a = w2;

        var h_a = y1_a + mauerlat_width;
        var h_stand_a = h_a - (mauerlat_width + konek_width);

        var y3_a = y3;
        // var y4_a = y2_a - y3_a - h_a;
        // alert(y4_a);
        var y4_a = y4;
        // alert(y4_a);

        var shape_a = new THREE.Shape();
        shape_a.moveTo(0, 0);
        shape_a.lineTo(0, w2_a);
        shape_a.lineTo(x2_a, y2_a + w2_a);
        shape_a.lineTo(x2_a, y2_a);
        shape_a.lineTo(0, 0);

        var extrudeSettings = {
            steps: 1,
            depth: rafter_thickness,
            bevelEnabled: false,
            bevelThickness: 1,
            bevelSize: 1,
            bevelSegments: 1
        }
        var geometry = new THREE.ExtrudeBufferGeometry(shape_a, extrudeSettings);

        // const subjectMaterial = new THREE.MeshStandardMaterial({ color: "#1100ff", opacity: 1, transparent: true, side: THREE.DoubleSide, alphaTest: 0.5 });
        // var boxMaterial = new THREE.MeshBasicMaterial({color: 0x1f3a3d, wireframe: false, side: THREE.DoubleSide});
        var boxMaterial = new THREE.MeshStandardMaterial({color: 0x1f3a3d, wireframe: false, opacity: 1, side: THREE.DoubleSide});
        var mesh = new THREE.Mesh(geometry, boxMaterial);
        mesh.position.set( x2_a, h_house - y4_a - zapil, rafter_thickness + x2);
        mesh.rotateY(Math.PI);
        scene.add(mesh);

        var mesh = new THREE.Mesh(geometry, boxMaterial);
        mesh.position.set( -x2_a, h_house - y4_a - zapil, x2);
        // mesh.rotateY(Math.PI);
        scene.add(mesh);


        var mesh = new THREE.Mesh(geometry, boxMaterial);
        mesh.position.set( x2_a, h_house - y4_a - zapil, W/2 + Wa - w_wall - ceiling_delta - ceiling_thickness);
        mesh.rotateY(Math.PI);
        scene.add(mesh);

        var mesh = new THREE.Mesh(geometry, boxMaterial);
        mesh.position.set( -x2_a, h_house - y4_a - zapil, W/2 + Wa - w_wall - ceiling_delta - ceiling_thickness - rafter_thickness);
        // mesh.rotateY(Math.PI);
        scene.add(mesh);

        // USUAL ANNEX RAFTERS

        var step_rafter_a = 60 / N; // step of 

        var l = (W/2 + Wa - w_wall - ceiling_delta - ceiling_thickness - rafter_thickness) - (x2 + rafter_thickness);
        var step = step_rafter_a + rafter_thickness;
        var n = Math.floor( l / step ); //чтобы отбросить дробную часть
        var b = l % step;

        for(let i = 1; i <= n; i++)
        {
            var mesh = new THREE.Mesh(geometry, boxMaterial);
            mesh.position.set( x2_a, h_house - y4_a - zapil, x2 + rafter_thickness + step*i);
            mesh.rotateY(Math.PI);
            scene.add(mesh);

            var mesh = new THREE.Mesh(geometry, boxMaterial);
            mesh.position.set( -x2_a, h_house - y4_a - zapil, x2 + step*i);
            // mesh.rotateY(Math.PI);
            scene.add(mesh);
        }

        // ANNEX stands
        var standGeo = new THREE.BoxBufferGeometry( h_stand_a, stand_width, stand_thickness );
        // var mauerlatMaterial = new THREE.MeshBasicMaterial( { color: 0x884535, opacity: 0.8, transparent: true } );
        var standMaterial = new THREE.MeshStandardMaterial({color: 0xdfcc65, /*wireframe: false,*/ opacity: 1, side: THREE.DoubleSide});
        var standMesh = new THREE.Mesh( standGeo, standMaterial );
        standMesh.rotateZ(Math.PI / 2);
        standMesh.rotateX(Math.PI / 2);
        standMesh.position.set( 0, h_house + mauerlat_width + h_stand_a / 2, W/2 - w_wall + mauerlat_thickness - stand_width / 2 );
        scene.add( standMesh );

        // ANNEX konek
        var l_konek_a = W/2 + Wa - w_wall + konek_addition - stand_thickness / 2;
        var konekGeo = new THREE.BoxBufferGeometry( l_konek_a, konek_width, konek_thickness );
        // var mauerlatMaterial = new THREE.MeshBasicMaterial( { color: 0x884535, opacity: 0.8, transparent: true } );
        var konekMaterial = new THREE.MeshStandardMaterial({color: 0xdfcc65, /*wireframe: false,*/ opacity: 1, side: THREE.DoubleSide});
        var konekMesh = new THREE.Mesh( konekGeo, konekMaterial );
        konekMesh.rotateY(Math.PI / 2);
        konekMesh.position.set( 0, h_house + mauerlat_width + h_stand_a + konek_width / 2, W/2 + Wa - w_wall + konek_addition - l_konek_a / 2  );
        scene.add( konekMesh );


        // CENTRAL RAFTER

        var y_central = y1 + y3 - h_stand_a - konek_width + w2 - zapil;
        var x_central = (x1 / y1) * y_central;

        var w3 = (x1 / y1) * w2;

        var shape = new THREE.Shape();
        shape.moveTo(0, 0);
        shape.lineTo(w3, 0);
        shape.lineTo(x_central, y_central - w2);
        shape.lineTo(x_central, y_central);
        shape.lineTo(0, 0);

        var extrudeSettings = {
            steps: 1,
            depth: rafter_thickness,
            bevelEnabled: false,
            bevelThickness: 1,
            bevelSize: 1,
            bevelSegments: 1
        }
        var geometry = new THREE.ExtrudeBufferGeometry(shape, extrudeSettings);

        // const subjectMaterial = new THREE.MeshStandardMaterial({ color: "#1100ff", opacity: 1, transparent: true, side: THREE.DoubleSide, alphaTest: 0.5 });
        // var boxMaterial = new THREE.MeshBasicMaterial({color: 0x1f3a3d, wireframe: false, side: THREE.DoubleSide});
        var boxMaterial = new THREE.MeshStandardMaterial({color: 0x1f3a3d, wireframe: false, opacity: 1, side: THREE.DoubleSide});
        var mesh = new THREE.Mesh(geometry, boxMaterial);
        mesh.position.set( - rafter_thickness / 2, h_house + mauerlat_width + h_stand_a + konek_width, x_central);
        mesh.rotateY(Math.PI / 2);
        scene.add(mesh);


        mesh = new THREE.Mesh(rafterGeometry, rafterMaterial);
        mesh.position.set( rafter_thickness / 2, h_house - y4 - zapil, - x2);
        mesh.rotateY(- Math.PI / 2);
        scene.add(mesh);

        // DIAGONAL RAFTER (ENDOVA)

        // var y_diag = konek_width + h_stand_a + mauerlat_width + y4;// + w2;
        var y_diag = y2 + w2 - y_central;
        var k1 = x2_a - konek_thickness / 2;
        var x_diag =  Math.sqrt(Math.pow(k1, 2) + Math.pow(x2 - x_central, 2));

        var alpha = Math.atan((x2 - x_central) / (k1));

        var shape = new THREE.Shape();
        shape.moveTo(0, 0);
        shape.lineTo(0, w2);
        shape.lineTo(x_diag, y_diag);
        shape.lineTo(x_diag, y_diag - w2);
        shape.lineTo(0, 0);

        var extrudeSettings = {
            steps: 1,
            depth: rafter_thickness,
            bevelEnabled: false,
            bevelThickness: 1,
            bevelSize: 1,
            bevelSegments: 1
        }
        var geometry = new THREE.ExtrudeBufferGeometry(shape, extrudeSettings);

        // alert(h_house + mauerlat_width + h_stand_a + konek_width);
        // alert(h_house - y4 - zapil + y_diag)
        // alert (y2 + w2 - (y_central))
        // alert (w2)


        // const subjectMaterial = new THREE.MeshStandardMaterial({ color: "#1100ff", opacity: 1, transparent: true, side: THREE.DoubleSide, alphaTest: 0.5 });
        // var boxMaterial = new THREE.MeshBasicMaterial({color: 0x1f3a3d, wireframe: false, side: THREE.DoubleSide});
        var boxMaterial = new THREE.MeshStandardMaterial({color: 0x1f3a3d, wireframe: false, opacity: 1, side: THREE.DoubleSide});
        var mesh = new THREE.Mesh(geometry, boxMaterial);
        mesh.position.set( x2_a, h_house - y4 - zapil, x2);
        mesh.rotateY(Math.PI - alpha);// / 2 + Math.PI / 4);
        scene.add(mesh);

        var mesh = new THREE.Mesh(geometry, boxMaterial);
        mesh.position.set( -x2_a - rafter_thickness/2, h_house - y4 - zapil, x2 - rafter_thickness/2);
        mesh.rotateY(alpha);// / 2 + Math.PI / 4);
        scene.add(mesh);

        // NAROZHNIKI (short rafters)


        var step_nar = 60 / N; // fix this

        var l = La / 2 + w_sves - rafter_thickness / 2;
        var step = step_nar + rafter_thickness;
        var n = Math.floor( l / step ); //чтобы отбросить дробную часть
        var b = l % step;

        for(let i = 1; i <= n; i++) // n+1
        {
            var x2_i = x_central + ((step*i*(x2 - x_central)) / l) - rafter_thickness*2;
            var y2_i = (y1 / x1) * x2_i;

            var shape = new THREE.Shape();
            shape.moveTo(0, 0);
            shape.lineTo(0, w2);
            shape.lineTo(x2_i, y2_i + w2);
            shape.lineTo(x2_i, y2_i);
            shape.lineTo(0, 0);

            var extrudeSettings = {
                steps: 1,
                depth: rafter_thickness,
                bevelEnabled: false,
                bevelThickness: 1,
                bevelSize: 1,
                bevelSegments: 1
            }
            var geometry = new THREE.ExtrudeBufferGeometry(shape, extrudeSettings);

            // const subjectMaterial = new THREE.MeshStandardMaterial({ color: "#1100ff", opacity: 1, transparent: true, side: THREE.DoubleSide, alphaTest: 0.5 });
            // var boxMaterial = new THREE.MeshBasicMaterial({color: 0x1f3a3d, wireframe: false, side: THREE.DoubleSide});
            var boxMaterial = new THREE.MeshStandardMaterial({color: 0x1f3a3d, wireframe: false, opacity: 1, side: THREE.DoubleSide});
            var mesh = new THREE.Mesh(geometry, boxMaterial);
            mesh.position.set( -rafter_thickness / 2 + step*i, h_house - y4 - zapil + y2 - y2_i, x2_i);
            mesh.rotateY(Math.PI / 2);
            scene.add(mesh);

            var mesh = new THREE.Mesh(geometry, boxMaterial);
            mesh.position.set( - (-rafter_thickness / 2 + step*i), h_house - y4 - zapil + y2 - y2_i, x2_i);
            mesh.rotateY(Math.PI / 2);
            scene.add(mesh);

            // rafters on the other side of NAROZHNIKI
            var rafterGeometry = new THREE.ExtrudeBufferGeometry(rafterShape, extrudeSettings);

            var rafterMaterial = new THREE.MeshStandardMaterial({color: 0x1f3a3d, wireframe: false, opacity: 1, side: THREE.DoubleSide});
            var mesh = new THREE.Mesh(rafterGeometry, rafterMaterial);
            mesh.position.set( rafter_thickness / 2 + step*i, h_house - y4 - zapil, -x2);
            mesh.rotateY(-Math.PI / 2);
            scene.add(mesh);

            var mesh = new THREE.Mesh(rafterGeometry, rafterMaterial);
            mesh.position.set( rafter_thickness / 2 - step*i + rafter_thickness, h_house - y4 - zapil, -x2);
            mesh.rotateY(-Math.PI / 2);
            scene.add(mesh);


            // ANNEX narozhiki

            var x2_i_a = (step /*+ rafter_thickness / 2*/)*i - rafter_thickness*0.5 ;
            // var x2_i_a = x2_i * (x2_a / x2);
            // var y2_i_a = (y1 / x1) * x2_i_a;
            var y2_i_a = (h_house + mauerlat_width + h_stand_a + konek_width - zapil) - (h_house - y4 - zapil + y2 - y2_i) + zapil;
            // var y2_i_a = (mauerlat_width + h_stand_a + konek_width) - (y2 - y4 - y2_i);

            var shape = new THREE.Shape();l
            shape.moveTo(0, 0);
            shape.lineTo(0, w2);
            shape.lineTo(x2_i_a, y2_i_a + w2);
            shape.lineTo(x2_i_a, y2_i_a);
            shape.lineTo(0, 0);

            var extrudeSettings = {
                steps: 1,
                depth: rafter_thickness,
                bevelEnabled: false,
                bevelThickness: 1,
                bevelSize: 1,
                bevelSegments: 1
            }
            var geometry = new THREE.ExtrudeBufferGeometry(shape, extrudeSettings);

            // const subjectMaterial = new THREE.MeshStandardMaterial({ color: "#1100ff", opacity: 1, transparent: true, side: THREE.DoubleSide, alphaTest: 0.5 });
            // var boxMaterial = new THREE.MeshBasicMaterial({color: 0x1f3a3d, wireframe: false, side: THREE.DoubleSide});
            var boxMaterial = new THREE.MeshStandardMaterial({color: 0x1f3a3d, wireframe: false, opacity: 1, side: THREE.DoubleSide});
            var mesh = new THREE.Mesh(geometry, boxMaterial);
            mesh.position.set( x2_i_a, h_house - y4 - zapil + y2 - y2_i, x2_i + rafter_thickness);
            mesh.rotateY(Math.PI);
            scene.add(mesh);

            // alternative NAROZHNIKI


            var x2_i_a = (step)*i - rafter_thickness*1.5 ;
            // var x2_i_a = x2_i * (x2_a / x2);
            // var y2_i_a = (y1 / x1) * x2_i_a;
            var y2_i_a = (h_house + mauerlat_width + h_stand_a + konek_width - zapil) - (h_house - y4 - zapil + y2 - y2_i) + zapil;
            // var y2_i_a = (mauerlat_width + h_stand_a + konek_width) - (y2 - y4 - y2_i);

            var shape = new THREE.Shape();l
            shape.moveTo(0, 0);
            shape.lineTo(0, w2);
            shape.lineTo(x2_i_a, y2_i_a + w2);
            shape.lineTo(x2_i_a, y2_i_a);
            shape.lineTo(0, 0);

            var extrudeSettings = {
                steps: 1,
                depth: rafter_thickness,
                bevelEnabled: false,
                bevelThickness: 1,
                bevelSize: 1,
                bevelSegments: 1
            }
            var geometry = new THREE.ExtrudeBufferGeometry(shape, extrudeSettings);

            var mesh = new THREE.Mesh(geometry, boxMaterial);
            mesh.position.set( -x2_i_a, h_house - y4 - zapil + y2 - y2_i, x2_i);
            // mesh.rotateY(-Math.PI);
            scene.add(mesh);
        }

        // alert(h_house)
        // alert(mauerlat_width)
        // alert(h_stand_a)
        // alert(konek_width)
        // alert(h_house + mauerlat_width + h_stand_a + konek_width);
        


        // var mesh = new THREE.Mesh(geometry, boxMaterial);
        // // L / 2 - ceiling_thickness / 2 - w_wall - ceiling_delta
        // mesh.position.set( L / 2 - w_wall - ceiling_delta - ceiling_thickness - rafter_thickness, h_house - y4 - zapil, x2);
        // mesh.rotateY(Math.PI / 2);
        // scene.add(mesh);

        /* TOP RAFTERS (konek)*/
        // var yOffset = 0.5;
        // var y = 20 - yOffset;
        // sceneSubjects.push(new RafterTop(scene, y))

        // var y2 = 10 + h;
        // sceneSubjects.push(new RafterTop(scene, y2))

        scene.add(sceneSubjects);
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
        
        screenDimensions.width = width * 0.75;
        screenDimensions.height = height * 0.75;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        
        renderer.setSize(screenDimensions.width, screenDimensions.height);
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