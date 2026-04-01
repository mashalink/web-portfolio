const burgerBtn = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const mainContent = document.querySelector(".main-content");
const themeToggle = document.querySelector(".theme-toggle");
const langButtons = document.querySelectorAll(".lang-toggle button");
const mobileQuery = window.matchMedia("(max-width: 768px)");

let hideTimer = null;

function setNavAccessibility(isOpen) {
  burgerBtn.setAttribute("aria-expanded", String(isOpen));
  nav.setAttribute("aria-hidden", String(!isOpen));
}

function clearHideTimer() {
  if (hideTimer) {
    window.clearTimeout(hideTimer);
    hideTimer = null;
  }
}

function openNav() {
  clearHideTimer();
  nav.hidden = false;
  burgerBtn.classList.add("active");
  mainContent?.classList.add("blur");
  setNavAccessibility(true);
  window.requestAnimationFrame(() => {
    nav.classList.add("active");
  });
}

function closeNav() {
  clearHideTimer();
  nav.classList.remove("active");
  burgerBtn.classList.remove("active");
  mainContent?.classList.remove("blur");
  setNavAccessibility(false);

  if (mobileQuery.matches) {
    hideTimer = window.setTimeout(() => {
      if (!nav.classList.contains("active") && mobileQuery.matches) {
        nav.hidden = true;
      }
    }, 350);
  } else {
    nav.hidden = false;
  }
}

function syncNavState() {
  clearHideTimer();

  if (mobileQuery.matches) {
    if (nav.classList.contains("active")) {
      nav.hidden = false;
      setNavAccessibility(true);
    } else {
      nav.hidden = true;
      setNavAccessibility(false);
      mainContent?.classList.remove("blur");
    }
    return;
  }

  nav.hidden = false;
  nav.classList.remove("active");
  burgerBtn.classList.remove("active");
  mainContent?.classList.remove("blur");
  setNavAccessibility(false);
}

burgerBtn.addEventListener("click", () => {
  if (nav.classList.contains("active")) {
    closeNav();
  } else {
    openNav();
  }
});

nav.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    closeNav();
  }
});

document.addEventListener("click", (event) => {
  const isClickInsideNav = nav.contains(event.target);
  const isClickOnBurger = burgerBtn.contains(event.target);

  if (!isClickInsideNav && !isClickOnBurger && nav.classList.contains("active")) {
    closeNav();
  }
});

window.addEventListener("pageshow", syncNavState);
window.addEventListener("resize", syncNavState);

themeToggle.addEventListener("click", () => {
  if (mobileQuery.matches && nav.classList.contains("active")) {
    closeNav();
  }
});

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (mobileQuery.matches && nav.classList.contains("active")) {
      closeNav();
    }
  });
});

syncNavState();
