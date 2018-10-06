// open navigation tab in phone view

var nav_button = document.querySelector(".button")
var nav_tab = document.querySelector('.button_click')
var caption = document.querySelector('.caption')
var open = true
nav_button.addEventListener("click",function(){
  if(open)
  {
  	  nav_tab.style.display = "block"; 
  	  caption.style.display = "none";
  }
  else
  {
   	  nav_tab.style.display = "none"; 
   	  caption.style.display = "block";
  }
  open =!open
});
