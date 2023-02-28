const menu = document.getElementById("menu");
const navList = document.getElementById("nav-list");

menu.addEventListener("click", () => {
  console.log("hi");
  if (navList.classList.contains("hide")) {
    navList.classList.remove("hide");
    navList.classList.add("show");
  } else {
    navList.classList.add("hide");
    navList.classList.remove("show");
  }
});

var swiper = new Swiper(".topSwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".clientSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: true,
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 110,
    },
  },
});

var swiper = new Swiper(".plantSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: true,
  // freeMode: true,
  // loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      // spaceBetween: 30,
    },
  },
});
