const burgerMenu = document.getElementById("burgerMenu");
const navList = document.getElementById("navList");
const content = document.querySelector(".content");

burgerMenu.addEventListener("click", () => {
    navList.classList.toggle("active");
    burgerMenu.classList.toggle("active");
    content.classList.toggle("active");
});

const menuToggle = document.getElementById("menuToggle");
const searchBox = document.getElementById("searchBox");

menuToggle.addEventListener("click", function () {
    document.body.classList.toggle("menu-open");
});