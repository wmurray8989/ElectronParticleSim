
//Define user interface buttons
var BtnRandom = document.getElementById("BtnRandom");
var BtnLinear = document.getElementById("BtnLinear");
var BtnClear = document.getElementById("BtnClear");

BtnRandom.addEventListener('click', function(e){
  document.getElementsByClassName("active")[0].classList.remove("active")
  BtnRandom.classList.add("active");
  console.log(BtnRandom.classList);
})

BtnLinear.addEventListener('click', function(e){
  document.getElementsByClassName("active")[0].classList.remove("active")

  BtnLinear.classList.add("active");
    console.log(BtnRandom.classList);
})

BtnClear.addEventListener('click', function(e){
  document.getElementsByClassName("active")[0].classList.remove("active")

  BtnClear.classList.add("active");
    console.log(BtnRandom.classList);
})
