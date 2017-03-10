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
  //loadSound
  s = loadSound("bell.wav");
}

function mousePressed(){
  //When mouse is pressed add a new puk at this x-location if no puk is there or the puk is in the Bucket
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
  engine = Engine.create({enableSleeping:true});
  world = engine.world;
  createCanvas(600,800);
  colorMode(RGB);
  rectMode(CENTER);
  //every 60px ad a plinko
  for(var i=120;i<height-150;i+=60){
    if(i%120 == 0){
      for(var x=0;x<width;x+=60){
        plinkos.push(new Plinko(x,i));
      }
    }else{
      for(var x=-30;x<width;x+=60){
        plinkos.push(new Plinko(x,i));
      }
    }
  }
  //every 60px add a bucket
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
  //draws the line for the y-start location of the puk
  line(0,50,width,50);
  //makes a new step in the physic engine
  Engine.update(engine);
  //draws every plinko
  plinkos.forEach(function(e){
    e.show();
  })
  //draws the puk if it exists
  if(puk){
    puk.show();
  }
  //draws the buckets
  buckets.forEach(function(e){
    e.show();
  })
}
