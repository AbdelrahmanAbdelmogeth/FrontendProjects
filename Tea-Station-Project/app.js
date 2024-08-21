const navBtn = document.getElementById('nav-btn');
const navBar = document.getElementById('nav-bar');
const navClose = document.getElementById('nav-close');

navBtn.addEventListener("click", () => {
    navBar.classList.add("show_nav");
});

navClose.addEventListener("click", () => {
    navBar.classList.remove("show_nav");
});