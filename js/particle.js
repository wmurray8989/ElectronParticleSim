class Particle {
  constructor(x,y,r,color){
    this.x=x;
    this.y=y;
    this.r=r;
    this.color=color;
  }

  update(){
    this.move();
    this.bound();
    this.draw();
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

  isCollision(otherParticle){
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
