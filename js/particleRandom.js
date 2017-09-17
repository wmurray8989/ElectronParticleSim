class ParticleRandom extends Particle{
  constructor(x,y){
    super(x,y,5,"#ff0000");
    this.type="Random";
  }

  //Move the particle randomly
  move(){
    this.x+=10*Math.random()-5;
    this.y+=10*Math.random()-5;
  }
}
