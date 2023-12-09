const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 0);
});

const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
console.log(menu, navbar);

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
