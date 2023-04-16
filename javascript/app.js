let $ = document;

const navHamburger = $.querySelector(".nav-hamburger");
const navList = $.querySelector(".nav-list");
const navBg = $.querySelector(".nav-bg");
const slide = $.querySelector(".home-slide");
const nextBtn = $.querySelector(".next-btn");
const prevBtn = $.querySelector(".prev-btn");

const bgImagesUrl = [
  "../images/header-1.png",
  "../images/header-2.png",
  "../images/header-3.png",
];

let slideNumber = 1;
let isOpenMenu = false;

function hamburgerMenuHandler() {
  isOpenMenu = !isOpenMenu;

  if (isOpenMenu) {
    navList.style.transform = "translateX(0)";
    navBg.style.width = "100%";
    navHamburger.classList.add("transform");
  } else {
    navList.style.transform = "translateX(100%)";
    navBg.style.width = "0";
    navHamburger.classList.remove("transform");
  }
}

// change the home section bg image
function nextHomeBackgroundHandler() {
  slideNumber++;

  if (slideNumber > bgImagesUrl.length) {
    slideNumber = 1;
  }

  slide.style.background = `url(${bgImagesUrl[slideNumber - 1]})`;
}

function prevHomeBackgroundHandler() {
  slideNumber--;

  if (slideNumber === 0) {
    slideNumber = bgImagesUrl.length;
  }

  slide.style.background = `url(${bgImagesUrl[slideNumber - 1]})`;
}

navHamburger.addEventListener("click", hamburgerMenuHandler);
nextBtn.addEventListener("click", nextHomeBackgroundHandler);
prevBtn.addEventListener("click", prevHomeBackgroundHandler);
