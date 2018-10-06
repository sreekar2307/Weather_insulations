// scroll event for the navigation tab 
	var nav=document.querySelector(".navigation");
	var logo = document.querySelector('.navigation div:nth-of-type(4)')
	window.addEventListener('scroll',function(){
		if(window.pageYOffset!=0)
		 {
		 	nav.classList.add('navigation_scroll');
		 	logo.classList.remove('logo');
	 	 }
		else
         {
         	nav.classList.remove('navigation_scroll');
         	logo.classList.add('logo');
         }
	});


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