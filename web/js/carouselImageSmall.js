/*https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_slideshow_rr
carousel for imageslideshow*/
var myIndexImageSmall = 0;
carouselImageSmall();

function carouselImageSmall() {
  var i;
  var x = document.getElementsByClassName("mainImagesSmall");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndexImageSmall++;
  if (myIndexImageSmall > x.length) {myIndexImageSmall = 1}    
  x[myIndexImageSmall-1].style.display = "block";  
  setTimeout(carouselImageSmall, 10000); // Change image every 10 seconds
}