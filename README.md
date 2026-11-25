# SpendWise — JavaScript Foundation (Week 6)

This is my SpendWise capstone project. In Week 4 I built the dashboard
shell with HTML and CSS. In Week 6 I added JavaScript so the app can
actually process budgeting data.

## What SpendWise does

SpendWise is a small budgeting tool. It asks the user for a monthly
budget, then lets them enter expenses one by one (name, amount,
category). After they finish, it calculates the total spent and the
remaining balance, and prints a clear summary in the browser console.

## JavaScript concepts implemented

- Variables (`const` and `let`)
- Data types: strings, numbers, arrays, objects
- User input via `prompt()` and `confirm()`
- Type conversion with `Number()` and `isNaN()`
- Arithmetic calculations
- Reusable functions with parameters and return values
- Loops (`while`, `for`)
- Console output with `console.log()`

## How variables are used

At the top of `script.js` I declare:

- `appName` and `currency` with `const` because they never change.
- `monthlyBudget`, `totalExpenses` and `remainingBalance` with `let`
  because they get updated after the user provides data.
- `expenses` as a `const` array because the array itself is not
  replaced — I only push new items into it.

## How user input is collected

I use `prompt()` for text and numbers, and `confirm()` to ask whether
the user wants to add another expense. Two small helper functions
(`getNumberFromUser` and `getTextFromUser`) keep asking until the user
enters something valid, so bad input is not accepted.

## How calculations are performed

The main calculation is:

    remainingBalance = monthlyBudget - totalExpenses;

`totalExpenses` is computed by a function called `calculateTotalExpenses`
that loops through the `expenses` array and adds up each `amount`. The
balance is calculated by `calculateBalance(budget, spent)`.

## How functions help organize the code

Instead of writing everything in one big block, I split the logic into
small functions that each do one job:

- `getNumberFromUser()` — collect and validate a number
- `getTextFromUser()` — collect and validate text
- `calculateBalance()` — subtract expenses from the budget
- `calculateTotalExpenses()` — add up all amounts
- `formatCurrency()` — display numbers as "KSh 28,000"
- `printSummary()` — print the final summary

This makes the code easy to read and easy to reuse.

## Files

- `index.html` — dashboard shell (from Week 4) plus the script tag
- `style.css` — styling from Week 4
- `script.js` — all JavaScript logic (new this week)
- `README.md` — this file

## How to test

1. Open `index.html` in a browser.
2. Press F12 (or right-click → Inspect) and open the **Console** tab.
3. Answer the prompt for your monthly budget (e.g. 40000).
4. Enter an expense name (e.g. "Groceries"), amount (e.g. 1200),
   category (e.g. "Food").
5. Click **OK** to add another, or **Cancel** to finish.
6. The final summary appears in the console.