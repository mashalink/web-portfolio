// card.js
document.addEventListener("DOMContentLoaded", () => {
  const projectsShortData = {
    en: [
      {
        label: "Featured from FullStack Open",
        title: "Bloglist",
        description:
          "Full-stack blog application with authentication, blog creation, likes, deletion, and automated tests.",
        liveLabel: "Live Demo",
        repoLabel: "GitHub Repo",
      },
      {
        label: "Personal project",
        title: "HR App",
        description:
          "Employee management application with separate frontend and backend, focused on CRUD flows, forms, routing, and API integration.",
        liveLabel: "Live Demo",
        repoLabel: "GitHub Repo",
      },
    ],
    ru: [
      {
        label: "Из FullStack Open",
        title: "Bloglist",
        description:
          "Full-stack приложение для блогов с авторизацией, созданием постов, лайками, удалением и автоматизированными тестами.",
        liveLabel: "Открыть демо",
        repoLabel: "GitHub репозиторий",
      },
      {
        label: "Личный проект",
        title: "HR App",
        description:
          "Приложение для управления сотрудниками с отдельными frontend и backend частями, с фокусом на CRUD, формы, роутинг и интеграцию API.",
        liveLabel: "Открыть демо",
        repoLabel: "GitHub репозиторий",
      },
    ],
    fi: [
      {
        label: "FullStack Open -projekti",
        title: "Bloglist",
        description:
          "Full-stack blogisovellus, jossa on kirjautuminen, blogien luonti, tykkäykset, poisto ja automatisoidut testit.",
        liveLabel: "Avaa demo",
        repoLabel: "GitHub-repo",
      },
      {
        label: "Oma projekti",
        title: "HR App",
        description:
          "Työntekijöiden hallintasovellus, jossa on erillinen frontend ja backend sekä painotus CRUD-toimintoihin, lomakkeisiin, reititykseen ja API-integraatioon.",
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
        const liveLabel = card.querySelector('[data-project-field="liveLabel"]');
        const repoLabel = card.querySelector('[data-project-field="repoLabel"]');
        if (label) label.textContent = item.label;
        if (h3) h3.textContent = item.title;
        if (p) p.textContent = item.description;
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
