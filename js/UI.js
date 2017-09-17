var NavGroupItems = document.getElementsByClassName("nav-group-item");

for (var i=0; i<NavGroupItems.length; i++){
  NavGroupItems[i].addEventListener('click', function(e){
    document.getElementsByClassName("active")[0].classList.remove("active")
    this.classList.add("active");
  })
}
