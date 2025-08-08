# Magic 8-Ball 🔮 – Web Simulator

This is a playful and animated Magic 8-Ball web app where users can ask yes/no-style questions and receive mysterious answers. The project includes animations and modern styling using pure **HTML**, **CSS**, and **JavaScript**.

## 🎯 Purpose

- Practice CSS styling and animations
- Use JavaScript for DOM manipulation and interactivity
- Build a small, visually engaging web app

## 🧩 Features

- ✅ Input field to type your question
- ✅ Clicking the 8-ball triggers a shaking animation
- ✅ After animation, a randomized answer appears in the center
- ✅ After a few seconds, the ball resets to the classic "8" state
- ✅ Fade-in effects and a glowing visual design

## 🎨 CSS Features

- **Round 8-ball** using `border-radius: 50%`
- **Inner answer window** with radial gradient and glow
- **@keyframes**:
  - `shake` animation when clicked
  - `idle` hover animation
  - `fade-in` via transitions
- Responsive layout centered using Flexbox

## ⚙️ JavaScript Logic

- Predefined list of 20 random answers
- Handles click event on the ball
- Applies `.shake` animation class
- On animation end:
  - Random answer appears inside the ball
  - After a delay, resets back to the "8"
- Ignores empty input and shows a message

## 🛠 Technologies Used

- **HTML5** – Structure
- **CSS3** – Styling, gradients, shadows, animations
- **Vanilla JavaScript** – Logic and interactivity

## 📁 Files

- `index.html` – App structure and layout
- `style.css` – Styling, animations, gradients
- `script.js` – Core logic and animation timing

## 💡 Example Answers

- "It is certain"
- "Reply hazy, try again"
- "Don't count on it"
- "Very doubtful"
- ...and many more (20 total)

## ▶️ How to Use

1. Open `index.html` in a browser
2. Type your question (e.g. _"Will I pass the exam?"_)
3. Click the 8-ball
4. Watch it shake and reveal your fate!

## 👩‍💻 Author

**Maria** – 2025  
Business College Helsinki  
`© 2025 Maria. All rights reserved.`
