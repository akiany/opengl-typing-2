
var STEP;

function canvas_setup(){
    //Create a container object called the `stage`
    stage = new PIXI.Container();

    // create a renderer instance.
    renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);
    renderer.backgroundColor = 0xEEEEEE;
    renderer.view.style.position = "absolute"

    // add the renderer view element to the DOM
    document.body.appendChild(renderer.view);

    requestAnimationFrame( animate );
};

function animate() {

    requestAnimationFrame( animate );

    // PE.step();
    if(STEP)
        STEP();

    // render the stage   
    renderer.render(stage);
}


