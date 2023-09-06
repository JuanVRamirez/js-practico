const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail")


menuEmail.addEventListener("click", toggleDesktopMenu)
menuHamIcon.addEventListener("click", toggleMobileMenu)
menuCarritoIcon.addEventListener("click", toggleCarritoAside)

function toggleDesktopMenu(){
    const isAsideOpen = !aside.classList.contains("inactive")

    if (isAsideOpen){
        aside.classList.add("inactive")
    }
    desktopMenu.classList.toggle("inactive")
}
function toggleMobileMenu(){
    const isAsideOpen = !aside.classList.contains("inactive")

    if (isAsideOpen){
        aside.classList.add("inactive")
    }
    mobileMenu.classList.toggle("inactive")
}
function toggleCarritoAside(){
    const isMobileMenuOpen = !mobileMenu.classList.contains("inactive")

    if (isMobileMenuOpen){
        mobileMenu.classList.add("inactive")
    }
    aside.classList.toggle("inactive")
}

const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: "TV",
    price: 900,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: "Laptop",
    price: 700,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})