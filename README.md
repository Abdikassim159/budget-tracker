# SpendWise — Dashboard Shell (Week 4)

This is the dashboard shell for my SpendWise capstone project. It uses
CSS Grid and Flexbox to build a modern dashboard layout. No JavaScript
yet — just the visual structure with realistic static data.

## What's on the page

- A **sidebar** with the SpendWise logo, five navigation links
  (Dashboard, Expenses, Income, Savings, Settings) and a small footer.
- A **topbar/header** with the page title, a subtitle, a notification
  button and a user chip showing the user's initials and name.
- **Six category cards** showing realistic KSh amounts for Food,
  Transport, Rent, Entertainment, Savings and Utilities, each with a
  short trend note.
- A **summary row** with three boxes: Total Spent, Budget Left,
  Savings Rate.

## How the layout works

- The **overall page** uses CSS **Grid**: `grid-template-columns: 240px 1fr`
  so the sidebar takes 240px and the main area fills the rest.
- The **card grid** uses CSS Grid with `repeat(auto-fit, minmax(220px, 1fr))`
  so cards automatically fit the available width.
- The **sidebar, header, each card and the summary row** use **Flexbox**
  to arrange their inner content.
- **No absolute positioning** is used for the layout.

## Theme

All colors live in `:root` as CSS variables:

- `--brand` — brand navy
- `--accent` — green accent
- `--surface` / `--bg-page` — white card surface, page background
- `--text-primary` / `--text-secondary` — main and muted text

They are reused everywhere so the design stays consistent.

## Responsive

Below **768px** the layout collapses into a single column: the sidebar
turns into a horizontal top bar, the header stacks, and the cards
reflow into a single column. This was tested with the browser DevTools
Device Toolbar.

## Micro-interactions

Each card has `tabindex="0"` so it can be focused with the keyboard.
Cards animate on both `:hover` and `:focus` using `transform:
translateY(-4px)` and an increased `box-shadow`. The transition lasts
**200ms**, which is under the required 250ms.

## Stretch goal: Dark theme

I added a `@media (prefers-color-scheme: dark)` block that overrides
the CSS variables in `:root`, so the whole dashboard switches to a dark
palette automatically when the user's system prefers dark mode.

## Files

- `index.html` — dashboard shell structure
- `style.css` — layout, theme, responsive and animations
- `logo.png` — SpendWise logo (small square icon in the sidebar)
- `README.md` — this file

## How to open

Open `index.html` in any browser. Toggle dark mode in your OS settings
to see the dark theme.