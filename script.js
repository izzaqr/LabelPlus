// Слайдер для блока label
const labelSwiper = new Swiper(".label__swiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  navigation: {
    prevEl: ".button-prev",
    nextEl: ".button-next",
  },
  pagination: {
    el: ".label__swiper-pagination",
  },
  breakpoints: {
    390: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    600: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1064: {
      slidesPerView: 3,
      spaceBetween: 90,
    },
  },
});

// Слайдер для блока cards
const cardsSwiper = new Swiper(".cards__swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    prevEl: ".button-prev",
    nextEl: ".button-next",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    1024: {
      slidesPerView: 1,
      spaceBetween: 42,
    },
  },
});

// Слайдер для блока demo
const demoSwiper = new Swiper(".demo__swiper", {
  slidesPerView: 1,
  spaceBetween: 60,
  centeredSlides: true,
  navigation: {
    prevEl: ".button-prev",
    nextEl: ".button-next",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    650: {
      slidesPerView: 1.7,
      spaceBetween: 70,
    },
    1064: {
      slidesPerView: 1.8,
      spaceBetween: 90,
    },
  },
});

const burgerMenu = document.querySelector(".burger-menu");
const nav = document.querySelector(".header__nav");
const body = document.body;

burgerMenu.addEventListener("click", () => {
  nav.classList.toggle("active");

  if (nav.classList.contains("active")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "";
  }
});
