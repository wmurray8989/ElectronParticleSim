var NavGroupItems = document.getElementsByClassName("nav-group-item");

for (var i=0; i<NavGroupItems.length; i++){
  NavGroupItems[i].addEventListener('click', function(e){
    document.getElementsByClassName("active")[0].classList.remove("active")
    this.classList.add("active");
  })
}

function getActiveSelection(){
  for (var i=0; i<NavGroupItems.length; i++){
    if(NavGroupItems[i].classList.contains("active")){
      return NavGroupItems[i].innerText;
    }
  }
}
