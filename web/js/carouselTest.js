/*https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_slideshow_rr
carousel for imageslideshow*/
var myIndexTest = 0;
carouselTest();

function carouselTest() {
  var i;
  var x = document.getElementsByClassName("myTestimonials");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndexTest++;
  if (myIndexTest > x.length) {myIndexTest = 1}    
  x[myIndexTest-1].style.display = "block";  
  setTimeout(carouselTest, 12000); // Change image every 12 seconds
}