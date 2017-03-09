class Plinko extends Circle{
  constructor(x,y){
    super(x,y,10);
    super.setColor(100,255,100);
    super.createBody({isStatic:true,label:"Plinko"});
    super.addToWorld();
  }
}
