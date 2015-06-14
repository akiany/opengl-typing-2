

function game_setup(){
  emitter = new Emitter({
      type    : "chaos",
      count   : 50,
    },
    {
      type    : SimpleParticle, 
      image   : "cat.png", //cat.png
      life    :   800.0,
      spin    :   [-0.03, 0.03],
      speed   :   [1, 3],
      scale   :   [0.1,0.2],
      colors    :   [0x8cc63f, 0x00b2ef, 0xffffff],
      fade    :   0.2,
      BLEND_MODES   : PIXI.BLEND_MODES.NORMAL
    }
  );

  PE.addEmitters([emitter]);
  // stage.addChild(emitter.doc);

  // var sprite = new PIXI.Sprite.fromImage("cat.png");
  // stage.addChild(sprite);

  // TweenMax.fromTo( emitter.doc, 1, { scaleX: 0.0, scaleY: 0.0}, {  scaleX: 1.0, scaleY: 1.0, ease: Quart.easeInOut });
}

$(function(){
  canvas_setup();
  PE = new ParticleEngine(window.innerWidth, 500);

  PIXI.loader.add("cat.png").load(game_setup); 

});