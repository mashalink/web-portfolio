// card.js
document.addEventListener("DOMContentLoaded", () => {
  const projectsShortData = {
    en: [
      {
        title: "Pancake Order Page",
        description:
          "Interactive builder for custom pancakes: pick base, toppings and extras, delivery options, live price calculation, and order summary.",
      },
      {
        title: "Business College Landing",
        description:
          "Clean landing page inspired by BC Helsinki Full Stack program with hero section, course summary, and official style.",
      },
      {
        title: "FlexFest",
        description:
          "Flexbox & Grid layout practice: responsive sections, event schedule, ticket tiers, and image gallery.",
      },
    ],
    ru: [
      {
        title: "Страница заказа блинов",
        description:
          "Конструктор блинов: выбор основы, топпингов и дополнений, способ доставки, живой пересчёт цены и резюме заказа.",
      },
      {
        title: "Лендинг Business College",
        description:
          "Лёгкий лендинг по мотивам программы Full Stack BC Helsinki: хиро-блок, краткое описание курса и фирменный стиль.",
      },
      {
        title: "FlexFest",
        description:
          "Практика Flexbox и Grid: адаптивные секции, расписание события, тарифы билетов и галерея.",
      },
    ],
    fi: [
      {
        title: "Letun tilaus",
        description:
          "Interaktiivinen letturakentaja: pohja, täytteet ja ekstrat, toimitustapa, reaaliaikainen hinnan päivitys ja yhteenveto.",
      },
      {
        title: "Business College -laskeutumissivu",
        description:
          "Kevyt esittelysivu BC Helsingin Full Stack -ohjelman hengessä: hero, kurssin esittely ja virallinen tyyli.",
      },
      {
        title: "FlexFest",
        description:
          "Flexbox- ja Grid-harjoitus: responsiiviset osiot, tapahtuma-aikataulu, lippupaketit ja kuvagalleria.",
      },
    ],
  };

  const sectionTranslations = {
    en: "Projects",
    ru: "Проекты",
    fi: "Projektit",
  };
  const moreBtnTranslations = {
    en: "More Projects",
    ru: "Больше проектов",
    fi: "Lisää projekteja",
  };

  function applyProjectsLang(lang) {
    const list = projectsShortData[lang] || projectsShortData.en;

    // карточки
    document
      .querySelectorAll(".projects-grid .project-card")
      .forEach((card, i) => {
        const item = list[i];
        if (!item) return;
        const h3 = card.querySelector("h3");
        const p = card.querySelector("p");
        if (h3) h3.textContent = item.title;
        if (p) p.textContent = item.description;
      });

    // заголовок секции
    const h2 = document.querySelector('#projects-title,[data-i18n="projects"]');
    if (h2)
      h2.textContent = sectionTranslations[lang] || sectionTranslations.en;

    // кнопка "More Projects"
    const moreBtn = document.querySelector(".more-projects-btn");
    if (moreBtn)
      moreBtn.textContent = moreBtnTranslations[lang] || moreBtnTranslations.en;
  }

  // первичная подстановка
  applyProjectsLang(localStorage.getItem("lang") || "en");

  // реагируем на смену языка из main.js
  document.addEventListener("lang:change", (e) => {
    applyProjectsLang(e.detail?.lang || "en");
  });
});
