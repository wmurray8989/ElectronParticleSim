class ParticleRandom extends Particle{
  constructor(x,y){
    super(x,y,5,"#ff0000");
    this.type="Random";
  }

  //Move the particle randomly
  move(){
    this.x+=10*Math.random()-5;
    this.y+=10*Math.random()-5;

    //wrap the particle around the canvas
    if (this.x<0) this.x=500;
    if (this.x>500) this.x=0;
    if (this.y<0) this.y=500;
    if (this.y>500) this.y=0;
  }
}
