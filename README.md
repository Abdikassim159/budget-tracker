# My Budget Tracker

This is my Budget Tracker project. I started it in Week 1, upgraded it in
Week 2, and in Week 3 I focused on making it look good with CSS. The HTML
structure is the same as Week 2 — only the design changed.

## What the page does

The page lets a user record an expense by typing a name, an amount and
picking a category. The Add Expense button does not save anything yet
because we have not learned JavaScript. That comes in Week 6. Below the
form there is a table showing sample expenses, a short help box that
opens and closes, and a budgeting video.

## What I did in Week 3

### 1. Colour palette
I picked a small palette: deep navy (#1e3a5f), green (#27ae60), light
blue-grey backgrounds, and white cards. I saved them as CSS variables in
:root so the same colours are used everywhere — heading, table header,
buttons, borders, page background.

### 2. Typography
I loaded two Google Fonts:
- **Poppins** for headings, table headers and the button.
- **Lato** for body text, labels and table content.

I also set line-height to 1.6 on the body so paragraphs are easier to
read, and made the form labels uppercase so they stand out.

### 3. Table and form styling
The table has a navy header with white uppercase text, padding inside
every cell, alternating row colours, and a hover effect on rows. The form
inputs have padding, rounded corners, and a blue focus ring. The button
is green, uses Poppins, and gets darker when hovered.

### 4. CSS Box Model
I made the header, the form, the table, the help box and the video each
look like a separate card. Each card has padding inside, margin below it,
a thin border, rounded corners and a soft shadow so they look modern and
clearly separated from each other.

## Files

- `index.html` – page structure (same as Week 2, only font links added)
- `style.css` – all the styling
- `logo.png` – small logo in the header
- `README.md` – this file

## How to open

Open `index.html` in any browser. Nothing to install.