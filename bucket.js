class Bucket{
  constructor(x,y,h,innerLength,w){
    this.x = x; //mid-x
    this.y = y; //mid-y
    this.h = h; //height of the bucket
    this.il =innerLength; //space between left and right side
    this.w = w; //width of the rectangles
    this.createBodies();
    this.addWorld();
  }
}
Bucket.prototype.createBodies = function(){
  this.b = []; //all bodies of the bucket
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
  fill(255,255,255);
  noStroke();
  //draws left side
  rect(this.b[0].position.x,this.b[0].position.y,this.w,this.h);
  //draws bottom
  rect(this.b[1].position.x,this.b[1].position.y,this.il+2*this.w,this.w);
  //draws right side
  rect(this.b[2].position.x,this.b[2].position.y,this.w,this.h);
  //draws end of canvas - line
  stroke(0);
  line(this.b[1].position.x-this.il/2-this.w,this.b[1].position.y,this.b[1].position.x+this.il/2+this.w,this.b[1].position.y);
}
