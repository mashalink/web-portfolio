import { translations } from "./i18n.js";

const getLang = () => localStorage.getItem("lang") || "en";
const t = (key) =>
  (translations[getLang()] && translations[getLang()][key]) ||
  translations.en[key] ||
  key;

const form = document.getElementById("contactForm");
if (form) {
  const nameEl = form.querySelector("#name");
  const emailEl = form.querySelector("#email");
  const msgEl = form.querySelector("#message");
  const statusEl = form.querySelector(".status");
  const sendBtn = form.querySelector(".send-btn");

  const setError = (el, msg) => {
    el.closest(".field").querySelector(".error").textContent = msg || "";
    el.setAttribute("aria-invalid", msg ? "true" : "false");
  };

  const validEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  if (sendBtn) sendBtn.setAttribute("aria-label", t("aria_send_label"));

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let ok = true;

    // Name
    if (!nameEl.value.trim() || nameEl.value.trim().length < 2) {
      setError(nameEl, t("err_name"));
      ok = false;
    } else setError(nameEl, "");

    // Email
    if (!validEmail(emailEl.value.trim())) {
      setError(emailEl, t("err_email"));
      ok = false;
    } else setError(emailEl, "");

    // Message
    if (!msgEl.value.trim() || msgEl.value.trim().length < 10) {
      setError(msgEl, t("err_message"));
      ok = false;
    } else setError(msgEl, "");

    if (!ok) {
      statusEl.textContent = "";
      return;
    }

    // mailto
    const to = "maria8link@gmail.com";
    const subject = encodeURIComponent(
      `Portfolio contact from ${nameEl.value.trim()}`
    );
    const body = encodeURIComponent(
      `Name: ${nameEl.value.trim()}\nEmail: ${emailEl.value.trim()}\n\n${msgEl.value.trim()}`
    );
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;

    statusEl.textContent = t("contact_success");
    form.reset();
    [nameEl, emailEl, msgEl].forEach((el) => setError(el, ""));
  });

  [nameEl, emailEl, msgEl].forEach((el) => {
    el.addEventListener("input", () => setError(el, ""));
  });

  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (sendBtn) sendBtn.setAttribute("aria-label", t("aria_send_label"));
    });
  });
}
