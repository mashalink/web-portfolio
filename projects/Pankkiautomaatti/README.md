# ATM Simulator – Web App

This project simulates a simple ATM interface, allowing users to **log in with a PIN**, **check their balance**, **deposit money**, and **withdraw funds**, all from a clean, user-friendly browser interface.

## 🎯 Features

- ✅ **PIN-based login** (default PIN: `2003`)
- ✅ Displays current account balance
- ✅ Allows **deposit** and **withdrawal** with validation
- ✅ Prevents overdraft (withdrawal only if balance is sufficient)
- ✅ Input filtering (only numeric values allowed)
- ✅ Error messages for incorrect PIN or insufficient funds
- ✅ Clean UI with modern fonts and pastel colors

---

## 🛠 Technologies Used

- **HTML5** – Structure
- **CSS3** – Styling using Google Fonts and CSS variables
- **JavaScript (vanilla)** – Core logic and real-time updates

---

## 📁 File Structure

- `index.html` – HTML layout including:
  - PIN input form
  - Balance display
  - Deposit and Withdraw sections
- `style.css` – CSS styling:
  - Fonts: **Poppins**, **Roboto**, **Montserrat**
  - Custom color variables for clean light-dark contrast
- `script.js` – Logic for:
  - Login verification
  - Real-time balance updates
  - Input sanitization (digits only)
  - Error handling

---

## 🔐 Security & Validation

- Only digits are allowed in inputs (`inputmode="numeric"`, JS filtering)
- Login requires matching the correct PIN before unlocking actions
- Deposit requires a positive number
- Withdrawal requires:
  - Positive amount
  - Amount ≤ balance
- Balance updates instantly after each transaction

---

## ▶️ How to Use

1. Open `index.html` in a browser
2. Enter the **PIN** (`2003`) and click **Login**
3. Check your balance
4. Use the **Deposit** and **Withdraw** sections as needed
5. Errors (like "Wrong PIN" or "Not enough balance") are shown immediately

---

## 💡 Bonus Features

- All operations happen **without reloading the page**
- Mobile-friendly numeric input (via `inputmode`)
- Styled using CSS Flexbox

---

## 👩‍💻 Author

**Maria** – 2025  
Business College Helsinki  
`© 2025 Maria. All rights reserved.`
