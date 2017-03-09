class Bucket{
  constructor(x,y,h,innerLength,w){
    this.x = x;
    this.y = y;
    this.h = h;
    this.il =innerLength;
    this.w = w;
    this.createBodies();
    this.addWorld();
  }
}
Bucket.prototype.createBodies = function(){
  this.b = [];
  var options = {isStatic:true};
  //Left
  this.b.push(Bodies.rectangle(this.x-this.il/2-this.w/2,this.y-(this.h+this.w)/2,this.w,this.h,options));
  //Ground
  this.b.push(Bodies.rectangle(this.x,this.y-this.w/2,this.il+2*this.w,this.w,{isStatic:true,label:"Bucket"}));
  //Right
  this.b.push(Bodies.rectangle(this.x+this.il/2+this.w/2,this.y-(this.h+this.w)/2,this.w,this.h,options));

}
Bucket.prototype.addWorld = function(){
  World.add(world,this.b);
}
Bucket.prototype.show = function(){
  fill(0);
  noStroke();
  rect(this.b[0].position.x,this.b[0].position.y,this.w,this.h);
  rect(this.b[1].position.x,this.b[1].position.y,this.il+2*this.w,this.w);
  rect(this.b[2].position.x,this.b[2].position.y,this.w,this.h);
}
