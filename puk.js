class Puk extends Circle{
  constructor(x,y){
    super(x,y,20); //creates circle
    super.setColor(random(255),random(255),random(255)); //sets random color
    super.createBody({label:"Puk",restitution:0.9,friction:0.2}); //labels puk, high bounciness, small friction
    super.addToWorld();
    this.running = true; //used for detection if run is finished
    this.addListener();
  }
}

//if Puk is not in a bucket it starts at a new position
Puk.prototype.reboot = function(){
  if(this.running){
    Matter.Body.setPosition(this.body,{x:random(width),y:this.y});
    Matter.Sleeping.set(this.body,false);
  }
}

//detection when puk is stuck
Puk.prototype.addListener = function(){
  Matter.Events.on(this.body,"sleepStart",this.reboot.bind(this));
}
