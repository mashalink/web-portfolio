document.addEventListener("DOMContentLoaded", () => {
  const projectsShortData = {
    en: [
      {
        label: "Featured app from FullStack Open",
        title: "Bloglist",
        description:
          "Featured app from my FullStack Open coursework. Bloglist pairs a React frontend with a Node/Express API and lets logged-in users create posts, like and comment on blogs, and delete their own entries. The repo also includes persisted auth, Redux state, and test coverage.",
        loginNote: "Demo login: demo / demopass",
        liveLabel: "Live Demo",
        repoLabel: "GitHub Repo",
      },
      {
        label: "Personal project",
        title: "HR App",
        description:
          "An employee-management app with a React/Vite frontend, Axios data fetching, and a JSON Server backend deployed on Render. It supports browsing employees, adding and editing records, and showing probation and anniversary reminders in a simple admin UI.",
        liveLabel: "Live Demo",
        repoLabel: "GitHub Repo",
      },
    ],
    ru: [
      {
        label: "Приложение из FullStack Open",
        title: "Bloglist",
        description:
          "Избранное приложение из курса FullStack Open. Bloglist соединяет React-фронтенд с Node/Express API и позволяет входить в систему, создавать посты, ставить лайки, оставлять комментарии и удалять свои записи. В репозитории также есть сохранённая авторизация, Redux-состояние и тесты.",
        loginNote: "Демо-вход: demo / demopass",
        liveLabel: "Открыть демо",
        repoLabel: "GitHub репозиторий",
      },
      {
        label: "Личный проект",
        title: "HR App",
        description:
          "Приложение для управления сотрудниками с фронтендом на React/Vite, загрузкой данных через Axios и backend на JSON Server, развернутым на Render. Оно позволяет просматривать сотрудников, добавлять и редактировать записи, а также показывает напоминания о probation и годовщинах в простом admin-интерфейсе.",
        liveLabel: "Открыть демо",
        repoLabel: "GitHub репозиторий",
      },
    ],
    fi: [
      {
        label: "FullStack Open -sovellus",
        title: "Bloglist",
        description:
          "FullStack Open -kurssin esiin nostettu sovellus. Bloglist yhdistää React-frontendin ja Node/Express-API:n ja antaa kirjautuneiden käyttäjien luoda postauksia, tykätä ja kommentoida blogeja sekä poistaa omia kirjoituksiaan. Repossa on myös pysyvä kirjautuminen, Redux-tila ja testikattavuus.",
        loginNote: "Demo-kirjautuminen: demo / demopass",
        liveLabel: "Avaa demo",
        repoLabel: "GitHub-repo",
      },
      {
        label: "Oma projekti",
        title: "HR App",
        description:
          "Työntekijähallintasovellus React/Vite-frontendillä, Axios-datahaulla ja Renderiin julkaistulla JSON Server -backendillä. Sovelluksessa voi selata työntekijöitä, lisätä ja muokata tietueita sekä näyttää probation- ja vuosipäivämuistutuksia selkeässä admin-näkymässä.",
        liveLabel: "Avaa demo",
        repoLabel: "GitHub-repo",
      },
    ],
  };

  const sectionTranslations = {
    en: "Selected Projects",
    ru: "Избранные проекты",
    fi: "Valitut projektit",
  };

  function applyProjectsLang(lang) {
    const list = projectsShortData[lang] || projectsShortData.en;

    document
      .querySelectorAll(".projects-grid .project-card")
      .forEach((card, i) => {
        const item = list[i];
        if (!item) return;
        const label = card.querySelector('[data-project-field="label"]');
        const h3 = card.querySelector('[data-project-field="title"]');
        const p = card.querySelector('[data-project-field="description"]');
        const loginNote = card.querySelector(
          '[data-project-field="loginNote"]'
        );
        const liveLabel = card.querySelector(
          '[data-project-field="liveLabel"]'
        );
        const repoLabel = card.querySelector(
          '[data-project-field="repoLabel"]'
        );
        if (label) label.textContent = item.label;
        if (h3) h3.textContent = item.title;
        if (p) p.textContent = item.description;
        if (loginNote && item.loginNote) loginNote.textContent = item.loginNote;
        if (liveLabel) liveLabel.textContent = item.liveLabel;
        if (repoLabel) repoLabel.textContent = item.repoLabel;
      });

    const h2 = document.getElementById("projects-title");
    if (h2)
      h2.textContent = sectionTranslations[lang] || sectionTranslations.en;
  }

  applyProjectsLang(localStorage.getItem("lang") || "en");

  document.addEventListener("lang:change", (e) => {
    applyProjectsLang(e.detail?.lang || "en");
  });
});
