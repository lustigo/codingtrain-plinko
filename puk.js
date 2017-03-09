class Puk extends Circle{
  constructor(x,y){
    super(x,y,20);
    super.setColor(random(255),random(255),random(255));
    super.createBody({label:"Puk",restitution:0.9});
    super.addToWorld();
    this.running = true;
  }
}
