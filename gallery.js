$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 3000);


// reviews section on button click to change the content 

function Reviews(image_url,person_name,review_statement){
	this.image_url = image_url;
	this.person_name = person_name;
	this.review_statement = review_statement;
};

var Review1 = new Reviews("img/person.jpeg","Eiusmod laboris","“Incididunt nulla cillum adipisicing aliqua aliquip et veniam elit elit fugiat id ullamco anim aliquip sint quis sed esse ad cupidatat eiusmod laborum voluptate.”"); 
var Review2 = new Reviews("img/person_1.jpeg","Lorem ipsum","“Exercitation enim anim sunt ad non est ut eu aliquip cupidatat ut labore esse irure eiusmod aliquip duis dolore culpa est ut aliqua aute aliqua eiusmod aute aliqua.”");
var Review3 = new Reviews("img/person_2.jpeg","Enim in","“Anim consequat et dolor exercitation mollit eiusmod do est occaecat proident aute esse proident occaecat aliquip adipisicing fugiat quis deserunt amet est ad dolor veniam ut non adipisicing.”"); 

var reviews=[Review1, Review2 , Review3];

function set_review(Reviews){
	 document.querySelector(".reviews_container p").textContent = Reviews.review_statement;
	 document.querySelector(".image_card img").setAttribute("src",Reviews.image_url);
	 document.querySelector(".image_card h3").textContent = Reviews.person_name;
}
var count=0;
 document.querySelectorAll("button")[1].addEventListener("click",function(){
       count = (count + 1) % reviews.length;
       set_review(reviews[count]);
 });
 document.querySelectorAll("button")[0].addEventListener("click",function(){
       count--;
       if(count==-1)
       		count=2;
       set_review(reviews[count]);
 });



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