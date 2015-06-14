
var POINTS = [];

function add_cir(x, y, r){
  var sprite = new PIXI.Sprite.fromImage("cir.png");
  sprite.scale.y = sprite.scale.x = Math.random() / 10;
  sprite.x = x;
  sprite.y = y;

  TweenMax.fromTo(sprite, .7, {x:800*Math.random(), y:800*Math.random()}, 
    {x:800*Math.random(), y:800*Math.random(), ease: Expo.easeOut});

  for(var i=0;i<10;i++)
    TweenMax.to(sprite, .7, {x:800*Math.random(), y:800*Math.random(), ease: Quad.easeOut, delay: .8*i+.8});

  return sprite;
}

function add_points(container){
  for(var i=0;i<100;i++){
    for(var j=0;j<100;j++){
      var cir = add_cir(i, j, 10);
      container.addChild(cir);
    }
  }
}

function init(){
  canvas_setup();
  container = new PIXI.ParticleContainer(200000, [false, true, false, false, false]);
  stage.addChild(container);

  add_points(container);
  // add_cir();
  

  STEP = step_function;
};

$(function(){
  PIXI.loader
  .add("cir.png")
  .load(init);

})

function step_function(){
  // container.rotation += 0.003;
}











