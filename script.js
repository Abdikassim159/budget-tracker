
/* ---------- 1. APPLICATION DATA (variables) ---------- */
// Use `const` for values that should not be reassigned.
const appName = "SpendWise";
const currency = "KSh";

// Use `let` for values that will change as the user interacts.
let monthlyBudget = 0;
let totalExpenses = 0;
let remainingBalance = 0;

// A list to hold expense objects (array of objects).
const expenses = [];

/* ---------- 2. REUSABLE FUNCTIONS ---------- */

/**
 * Ask the user for a number. Keeps asking until they give a valid one.
 * @param {string} message - prompt shown to the user
 * @returns {number} a valid non-negative number
 */
function getNumberFromUser(message) {
  let value = prompt(message);

  // Keep prompting if the user cancels or enters something invalid.
  while (value === null || value.trim() === "" || isNaN(Number(value)) || Number(value) < 0) {
    value = prompt(message);
  }
  return Number(value);
}

/**
 * Ask the user for a text value (like an expense name or category).
 * @param {string} message - prompt shown to the user
 * @returns {string} non-empty text
 */
function getTextFromUser(message) {
  let value = prompt(message);
  while (value === null || value.trim() === "") {
    value = prompt(message);
  }
  return value.trim();
}

/**
 * Calculate the remaining balance.
 * @param {number} budget - the user's monthly budget
 * @param {number} spent - total of all expenses
 * @returns {number} budget - spent
 */
function calculateBalance(budget, spent) {
  return budget - spent;
}

/**
 * Add up all expense amounts in the expenses array.
 * @param {Array} list - array of {name, amount, category} objects
 * @returns {number} total amount spent
 */
function calculateTotalExpenses(list) {
  let total = 0;
  for (let i = 0; i < list.length; i++) {
    total = total + list[i].amount;
  }
  return total;
}

/**
 * Format a number as currency, e.g. 28000 -> "KSh 28,000".
 * @param {number} amount
 * @returns {string}
 */
function formatCurrency(amount) {
  return currency + " " + amount.toLocaleString("en-KE");
}

/**
 * Print a clear summary to the console.
 */
function printSummary() {
  console.log("========================================");
  console.log("         " + appName + " SUMMARY        ");
  console.log("========================================");
  console.log("Monthly Budget   : " + formatCurrency(monthlyBudget));
  console.log("Total Expenses   : " + formatCurrency(totalExpenses));
  console.log("Remaining Balance: " + formatCurrency(remainingBalance));
  console.log("----------------------------------------");

  if (remainingBalance < 0) {
    console.log("⚠️  You are over budget by " + formatCurrency(Math.abs(remainingBalance)));
  } else if (remainingBalance === 0) {
    console.log("⚠️  You have exactly used your full budget.");
  } else {
    console.log("✅ You still have " + formatCurrency(remainingBalance) + " left.");
  }
  console.log("========================================");
}

/* ---------- 3. MAIN FLOW ---------- */

function startSpendWise() {
  console.log("👋 Welcome to " + appName + "!");

  // Collect the monthly budget
  monthlyBudget = getNumberFromUser("What is your monthly budget (" + currency + ")?");

  // Collect expenses in a loop until the user cancels
  let keepGoing = true;
  while (keepGoing) {
    const name = getTextFromUser("Expense name (or Cancel to finish):");
    const amount = getNumberFromUser("Amount spent on '" + name + "' (" + currency + "):");
    const category = getTextFromUser("Category (Food, Transport, Rent, etc.):");

    expenses.push({ name: name, amount: amount, category: category });
    console.log("✔ Added: " + name + " — " + formatCurrency(amount) + " [" + category + "]");

    keepGoing = confirm("Add another expense?");
  }

  // Calculations using reusable functions
  totalExpenses = calculateTotalExpenses(expenses);
  remainingBalance = calculateBalance(monthlyBudget, totalExpenses);

  // Show results
  printSummary();

  // Also show the raw data for reference
  console.log("Raw expense data:", expenses);
}

// Kick off the app when the page loads
startSpendWise();