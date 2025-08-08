# Pikku Eläintarha 🐻🦊🦅 – Mini Zoo App

This project is an interactive animal listing and management tool built with **HTML**, **CSS**, and **JavaScript**. It demonstrates the use of **arrays**, **objects**, **DOM manipulation**, **event listeners**, and **conditional rendering**.

## 🎯 Features

- ✅ Display a full list of animals grouped by type
- ✅ Filter animals by type (e.g. Mammal, Bird, Reptile)
- ✅ Live search by animal name
- ✅ Add new animals with selectable type
- ✅ Add new animal types (e.g. "Insects")
- ✅ Remove animals from the list
- ✅ Sort animals alphabetically (A–Z)
- ✅ Clean, card-style visual design for each animal entry

---

## 🛠 Technologies Used

- **HTML5** – Page structure and layout
- **CSS3** – Modern styling using Flexbox and box-shadows
- **JavaScript (vanilla)** – Logic for filtering, adding, sorting, and rendering elements

---

## 📁 File Structure

- `index.html` – Main layout and interactive elements
- `style.css` – Visual styles, layout, and responsiveness
- `script.js` – JavaScript logic and interactivity
- `/image/favicon.png` – Favicon icon

---

## 🔄 Core Functionalities

### 📋 Animal Listing

- Animals are stored in an array of objects, each with a `name`, `type`, and `newAnimal` flag.
- The list is displayed dynamically as `<li>` items styled as cards.

### 🔍 Filter & Search

- Filter animals by selected type via a `<select>` dropdown.
- Search by animal name with instant updates.

### ➕ Add Animal

- Add new animals by name and type via input fields and a dropdown.
- New animals are styled differently (`green` text) for visibility.

### 🗑 Remove Animal

- Each animal card has a “Remove” button to delete the entry.

### 🔡 Sort Animals

- A sort button orders the list alphabetically by animal name.

### 🐞 Add New Type

- Add a new animal type (singular/plural) via a form.
- New types are immediately added to both dropdowns.

---

## 💡 Example Types

- Mammal → _Nisäkäs_
- Bird → _Lintu_
- Reptile → _Matelija_
- Amphibian → _Sammakkoeläin_
- Fish → _Kala_

You can add your own (e.g. Insects, Crustaceans).

---

## 🖼 UI Design

- Uses modern colors: forest green, soft gray, and white backgrounds
- Responsive layout for input fields and controls
- Cards for each animal with hover effects and spacing

---

## ▶️ How to Run

1. Open `index.html` in your browser.
2. Use the filter/search/sort/add features as needed.
3. Try adding a new animal or custom type and see it update instantly.

---

## 👩‍💻 Author

**Maria** – 2025  
Business College Helsinki  
`© 2025 Maria. All rights reserved.`
