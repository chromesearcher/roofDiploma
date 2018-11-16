import SceneManager from './SceneManager';

export default (container, L, W, La, Wa, H, h) => {

    

    const canvas = createCanvas(document, container);
    const sceneManager = new SceneManager(canvas, L, W, La, Wa, H, h);

    let canvasHalfWidth;
    let canvasHalfHeight;

    // alert('threeEntryPoint param (L) = ' + L)


    bindEventListeners();
    render();

    function createCanvas(document, container) {
        const canvas = document.createElement('canvas');     
        container.appendChild(canvas);
        return canvas;
    }

    function bindEventListeners() {
        window.onresize = resizeCanvas;
        window.onmousemove = mouseMove;
        resizeCanvas();	
    }

    function resizeCanvas() {        
        canvas.style.width = '100%';
        canvas.style.height= '100%';
        
        canvas.width  = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        canvasHalfWidth = Math.round(canvas.offsetWidth/2);
        canvasHalfHeight = Math.round(canvas.offsetHeight/2);

        sceneManager.onWindowResize()
    }

    function mouseMove({screenX, screenY}) {
        sceneManager.onMouseMove(screenX-canvasHalfWidth, screenY-canvasHalfHeight);
    }

    function render(time) {
        requestAnimationFrame(render);
        sceneManager.update();
    }
}