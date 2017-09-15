var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var raf;


function draw(){

  ctx.beginPath();
  ctx.arc(100,100,50,0,2*Math.PI);
  ctx.fill();

  raf = window.requestAnimationFrame(draw);
}

draw();
