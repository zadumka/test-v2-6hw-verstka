const openBtn = document.querySelector(".burger-button");
const closeBtn = document.querySelector(".modal-close");
const backdrop = document.querySelector(".mobile-menu-backdrop");

openBtn.addEventListener("click", () => {
  backdrop.classList.add("is-open");
});

closeBtn.addEventListener("click", () => {
  backdrop.classList.remove("is-open");
});

backdrop.addEventListener("click", (event) => {
  if (event.target === backdrop) {
    backdrop.classList.remove("is-open");
  }
});

mobileMenuBackdrop.addEventListener('click', (event) => {
  if (event.target === mobileMenuBackdrop) {
    mobileMenuBackdrop.classList.remove('is-open');
  }
});