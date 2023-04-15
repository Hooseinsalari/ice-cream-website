let $ = document

const navHamburger = $.querySelector(".nav-hamburger")
const navList = $.querySelector(".nav-list")
const navBg = $.querySelector(".nav-bg")


let isOpenMenu = false

function hamburgerMenuHandler() {
    isOpenMenu = !isOpenMenu

    if(isOpenMenu) {
        navList.style.transform = "translateX(0)"
        navBg.style.width = "100%"
        navHamburger.classList.add("transform")
    } else {
        navList.style.transform = "translateX(100%)"
        navBg.style.width = "0"
        navHamburger.classList.remove("transform")
    }
}

navHamburger.addEventListener("click", hamburgerMenuHandler)