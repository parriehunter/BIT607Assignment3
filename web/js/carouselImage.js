/*https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_slideshow_rr
carousel for imageslideshow*/
var myIndexImage = 0;
carouselImage();

function carouselImage() {
  var i;
  var x = document.getElementsByClassName("mainImages");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndexImage++;
  if (myIndexImage > x.length) {myIndexImage = 1}    
  x[myIndexImage-1].style.display = "block";  
  setTimeout(carouselImage, 10000); // Change image every 10 seconds
}