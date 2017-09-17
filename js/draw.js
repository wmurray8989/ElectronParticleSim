var canvas = document.getElementById("drawCanvas");
var ctx = canvas.getContext("2d");
var raf;

//Define array of particles
var particles = [];

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

  var rect = canvas.getBoundingClientRect();
  var xPos = e.clientX - rect.left;
  var yPos = e.clientY - rect.top;

  particles.push(new Particle(xPos,yPos,5,randomColor()));
})
