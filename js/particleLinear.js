class ParticleLinear extends Particle{
  constructor(x,y){
    super(x,y,5,"#00FF00");

    this.xVel=6*Math.random()-3;
    this.yVel=6*Math.random()-3;

  }

  //Move the particle linearly
  move(){
    this.x+=this.xVel;
    this.y+=this.yVel;

    //wrap the particle around the canvas
    if (this.x<0) this.x=500;
    if (this.x>500) this.x=0;
    if (this.y<0) this.y=500;
    if (this.y>500) this.y=0;
  }
}
