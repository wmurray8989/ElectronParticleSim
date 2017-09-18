var canvas = document.getElementById("drawCanvas");
var ctx = canvas.getContext("2d");
var raf;

//Define array of particles
var particles = [];

function mainRender(){

  //Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //move each particle then draw it to the canvas
  for (let i=0; i<particles.length; i++){
    particles[i].update();

    //check for particle collisions
    for (let j=0; j<particles.length; j++){
      if (i!=j){
        if(particles[i].isCollision(particles[j])){
          if (particles[i].type=="Random" && particles[j].type=="Random"){
            collisionX = (particles[i].x + particles[j].x) / 2;
            collisionY = (particles[i].y + particles[j].y) / 2;
            particles[i] = new ParticleLinear(collisionX,collisionY);
            particles[j] = new ParticleLinear(collisionX,collisionY);
          }
        }
      }
    }
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
      case "Clear":
          particles = [];
          break;
  }
})
