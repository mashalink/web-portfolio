const burgerBtn = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const mainContent = document.querySelector(".main-content");

// Toggle nav menu and blur effect
burgerBtn.addEventListener("click", () => {
  const isActive = nav.classList.toggle("active");
  burgerBtn.classList.toggle("active");
  if (mainContent) {
    mainContent.classList.toggle("blur", isActive);
  }
});

// Close nav when a nav link is clicked
nav.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    nav.classList.remove("active");
    burgerBtn.classList.remove("active");
    if (mainContent) {
      mainContent.classList.remove("blur");
    }
  }
});

// Close nav when clicking outside
document.addEventListener("click", (e) => {
  const isClickInsideNav = nav.contains(e.target);
  const isClickOnBurger = burgerBtn.contains(e.target);

  if (
    !isClickInsideNav &&
    !isClickOnBurger &&
    nav.classList.contains("active")
  ) {
    nav.classList.remove("active");
    burgerBtn.classList.remove("active");
    if (mainContent) {
      mainContent.classList.remove("blur");
    }
  }
});

// Close nav on browser back/forward navigation
window.addEventListener("pageshow", () => {
  nav.classList.remove("active");
  burgerBtn.classList.remove("active");
  if (mainContent) {
    mainContent.classList.remove("blur");
  }
});

// Close nav when theme is toggled in mobile
document.querySelector(".theme-toggle").addEventListener("click", () => {
  if (window.innerWidth <= 768 && nav.classList.contains("active")) {
    nav.classList.remove("active");
    burgerBtn.classList.remove("active");
    if (mainContent) {
      mainContent.classList.remove("blur");
    }
  }
});

// Close nav when a language is selected (mobile)
document.querySelectorAll(".lang-toggle button").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (window.innerWidth <= 768 && nav.classList.contains("active")) {
      nav.classList.remove("active");
      burgerBtn.classList.remove("active");
      if (mainContent) {
        mainContent.classList.remove("blur");
      }
    }
  });
});
