class Plinko extends Circle{
  constructor(x,y){
    super(x,y,10); //creates cirlce
    super.setColor(100,255,100); //sets green Color
    super.createBody({isStatic:true,label:"Plinko"}); //creates static Body and labels it
    super.addToWorld();
  }
}
