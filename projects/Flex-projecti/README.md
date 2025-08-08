# FlexFest – Flexbox Layout Practice

This project is a layout practice for using **CSS Flexbox**. The goal is to reproduce the structure and visual design of a fictional music festival site called _FlexFest_ by using only HTML and Flexbox-based CSS.

## 🎯 Purpose

- To practice modern CSS Flexbox layout techniques.
- To build a clean and structured page layout without using JavaScript.
- To apply responsive design principles (optional mobile support).

## 📁 Project Structure

- `flexfest.html` – HTML structure of the page.
- `style.css` – Styling with Flexbox and other CSS enhancements.
- `festivaalialue.png` – The location map image.
- `/kuvat/` – Folder containing sample festival photos (e.g. `kuva1.png` – `kuva9.png`).

## 🧩 Sections Implemented

### ✅ Header & Navigation

- Logo on the left, navigation links aligned to the right.
- Flexbox used to distribute space between logo and links.

### ✅ Hero Section

- Colorful intro with gradient background.
- Vertically and horizontally centered content.

### ✅ Program Calendar

- Flex layout used to display multiple "day cards".
- Each card shows artists and times, with aligned labels.

### ✅ Ticket Packages

- Flex layout to create ticket cards.
- VIP ticket styled differently and brought to the front using `order: -1`.

### ✅ Location Map

- Flex container with two children: map image and address block.
- The map takes 1/3 of the horizontal space on desktop.

### ✅ Image Collection Grid

- CSS Grid used to create a photo gallery with various image sizes (`1x1`, `2x1`, `2x2` etc.).

### ✅ Footer

- Flexbox used for layout of social media/contact links.
- Footer is centered and clean.

## 🎨 CSS Highlights

- Responsive design with `@media` query (max-width: 768px).
- Custom properties (`--variables`)
