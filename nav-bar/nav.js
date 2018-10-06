// open navigation tab in phone view

var nav_button = document.querySelector(".button")
var nav_tab = document.querySelector('.button_click')
var open = true
nav_button.addEventListener("click",function(){
  if(open)
  {
  	  nav_tab.style.display = "block"; 
  }
  else
  {
   	  nav_tab.style.display = "none"; 
  }
  open =!open
});