// Click để chuyển slide
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";

}

// Chuyển slide theo thời gian
let index = 0;
show();
function show() {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  index++;
  if (index > slides.length) {index = 1}    
  slides[index-1].style.display = "block";  
  
  setTimeout(show, 4000); // Change image every 2 seconds
}


function showMenu(){
  const menuIcon = document.getElementById("menu_icon");
  const overlayShow = document.querySelector('.overlay');
  const functionShow = document.querySelector('.function'); 

  overlayShow.style.display = "block";

  functionShow.style.display = "block";
}



function closeMenu(){
  const overlayShow = document.querySelector('.overlay');
  const functionShow = document.querySelector('.function'); 

  overlayShow.style.display = "none";
  functionShow.style.display = "none";
}