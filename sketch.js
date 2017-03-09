var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
var engine;
var world;

var plinkos = [];
var buckets = [];
var puk;

var s;

function preload(){
  s = loadSound("bell.wav");
}

function mousePressed(){
  if(puk){
    if(!puk.running){
      puk.removeFromWorld();
      puk = new Puk(mouseX,50);
    }
  }else{
    puk = new Puk(mouseX,50);
  }
}

function setup(){
  engine = Engine.create();
  world = engine.world;
  createCanvas(600,800);
  colorMode(RGB);
  rectMode(CENTER);
  for(var i=120;i<height-150;i+=60){
    if(i%120 == 0){
      for(var x=0;x<width;x+=60){
        plinkos.push(new Plinko(x,i));
      }
    }else{
      for(var x=-15;x<width;x+=60){
        plinkos.push(new Plinko(x,i));
      }
    }
  }
  for(var x=-5;x<width;x+=60){
    buckets.push(new Bucket(x,height,100,40,10));
  }
  //Walls
  World.add(world,Bodies.rectangle(-50,height/2,70,height,{isStatic:true}));
  World.add(world,Bodies.rectangle(width+50,height/2,70,height,{isStatic:true}));
  //End-detection
  Matter.Events.on(engine,"collisionStart",function(event){
    event.pairs.forEach(function(e){
      if(e.bodyA.label == "Puk" && e.bodyB.label == "Bucket" || e.bodyA.label == "Bucket" && e.bodyB.label == "Puk"){
        puk.running = false;
        if(s.isPlaying()){
          s.stop();
        }
        s.play();
      }
    });
  });
}

function draw(){
  background(51);
  strokeWeight(2);
  stroke(255,0,0);
  line(0,50,width,50);
  Engine.update(engine);
  plinkos.forEach(function(e){
    e.show();
  })
  if(puk){
    puk.show();
  }
  buckets.forEach(function(e){
    e.show();
  })
}
