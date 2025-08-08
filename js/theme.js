const favicons = {
  sunset: "img/icons/favicon-theme-sunset.ico",
  night: "img/icons/favicon-theme-night.ico",
};

function updateFavicon(theme) {
  const faviconEl = document.getElementById("favicon");
  if (favicons[theme]) {
    faviconEl.setAttribute("href", favicons[theme]);
  }
}

function cycleTheme() {
  const body = document.body;
  let newTheme;

  body.classList.add("fade");

  setTimeout(() => {
    if (body.classList.contains("sunset-theme")) {
      body.classList.replace("sunset-theme", "night-theme");
      newTheme = "night";
    } else {
      body.classList.remove("night-theme");
      body.classList.add("sunset-theme");
      newTheme = "sunset";
    }

    updateFavicon(newTheme);
    localStorage.setItem("theme", newTheme);

    body.classList.remove("fade");
  }, 600);
}

function applySavedTheme() {
  const savedTheme = localStorage.getItem("theme") || "sunset";
  document.body.classList.add(`${savedTheme}-theme`);
  updateFavicon(savedTheme);
}

document.addEventListener("DOMContentLoaded", () => {
  applySavedTheme();

  document.body.classList.remove("preload");
  document.body.classList.add("loaded");

  document.querySelector(".theme-toggle").addEventListener("click", cycleTheme);
});
