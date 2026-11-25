# SpendWise — Interactive Dashboard (Week 7)

SpendWise is my capstone budgeting project. In Week 4 I built the
dashboard shell (HTML + CSS). In Week 6 I added JavaScript logic that
ran in the console. This week I made the whole app interactive on the
page — you can set a budget, add expenses, delete them, and see totals
update instantly.

## What I improved this week

- Moved all results from the console to the actual webpage.
- Added a budget setup bar at the top.
- The expense form now validates input and shows success/error messages.
- Expenses appear in a real HTML table, with a delete button per row.
- The summary row (Budget / Spent / Remaining) updates every time data changes.
- The status message changes colour depending on how healthy the budget is.

## How conditionals are used

The function `getBudgetStatus(budget, spent)` uses a chain of
`if / else if / else` to choose the right message:

- No budget set → neutral message.
- Over budget → red "⚠️ You are over budget by ..." message.
- Exactly zero → orange warning.
- Less than 20% left → orange "slow down" message.
- Otherwise → green "You still have ... left."

The form and budget handlers also use `if` to reject empty or invalid
input before it touches the data.

## How arrays are used

All expenses live in one array of objects:

    const state = { budget: 0, expenses: [] };

Each time the user adds an expense, I push a new object:

    state.expenses.push({ id, name, amount, category, date });

When the user clicks Delete, I find the matching id and use
`state.expenses.splice(i, 1)` to remove it. Nothing is stored in
individual variables like `expense1` or `expense2` — every record
lives in the array.

## How the DOM is updated

`renderTable()` and `renderSummary()` are the two functions that paint
the page:

- `renderTable()` clears the `<tbody>`, then loops through
  `state.expenses` and creates a `<tr>` for each one. It also toggles
  the empty-state paragraph and the table depending on whether there
  are expenses.
- `renderSummary()` calculates the totals and writes them into the
  three summary boxes using `textContent`. It also adds or removes
  CSS classes (`positive`, `warning`, `danger`) to colour-code the
  remaining balance and the status message.

## How user interactions are handled

I use three `addEventListener` calls:

1. **Set Budget button** (`click`) — reads the budget input, validates
   it, updates `state.budget`, and re-renders the summary.
2. **Expense form** (`submit`) — calls `event.preventDefault()` so the
   page does not reload, validates the inputs, pushes a new expense
   into the array, resets the form, and re-renders the table and
   summary.
3. **Expenses table body** (`click`, using event delegation) — listens
   for clicks on any `.delete-btn` inside the table, finds the matching
   expense by its `data-id`, removes it, and re-renders.

Event delegation is important because rows are created dynamically —
without it, the delete buttons would only work for rows that existed
when the page loaded.

## Challenges and how I solved them

- **Form kept reloading the page.** The first time I submitted the
  form, the browser cleared everything. I added
  `event.preventDefault()` at the top of the submit handler to stop
  the default reload.
- **Delete buttons didn't work on new rows.** I initially attached
  click listeners directly to each button, but rows added after the
  page loaded didn't have listeners. I fixed this by using event
  delegation: one listener on the `<tbody>` that checks
  `event.target.classList.contains("delete-btn")`.
- **Amounts showed as raw numbers.** I used
  `Number(...).toLocaleString("en-KE")` inside `formatCurrency()` so
  `28000` becomes `KSh 28,000`.
- **Empty table looked broken.** I added an empty-state paragraph and
  toggle it with `hidden` depending on `state.expenses.length`.

## Files

- `index.html` — dashboard structure with the interactive form, table
  and summary boxes
- `style.css` — Week 4 styling plus Week 7 additions (budget bar,
  delete button, colour-coded summary boxes, empty state)
- `script.js` — all interactive logic (state, conditionals, loops,
  DOM rendering, event listeners)
- `README.md` — this file

## How to test

1. Open `index.html` in a browser.
2. Set a budget, e.g. `40000`, click **Set Budget**.
3. Add an expense (e.g. Groceries, 1200, Food, today's date).
4. Watch the table grow and the summary update.
5. Add more expenses to see the status message change colour:
   - Keep spent < 80% → green
   - Spend 80–100% → orange warning
   - Spend more than budget → red over-budget
6. Click **Delete** on any row — the totals update instantly.