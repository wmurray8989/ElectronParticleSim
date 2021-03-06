class Particle {
  constructor(x,y,r,color){
    this.x=x;
    this.y=y;
    this.r=r;
    this.color=color;
    this.age=0;
  }

  update(){
    this.move();
    this.bound();
    this.draw();
    this.interact();
    this.age++;
  }

  move(){

  }

  bound(){
    //wrap the particle around the canvas
    if (this.x<0) this.x+=500;
    if (this.x>500) this.x-=500;
    if (this.y<0) this.y+=500;
    if (this.y>500) this.y-=500;
  }

  //Draw the particle to the canvas
  draw(){
    ctx.fillStyle=this.color;
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.r,0,2*Math.PI);
    ctx.fill();
  }

  interact(){
    //loop through all particles except self for interactions
    for (let i=0; i<particles.length; i++){
      var ownIndex = particles.indexOf(this);
      if (i != ownIndex){

        //check if particle collision has occured
        if(this.isCollision(particles[i])){
          this.collide(ownIndex,i);
        }



      }
    }
  }

  collide(ownIndex,i){
    var collisionX = (this.x + particles[i].x) / 2;
    var collisionY = (this.y + particles[i].y) / 2;

    if (this.type=="Random" && particles[i].type=="Random"){
      particles[ownIndex] = new ParticleLinear(collisionX,collisionY);
      particles[i] = new ParticleLinear(collisionX,collisionY);
      particles.push(new ParticleJumper(collisionX,collisionY))
    }

    if (this.type=="Linear" && particles[i].type=="Jumper"){
      particles[ownIndex] = new ParticleRandom(collisionX,collisionY);
      particles[i] = new ParticleRandom(collisionX,collisionY);
    }

    if (this.type=="Jumper" && particles[i].type=="Random"){
      particles[ownIndex] = new ParticleLinear(collisionX,collisionY);
      particles[i] = new ParticleLinear(collisionX,collisionY);
    }

    if (this.type=="Linear" && particles[i].type=="Linear"){
      particles.splice(i,1);
    }
  }

  isCollision(otherParticle){
    if (this.age>60){
      var distX=Math.abs(this.x-otherParticle.x);
      var distY=Math.abs(this.y-otherParticle.y);
      var distSquare=distX*distX + distY*distY;
      if (distSquare<this.r*this.r){
        return true;
      }else {
        return false;
      }
    }
  }
}
