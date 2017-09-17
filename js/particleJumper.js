class ParticleJumper extends Particle{ constructor(x,y){
    super(x,y,5,"#0000ff");
  }

  //Move the particle randomly
  move(){
    if (Math.random()<0.01){
      this.x+=50*Math.random()-25;
      this.y+=50*Math.random()-25;
    }

    //wrap the particle around the canvas
    if (this.x<0) this.x=500;
    if (this.x>500) this.x=0;
    if (this.y<0) this.y=500;
    if (this.y>500) this.y=0;

  }
}
