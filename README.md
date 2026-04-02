# Maria Link — Web Portfolio

[Live](https://mashalink.github.io/web-portfolio/) | [Repo](https://github.com/mashalink/web-portfolio) | [![CI](https://github.com/mashalink/web-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/mashalink/web-portfolio/actions/workflows/ci.yml)

A responsive static portfolio built with plain HTML, CSS, and JavaScript. It is available in English, Russian, and Finnish, supports light and dark themes, and highlights current internship work plus two featured public projects.

![Portfolio Preview](img/preview.png)

## Highlights

- Hiring-oriented hero with CV download and LinkedIn
- About section with background and current focus
- Current Work card for the private EllarionTales internship project
- Two featured public projects with live demos, repo links, and screenshots
- Footer contact links for email, LinkedIn, and GitHub
- EN / RU / FI language switching
- Light and dark themes with saved preference
- Burger navigation and back-to-top button
- Basic accessibility and social preview metadata

## Current Work

### [EllarionTales](https://github.com/mashalink/EllarionTales)

Private internship project for a LARP registration flow.

- **Site:** https://ellariontales.com/
- **Focus:** backend availability rules, character-group capacity, premium handling, transactional registration saves, and CI/tooling
- **Tech:** Node.js, Express, PostgreSQL, Sequelize, Jest

## Featured Projects

### [Bloglist](https://bloglist-dunc.onrender.com/)

Featured app from FullStack Open coursework.

- **Repo:** https://github.com/mashalink/FullStack
- **Demo login:** `demo` / `demopass`
- **Focus:** React frontend with a Node/Express API, persisted auth, post creation, likes, comments, delete-own-post flow, and test coverage
- **Tech:** React, Redux, React Router, Node.js, Express, MongoDB

### [HR App](https://hrapp-1-y52h.onrender.com/)

Employee-management app with a React/Vite frontend and a Render-hosted JSON Server backend.

- **Repo:** https://github.com/mashalink/hrApp
- **Focus:** browsing employees, adding and editing records, and probation/anniversary reminders in a simple admin UI
- **Tech:** React, Vite, React Router, Axios, Material UI, JSON Server

## CI

GitHub Actions runs on every push and pull request to `main`.

It checks:

- JavaScript syntax with `node --check`
- JavaScript linting with ESLint
- formatting with Prettier
- HTML structure with `html-validate`
- local links, images, and key section ids in `index.html`
- Lighthouse scores for performance, accessibility, best practices, and SEO

This keeps the repo honest without adding a build system. For a static site, that is enough to catch broken files, invalid markup, broken paths, and accidental regressions early.

The `main` branch is protected by required checks.

## Run Locally

No build tools are required.

1. Clone the repository:

   ```bash
   git clone https://github.com/mashalink/web-portfolio.git
   cd web-portfolio
   ```

2. Open `index.html` in a browser, or use VS Code Live Server.

## Deployment

This site is deployed through GitHub Pages from the repository root.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE).
