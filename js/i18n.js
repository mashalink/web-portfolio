export const translations = {
  en: {
    title: "My Portfolio",
    logo: "ML",
    about: "About",
    about_text:
      "I'm a junior front-end developer currently studying at Business College Helsinki with a focus on WordPress, PHP, and React. I previously completed Hive Helsinki’s peer-driven software engineering curriculum with a strong emphasis on problem-solving and C programming. Passionate about clean code, intuitive interfaces, and continuous learning.",
    projects: "Projects",
    contact: "Contact",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send",
    hero_title: "Hi, I'm Maria Link.",
    hero_subtitle: "I'm a front-end developer.",
    opens_new_tab: "(opens in a new tab)",
    contact_success: "Opening your email app…",
    err_name: "Please enter your name (min 2 chars).",
    err_email: "Please enter a valid email.",
    err_message: "Message should be at least 10 characters.",
    aria_send_label: "Send message",
  },
  ru: {
    title: "Моё Портфолио",
    logo: "ML",
    about: "Обо мне",
    about_text:
      "Я начинающий фронтенд-разработчик, сейчас учусь в Business College Helsinki с упором на WordPress, PHP и React. Ранее прошла учебную программу Hive Helsinki, основанную на принципе peer-to-peer, с акцентом на решение задач и язык программирования C. Увлечена чистым кодом, интуитивными интерфейсами и постоянным обучением.",
    projects: "Проекты",
    contact: "Контакты",
    name: "Имя",
    email: "Почта",
    message: "Сообщение",
    send: "Отправить",
    hero_title: "Привет! Я — Мария Линк.",
    hero_subtitle: "Я фронтенд-разработчик.",
    opens_new_tab: "(откроется в новой вкладке)",
    contact_success: "Открываю почтовое приложение…",
    err_name: "Введите имя (минимум 2 символа).",
    err_email: "Введите корректный email.",
    err_message: "Сообщение должно быть не короче 10 символов.",
    aria_send_label: "Отправить сообщение",
  },
  fi: {
    title: "Portfolioni",
    logo: "ML",
    about: "Minusta",
    about_text:
      "Olen junior front-end -kehittäjä ja opiskelen parhaillani Business College Helsingissä keskittyen WordPressiin, PHP:hen ja Reactiin. Olen aiemmin suorittanut Hive Helsingin vertaisoppimiseen perustuvan ohjelmointiopinnot, joissa painotettiin ongelmanratkaisua ja C-ohjelmointia. Olen intohimoinen siististä koodista, intuitiivisista käyttöliittymistä ja jatkuvasta oppimisesta.",
    projects: "Projektit",
    contact: "Yhteys",
    name: "Nimi",
    email: "Sähköposti",
    message: "Viesti",
    send: "Lähetä",
    hero_title: "Hei! Olen Maria Link.",
    hero_subtitle: "Olen frontend-kehittäjä.",
    opens_new_tab: "(avautuu uuteen välilehteen)",
    contact_success: "Avaan sähköpostisovelluksesi…",
    err_name: "Kirjoita nimesi (vähintään 2 merkkiä).",
    err_email: "Kirjoita kelvollinen sähköposti.",
    err_message: "Viestin pituus vähintään 10 merkkiä.",
    aria_send_label: "Lähetä viesti",
  },
};

export function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  document.title = translations[lang].title || "My Portfolio";
}
