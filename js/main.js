import { translations, setLanguage } from "./i18n.js";
import "./theme.js";
import "./burger.js";
import "./card.js";
import "./contacts.js";
import "./to-top.js";

const savedLang = localStorage.getItem("lang") || "en";
setLanguage(savedLang);

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => {
    const selectedLang = button.getAttribute("data-lang");
    setLanguage(selectedLang);
    localStorage.setItem("lang", selectedLang);

    document.dispatchEvent(
      new CustomEvent("lang:change", { detail: { lang: selectedLang } })
    );
  });
});
