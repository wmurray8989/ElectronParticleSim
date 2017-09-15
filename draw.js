var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var raf;

class Particle {
  constructor(x,y,r){
    this.x=x;
    this.y=y;
    this.r=r;
  }

  draw(){
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.r,0,2*Math.PI);
    ctx.fill();
  }

}

function mainRender(){

  var p = new Particle(100,100,5);
  p.draw();

  raf = window.requestAnimationFrame(mainRender);
}

mainRender();
