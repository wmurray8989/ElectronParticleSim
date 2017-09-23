var canvas = document.getElementById("drawCanvas");
var ctx = canvas.getContext("2d");
var raf;

//Define array of particles
var particles = [];

function mainRender(){

  //Clear the canvas
  //ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.globalAlpha = 0.1;
  ctx.fillStyle="#000000";
  ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.globalAlpha = 1.0;


  //move each particle then draw it to the canvas
  for (let i=0; i<particles.length; i++){
    particles[i].update();
  }

  raf = window.requestAnimationFrame(mainRender);
}

mainRender();

//This function returns a random color in hex
function randomColor(){
  return '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)
}

canvas.addEventListener('click', function(e){

  var rect = canvas.getBoundingClientRect();
  var xPos = e.clientX - rect.left;
  var yPos = e.clientY - rect.top;

  switch(getActiveSelection()) {
      case "Random":
          particles.push(new ParticleRandom(xPos,yPos));
          break;
      case "Linear":
          particles.push(new ParticleLinear(xPos,yPos));
          break;
      case "Jumper":
          particles.push(new ParticleJumper(xPos,yPos));
          break;
      case "Snake":
          particles.push(new ParticleSnake(xPos,yPos));
          break;
      case "Clear":
          particles = [];
          break;
  }
})
