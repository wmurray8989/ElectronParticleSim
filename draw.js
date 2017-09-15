var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var raf;

class Particle {
  constructor(x,y,r){
    this.x=x;
    this.y=y;
    this.r=r;
  }

  //Draw the particle to the canvas
  draw(){
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.r,0,2*Math.PI);
    ctx.fill();
  }

  //Move the particle randomly
  move(){
    this.x+=10*Math.random()-5;
    this.y+=10*Math.random()-5;

    //bound the particle within the canvas
    if (this.x<0) this.x=0;
    if (this.x>500) this.x=500;
    if (this.y<0) this.y=0;
    if (this.y>500) this.y=500;
  }
}

var p = new Particle(100,100,5);

function mainRender(){

  p.draw();
  p.move();

  raf = window.requestAnimationFrame(mainRender);
}

mainRender();
