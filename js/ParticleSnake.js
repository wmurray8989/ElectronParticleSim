class ParticleSnake extends Particle{
  constructor(x,y){
    super(x,y,5,"#00FFFF");
    this.type="Snake";

    this.xVel=6*Math.random()-3;
    this.yVel=6*Math.random()-3;

  }

  //Particle moves in a loop
  move(){
    this.xVel+=Math.random()-0.5;
    this.yVel+=Math.random()-0.5;

    //bount x velocity
    if(this.xVel>3){
      this.xVel=3;
    }else if(this.xVel<-3){
      this.xVel=-3;
    }

    //bound y velocity
    if(this.yVel>3){
      this.yVel=3;
    }else if(this.yVel<-3){
      this.yVel=-3;
    }

    //apply velocity to position
    this.x+=this.xVel;
    this.y+=this.yVel;
  }

}
