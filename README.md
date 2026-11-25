# My Budget Tracker

This is my Week 2 project for the Budget Tracker. I built it on top of
my Week 1 files, so it is the same project, just improved.

## What the page does

The page lets a user record an expense by typing a name, an amount and
picking a category. For now the button does not save anything, because
we have not learned JavaScript yet. The saving part comes in Week 6.

Below the form there is a table that shows sample expenses so the
layout is easy to see. There is also a short video with budgeting tips
and a small help box that can be opened and closed.

## Files

- `index.html` – the page structure
- `style.css` – all the styling
- `logo.png` – the small logo in the header
- `README.md` – this file

## What I added in Week 2

1. **Expense table.** I replaced the "No expenses yet" text with a real
   table. It has a header row (`thead`) and body rows (`tbody`). There
   are five sample expenses with Name, Amount, Category and Date.

2. **Better form.** All inputs are now inside one `<form>`. The category
   field is now a dropdown with five choices: Food, Transport, Rent,
   Entertainment and Other. I added an "Add Expense" button with
   `type="button"` so it does not submit the page. Every input has an
   `id` that will be used by JavaScript later.

3. **Picture and video.** I put a small logo next to the heading using
   an `<img>` tag with `src`, `alt` and `width`. I also embedded a
   YouTube video using an `<iframe>` with `width`, `height`, `title`
   and `frameborder`.

4. **Small interactive parts.** I added a `<details>` box called
   "How to use this tracker" that opens and closes. Table rows change
   colour when the mouse hovers over them, and the button shows a hand
   cursor.

5. **Advanced CSS selectors.** I used five of the selectors we learned:
   a descendant selector, a direct child selector, `:nth-child(even)`
   and `:first-child`, the `:not()` selector, and a `:focus` style on
   the form fields.

## How to open

Just double-click `index.html` or open it in any browser. There is
nothing to install.