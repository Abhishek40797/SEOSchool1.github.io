var menubtn = document.querySelector(".fa-bars");
var closebtn = document.querySelector(".fa-xmark");
const nav_header = document.querySelector(".header");

menubtn.addEventListener("click", () => {
  nav_header.classList.add("active");
});

closebtn.addEventListener("click", () => {
  nav_header.classList.remove("active");
});