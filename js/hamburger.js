const hamburgerBtn = document.querySelector(".hamburger-btn");
const hamburgerMenu = document.querySelector(".hamburger-menu");

console.log(hamburgerBtn);
console.log(hamburgerMenu);
if (hamburgerBtn) {
  hamburgerBtn.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("navbar-toggle");
  });
}
