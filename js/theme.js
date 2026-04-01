const favicons = {
  sunset: "img/icons/favicon-theme-sunset.ico",
  night: "img/icons/favicon-theme-night.ico",
};

function updateFavicon(theme) {
  const faviconEl = document.getElementById("favicon");
  if (faviconEl && favicons[theme]) {
    faviconEl.setAttribute("href", favicons[theme]);
  }
}

function getSavedTheme() {
  try {
    return localStorage.getItem("theme") === "night" ? "night" : "sunset";
  } catch {
    return "sunset";
  }
}

function saveTheme(theme) {
  try {
    localStorage.setItem("theme", theme);
  } catch {
    // Ignore storage errors and keep the in-memory theme only.
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
    saveTheme(newTheme);

    body.classList.remove("fade");
  }, 600);
}

function applySavedTheme() {
  const savedTheme = getSavedTheme();
  document.body.classList.add(`${savedTheme}-theme`);
  updateFavicon(savedTheme);
}

document.addEventListener("DOMContentLoaded", () => {
  applySavedTheme();

  const themeToggle = document.querySelector(".theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", cycleTheme);
  }
});
