var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var raf;

class Particle {
  constructor(x,y,r,color){
    this.x=x;
    this.y=y;
    this.r=r;
    this.color=color;
  }

  //Draw the particle to the canvas
  draw(){
    ctx.fillStyle=this.color;
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

//Create particles
var particles = [];
var NumberOfParticles = 10;
for (i=0; i<NumberOfParticles; i++){
  particles.push(new Particle(500*Math.random(),500*Math.random(),5,randomColor()));
}

function mainRender(){
  //move each particle then draw it to the canvas
  for (i=0; i<particles.length; i++){
    particles[i].move();
    particles[i].draw();
  }

  raf = window.requestAnimationFrame(mainRender);
}

mainRender();

//This function returns a random color in hex
function randomColor(){
  return '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)
}

canvas.addEventListener('click', function(e){
  particles.push(new Particle(e.clientX,e.clientY,5,randomColor()));
})
