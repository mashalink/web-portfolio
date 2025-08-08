document.addEventListener("DOMContentLoaded", () => {
  const savedThemeRaw = localStorage.getItem("theme") || "sunset";
  const currentTheme = savedThemeRaw.endsWith("-theme")
    ? savedThemeRaw
    : `${savedThemeRaw}-theme`;
  document.body.classList.add("projects-page", currentTheme);

  const faviconEl = document.getElementById("favicon");
  const themeToggle = document.getElementById("theme-toggle");

  const updateFavicon = () => {
    if (!faviconEl) return;
    faviconEl.href = document.body.classList.contains("night-theme")
      ? "img/icons/favicon-theme-night.ico"
      : "img/icons/favicon-theme-sunset.ico";
  };
  updateFavicon();

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const isNight = document.body.classList.toggle("night-theme");
      if (isNight) document.body.classList.remove("sunset-theme");
      else document.body.classList.add("sunset-theme");
      updateFavicon();
      localStorage.setItem("theme", isNight ? "night-theme" : "sunset-theme");
    });
  }

  // --- i18n data ---
  const pageTranslations = {
    en: { projects: "Projects", more: "More Projects" },
    ru: { projects: "Проекты", more: "Больше проектов" },
    fi: { projects: "Projektit", more: "Lisää projekteja" },
  };

  const projectData = {
    en: [
      {
        title: "Pancake Order Page",
        description:
          "Interactive builder for custom pancakes: pick base, toppings and extras, delivery options, live price calculation, modal order summary, and persistent save to localStorage with unique ID. Built with HTML/CSS and ES6 modules; responsive UI and smooth micro-interactions.",
        link: "./projects/pancakes/order/index.html",
      },
      {
        title: "Pancake Kitchen View",
        description:
          "Chef/admin dashboard that loads saved orders, shows color-coded statuses (waiting/ready/delivered), and lets you update them inline. Clean layout, responsive styling, and clear state indicators for quick order triage.",
        link: "./projects/pancakes/kitchen/index.html",
      },
      {
        title: "Business College Landing",
        description:
          "Clean landing page inspired by BC Helsinki Full Stack program: hero with CTA, course summary with topics (HTML, CSS, JS, React, PHP, DBs, Git, deployment, responsive, security), official color palette, Google Fonts, nav and social footer.",
        link: "./projects/BC/index.html",
      },
      {
        title: "FlexFest",
        description:
          "Flexbox & Grid layout practice: header/nav, gradient hero, multi-day program cards, ticket tiers with VIP brought forward via order:-1, location block with map, image gallery on CSS Grid, and responsive tweaks via media queries.",
        link: "./projects/Flex-projecti/flexfest.html",
      },
      {
        title: "Two Truths and a Lie (Icebreak)",
        description:
          "Tiny party game for 3 players: enter names and 3 statements (2 true, 1 lie), then quiz mode with instant feedback, scoring, and replay. Vanilla JS handles validation, flow, and UI state with accessible, colorful styling.",
        link: "./projects/Icebreak/index.html",
      },
      {
        title: "Lomake",
        description:
          "Newsletter-style form demo with client-side validation: first/last name, email, password rules (length, uppercase, number), confirm match, ARIA-described errors, success toast, and mobile-friendly layout with CSS variables and smooth hovers.",
        link: "./projects/Lomake/index.html",
      },
      {
        title: "Magic 8 Ball",
        description:
          "Animated JS toy: click to shake, then display one of 20 random answers inside a glowing ‘window’, auto-reset to classic “8”. CSS keyframes (shake/idle/fade), gradients, shadows; ignores empty input with gentle prompts.",
        link: "./projects/Magic_Ball/index.html",
      },
      {
        title: "ATM Simulator",
        description:
          "PIN-gated (2003) mini banking UI: login, see balance, deposit/withdraw with numeric filtering, overdraft protection, instant updates, and clear error states — all without page reload. Light, pastel UI with Flexbox.",
        link: "./projects/Pankkiautomaatti/index.html",
      },
      {
        title: "Little Zoo",
        description:
          "Playful mini-CRUD for animals: list by type, live search, type filter, add/remove entries, add new types, A–Z sorting, and visual highlight for newly added items. Card-style UI with responsive controls.",
        link: "./projects/Pikku_elantarha/index.html",
      },
    ],
    ru: [
      {
        title: "Страница заказа блинов",
        description:
          "Конструктор блинов: выбор основы, топпингов и дополнений, способ доставки, живой пересчёт цены, модальное резюме заказа и сохранение в localStorage с уникальным ID. HTML/CSS + ES6-модули, адаптив и аккуратные анимации.",
        link: "projects/Pancakes/order/index.html",
      },
      {
        title: "Кухонная панель заказов",
        description:
          "Админ-вид для повара: подхватывает сохранённые заказы, отображает цветовые статусы (ожидает/готов/доставлен) и позволяет менять их напрямую. Чистый адаптивный интерфейс и наглядные индикаторы состояний.",
        link: "projects/Pancakes/kitchen/index.html",
      },
      {
        title: "Лендинг Business College",
        description:
          "Лёгкий лендинг по мотивам программы Full Stack BC Helsinki: хиро-блок с CTA, список тем (HTML, CSS, JS, React, PHP, БД, Git, деплой, адаптив, безопасность), фирменные цвета и шрифты, навигация и соц-футер.",
        link: "projects/BC/index.html",
      },
      {
        title: "FlexFest",
        description:
          "Практика Flexbox и Grid: шапка/навигация, градиентный герой, карточки расписания по дням, тарифы (VIP выведён вперёд через order:-1), блок локации с картой, грид-галерея и адаптив через media-запросы.",
        link: "projects/Flex-projecti/flexfest.html",
      },
      {
        title: "Two Truths and a Lie (Icebreak)",
        description:
          "Мини-игра на троих: ввод имён и 3 утверждений (2 правды, 1 ложь), режим викторины с мгновенной обратной связью, подсчётом очков и повтором. Чистый JS: валидация, сценарии, состояния, доступная и яркая стилизация.",
        link: "projects/Icebreak/index.html",
      },
      {
        title: "Lomake",
        description:
          "Демо-форма подписки с проверками на клиенте: имя/фамилия, email, пароль (мин. 8, заглавная, цифра), совпадение подтверждения, ARIA-описания ошибок, уведомление об успехе и мобильная вёрстка на CSS-переменных.",
        link: "projects/Lomake/index.html",
      },
      {
        title: "Магический шар",
        description:
          "Анимированный «шар судьбы»: по клику — тряска и один из 20 ответов внутри «окна», потом авто-сброс на классическую «8». Кадровые анимации (shake/idle/fade), градиенты, тени; обработка пустого ввода.",
        link: "projects/Magic_Ball/index.html",
      },
      {
        title: "Банкомат",
        description:
          "Вход по PIN (2003), баланс, пополнение и снятие с фильтрацией ввода, защита от перерасхода, мгновенные обновления и понятные ошибки — без перезагрузки. Светлый, «пастельный» UI на Flexbox.",
        link: "projects/Pankkiautomaatti/index.html",
      },
      {
        title: "Маленький зоопарк",
        description:
          "Забавный мини-CRUD по животным: список по типам, живой поиск, фильтр, добавление/удаление, создание новых типов, сортировка A–Z и визуальная подсветка новых элементов. Карточный адаптивный интерфейс.",
        link: "projects/Pikku_elantarha/index.html",
      },
    ],
    fi: [
      {
        title: "Letun tilaus",
        description:
          "Interaktiivinen letturakentaja: pohja, täytteet ja ekstrat, toimitustapa, reaaliaikainen hinnan päivitys, tilauksen yhteenveto modaalissa sekä tallennus localStorageen uniikilla ID:llä. HTML/CSS + ES6-moduulit, responsiivinen viimeistely.",
        link: "projects/Pancakes/order/index.html",
      },
      {
        title: "Keittiön näkymä",
        description:
          "Kokin hallintanäkymä tallennettuihin tilauksiin: väreillä koodatut statukset (waiting/ready/delivered) ja suorat päivitykset. Selkeä, responsiivinen UI nopeatempoiseen työskentelyyn.",
        link: "projects/Pancakes/kitchen/index.html",
      },
      {
        title: "Business College -laskeutumissivu",
        description:
          "Siisti esittelysivu BC Helsingin Full Stack -ohjelman hengessä: hero + CTA, aihelistaus (HTML, CSS, JS, React, PHP, tietokannat, Git, julkaisu, responsiivisuus, tietoturva), viralliset värit ja Google-fontit, navigaatio ja some-footer.",
        link: "projects/BC/index.html",
      },
      {
        title: "FlexFest",
        description:
          "Flexbox- ja Grid-harjoitus: header/nav, liukuväri-hero, päiväkohtaiset ohjelmakortit, lippupaketit (VIP etualalle order:-1), sijainti + kartta, CSS Grid -galleria ja media-kyselyihin perustuva responsiivisuus.",
        link: "projects/Flex-projecti/flexfest.html",
      },
      {
        title: "Two Truths and a Lie (Icebreak)",
        description:
          "Pieni seurapeli kolmelle: nimet ja 3 väitettä (2 totta, 1 valhe), visatila välittömällä palautteella, pistelaskulla ja uudelleenpeluulla. Vanilla JS hoitaa validoinnin, vaiheistetun kulun ja selkeät tilat.",
        link: "projects/Icebreak/index.html",
      },
      {
        title: "Lomake",
        description:
          "Uutiskirje-henkinen lomake validoinneilla: etu/sukunimi, sähköposti, salasanasäännöt (pituus, iso kirjain, numero), varmistuksen täsmäys, ARIA-virheviitteet, onnistumisilmoitus ja mobiiliystävällinen asettelu.",
        link: "projects/Lomake/index.html",
      },
      {
        title: "Taikapallo",
        description:
          "Animoitu 8-pallo: klikkaus heilauttaa pallon ja näyttää satunnaisen vastauksen (20 kpl), sitten automaattinen palautus klassiseen “8”:aan. CSS-animaatiot (shake/idle/fade), hehkut ja varjot; tyhjän syötteen käsittely.",
        link: "projects/Magic_Ball/index.html",
      },
      {
        title: "Pankkiautomaatti",
        description:
          "PIN (2003) -kirjautuminen, saldon katselu, talletus ja nosto numerosuodatuksella, tilinylityksen esto, välittömät päivitykset ja selkeät virheet — kaikki ilman sivunlatausta. Pastellinen Flexbox-UI.",
        link: "projects/Pankkiautomaatti/index.html",
      },
      {
        title: "Pikku eläintarha",
        description:
          "Leikkisä eläinlistaus ja hallinta: tyypin mukaan listaus, live-haku, suodatus, lisää/poista, uusien tyyppien luonti, A–Ö-järjestys ja uusien kohteiden korostus. Korttipohjainen, responsiivinen käyttöliittymä.",
        link: "projects/Pikku_elantarha/index.html",
      },
    ],
  };

  const getLang = () => localStorage.getItem("lang") || "en";

  // --- render texts (section title + "More projects" if есть на странице) ---
  const renderTexts = (lang = getLang()) => {
    const heading = document.querySelector('[data-i18n="projects"]');
    if (heading)
      heading.textContent = pageTranslations[lang]?.projects ?? "Projects";

    const moreBtn = document.querySelector(".more-projects-btn");
    if (moreBtn)
      moreBtn.textContent = pageTranslations[lang]?.more ?? "More Projects";
  };

  renderTexts(getLang());
  document.addEventListener("lang:change", (e) => {
    const lang = e.detail?.lang || getLang();
    renderTexts(lang);
  });

  // --- modal wiring ---
  const modal = document.getElementById("projectModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const modalLink = document.getElementById("modalLink");
  const closeModalBtn = document.getElementById("closeModal");
  const modalImage = document.getElementById("modalImage");
  const modalReady =
    modal && modalTitle && modalDescription && modalLink && closeModalBtn;

  const cards = document.querySelectorAll(".projects-grid .project");
  if (!cards.length) {
    console.warn("[projects.js] No .project cards found.");
  } else if (modalReady) {
    cards.forEach((card, index) => {
      card.addEventListener("click", () => {
        const lang = getLang();
        const list = projectData[lang] || projectData.en;
        const data = list[index];
        if (!data) return;

        modalTitle.textContent = data.title;
        modalDescription.textContent = data.description;
        modalLink.href = data.link;

        const imgEl = card.querySelector("img");
        if (modalImage && imgEl) {
          modalImage.src = imgEl.src;
          modalImage.alt = `${data.title} preview`;
        }

        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
      });
    });

    const closeModal = () => {
      modal.style.display = "none";
      document.body.style.overflow = "";
    };
    closeModalBtn.addEventListener("click", closeModal);
    window.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.style.display === "flex") closeModal();
    });
  }
});
