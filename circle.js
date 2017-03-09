class Circle{
  //ABSTRACT!
  constructor(x,y,r){
    this.r = r;
    this.x = x;
    this.y = y;
  }

}

Circle.prototype.setColor = function(r,g,b){
  this.colr = r;
  this.colg = g;
  this.colb = b;
}
Circle.prototype.show = function(){
  push();
  translate(this.body.position.x,this.body.position.y);
  noStroke();
  fill(this.colr,this.colg,this.colb);
  ellipse(0,0,this.r*2);
  pop();
}
Circle.prototype.createBody = function(options){
    this.body = Bodies.circle(this.x,this.y,this.r,options);
}
Circle.prototype.addToWorld = function(){
    World.add(world,this.body);
}
Circle.prototype.removeFromWorld = function(){
  World.remove(world,this.body);
}
