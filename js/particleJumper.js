class ParticleJumper extends Particle{ constructor(x,y){
    super(x,y,5,"#0000ff");
    this.type="Jumper";
  }

  //Move the particle randomly
  move(){
    if (Math.random()<0.01){
      this.x+=100*Math.random()-50;
      this.y+=100*Math.random()-50;
    }
  }
}
