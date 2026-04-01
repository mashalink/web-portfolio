export const translations = {
  en: {
    title: "My Portfolio",
    logo: "ML",
    about: "About",
    about_text:
      "I am a software development student at Business College Helsinki and previously completed the Hive Helsinki curriculum, where I built a strong foundation in algorithms and systems thinking. I enjoy building web applications with a growing focus on full-stack development, clean architecture, and practical user experience.",
    projects: "Projects",
    contact: "Contact",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send",
    hero_title: "Hi, I'm Maria Link.",
    hero_subtitle: "Aspiring full-stack developer based in Espoo.",
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
      "Я студентка программы software development в Business College Helsinki и ранее завершила учебную программу Hive Helsinki, где получила сильную базу в алгоритмах и системном мышлении. Мне нравится создавать веб-приложения с растущим фокусом на full-stack разработку, чистую архитектуру и практичный пользовательский опыт.",
    projects: "Проекты",
    contact: "Контакты",
    name: "Имя",
    email: "Почта",
    message: "Сообщение",
    send: "Отправить",
    hero_title: "Привет! Я — Мария Линк.",
    hero_subtitle: "Начинающий full-stack разработчик из Эспоо.",
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
      "Opiskelen ohjelmistokehitystä Business College Helsingissä ja olen aiemmin suorittanut Hive Helsingin opintokokonaisuuden, jossa rakensin vahvan pohjan algoritmeihin ja systeemiajatteluun. Nautin web-sovellusten rakentamisesta, ja suuntaudun yhä vahvemmin full-stack-kehitykseen, selkeään arkkitehtuuriin ja käytännölliseen käyttökokemukseen.",
    projects: "Projektit",
    contact: "Yhteys",
    name: "Nimi",
    email: "Sähköposti",
    message: "Viesti",
    send: "Lähetä",
    hero_title: "Hei! Olen Maria Link.",
    hero_subtitle: "Espoossa asuva full-stack-kehittäjäksi tähtäävä opiskelija.",
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
