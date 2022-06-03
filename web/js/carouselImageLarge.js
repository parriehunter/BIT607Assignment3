/*https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_slideshow_rr
carousel for imageslideshow*/
var myIndexImageLarge = 0;
carouselImageLarge();

function carouselImageLarge() {
  var i;
  var x = document.getElementsByClassName("mainImagesLarge");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndexImageLarge++;
  if (myIndexImageLarge > x.length) {myIndexImageLarge = 1}    
  x[myIndexImageLarge-1].style.display = "block";  
  setTimeout(carouselImageLarge, 10000); // Change image every 10 seconds
}