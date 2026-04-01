# Maria Link — Web Portfolio

**Live:** https://mashalink.github.io/web-portfolio/  
**Repo:** https://github.com/mashalink/web-portfolio

A personal portfolio website built with pure **HTML, CSS, and JavaScript**.  
The site is fully responsive, supports **English, Russian, and Finnish**, includes **light and dark themes**, and highlights selected full-stack work.

![Portfolio Preview](img/preview.png)

## Highlights

- Personal introduction and current developer focus
- Responsive layout for desktop and mobile
- Selected projects section with live demos and repository links
- Light and dark theme with saved preference
- EN / RU / FI language switching
- Contact form with client-side validation
- Back-to-top button and burger navigation
- Basic accessibility support and social preview metadata

## Featured Work on the Site

### [Bloglist](https://bloglist-dunc.onrender.com/)
Featured from the FullStack Open repository.

- **Repo:** https://github.com/mashalink/FullStack
- **Focus:** authentication, blog CRUD flows, likes, deletion, and automated testing
- **Tech:** React, Node.js, Express, MongoDB, testing tools

### [HR App](https://hrapp-1-y52h.onrender.com/)
Employee management application with separate frontend and backend.

- **Repo:** https://github.com/mashalink/hrApp
- **Focus:** CRUD flows, forms, routing, and API integration
- **Tech:** React, Vite, Axios, Material UI, JSON Server

## Project Structure

```text
web-portfolio/
├─ css/
│  ├─ about.css
│  ├─ burger.css
│  ├─ cards.css
│  ├─ contacts.css
│  ├─ hero.css
│  ├─ style.css
│  └─ to-top.css
├─ img/
│  ├─ icons/
│  ├─ hero-bg-day.png
│  ├─ hero-bg-night.png
│  ├─ photo.png
│  └─ preview.png
├─ js/
│  ├─ burger.js
│  ├─ card.js
│  ├─ contacts.js
│  ├─ i18n.js
│  ├─ main.js
│  ├─ theme.js
│  └─ to-top.js
├─ index.html
├─ LICENSE
└─ README.md
```

## Main Technical Notes

- **Translations:** stored in `js/i18n.js` and `js/card.js`
- **Theme handling:** implemented in `js/theme.js` and persisted in `localStorage`
- **Project cards:** rendered from localized data in `js/card.js`
- **Contact form:** validated in `js/contacts.js` and sent through `mailto:`

## Run Locally

No build tools are required.

1. Clone the repository:

   ```bash
   git clone https://github.com/mashalink/web-portfolio.git
   cd web-portfolio
   ```

2. Open `index.html` in a browser, or use **VS Code Live Server** for local development.

## Deployment

This site is deployed through **GitHub Pages** from the repository root.

## Accessibility

- Semantic HTML structure
- Focus-visible styles
- Screen-reader-only helper text for external links
- Language switching and theme switching without reload

## License

This project is licensed under the **MIT License**. See [LICENSE](LICENSE).
