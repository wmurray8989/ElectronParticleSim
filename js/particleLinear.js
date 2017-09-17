class ParticleLinear extends Particle{
  constructor(x,y){
    super(x,y,5,"#00FF00");
    this.type="Linear";

    this.xVel=6*Math.random()-3;
    this.yVel=6*Math.random()-3;

  }

  //Move the particle linearly
  move(){
    this.x+=this.xVel;
    this.y+=this.yVel;
  }
}
