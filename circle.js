class Circle{
  //ABSTRACT!
  constructor(x,y,r){
    this.r = r;
    this.x = x;
    this.y = y;
  }

}

Circle.prototype.setColor = function(r,g,b){
  //sets RGB-value
  this.colr = r;
  this.colg = g;
  this.colb = b;
}
Circle.prototype.show = function(){
  //draws circle
  noStroke();
  fill(this.colr,this.colg,this.colb);
  ellipse(this.body.position.x,this.body.position.y,this.r*2);
}
Circle.prototype.createBody = function(options){
  //creates body
    this.body = Bodies.circle(this.x,this.y,this.r,options);
}
Circle.prototype.addToWorld = function(){
  //add it to the world
    World.add(world,this.body);
}
Circle.prototype.removeFromWorld = function(){
  //removes from the world
  World.remove(world,this.body);
}
