const hamburgerBtn = document.querySelector(".hamburger-btn");
const hamburgerMenu = document.querySelector(".hamburger-menu");

if (hamburgerBtn) {
  hamburgerBtn.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("navbar-toggle");
  });
}
