//alert("El script se ejecutó correctamente.");
/*======== swiper slider =======*/
var swiper = new Swiper(".bg-slider-thumbs", {
  loop: true,
  spaceBetween: 0,
  slidesPerView: 0,
  //freeMode: true,
  //watchSlidesProgress: true,
});
var swiper2 = new Swiper(".bg-slider", {
  loop: true,
  spaceBetween: 0,
  /*navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },*/
  thumbs: {
    swiper: swiper,
  },
});

//navigation bar effects on scroll
window.addEventListener("scroll", function(){
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY>0);
});

//responsive navigation menu togle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () =>{
  navigation.classList.toggle("active");
});

closeBtn.addEventListener("click", () =>{
  navigation.classList.remove("active");
});