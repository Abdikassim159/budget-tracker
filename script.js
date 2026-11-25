
/* ---------- 1. STATE (data) ---------- */
const state = {
  budget: 0,
  expenses: []   // array of { id, name, amount, category, date }
};

const currency = "KSh";
let nextId = 1;

/* ---------- 2. DOM ELEMENT REFERENCES ---------- */
const budgetInput     = document.getElementById("budget-input");
const setBudgetBtn    = document.getElementById("set-budget-btn");

const expenseForm     = document.getElementById("expense-form");
const nameInput       = document.getElementById("expense-name");
const amountInput     = document.getElementById("expense-amount");
const categoryInput   = document.getElementById("expense-category");
const dateInput       = document.getElementById("expense-date");
const formMessage     = document.getElementById("form-message");

const expensesTable   = document.getElementById("expenses-table");
const expensesTbody   = document.getElementById("expenses-tbody");
const emptyState      = document.getElementById("empty-state");

const summaryBudget   = document.getElementById("summary-budget");
const summarySpent    = document.getElementById("summary-spent");
const summaryBalance  = document.getElementById("summary-balance");
const summaryFeedback = document.getElementById("summary-feedback");
const balanceBox      = document.getElementById("balance-box");
const feedbackBox     = document.getElementById("feedback-box");

/* ---------- 3. HELPER FUNCTIONS ---------- */

function formatCurrency(amount) {
  return currency + " " + Number(amount).toLocaleString("en-KE", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  });
}

// LOOP: sum all expense amounts
function calculateTotalExpenses(list) {
  let total = 0;
  for (let i = 0; i < list.length; i++) {
    total += Number(list[i].amount);
  }
  return total;
}

// CONDITIONAL: decide status based on budget vs spent
function getBudgetStatus(budget, spent) {
  if (budget === 0) {
    return { type: "neutral", message: "Set a budget to see your status." };
  }
  const remaining = budget - spent;
  if (remaining < 0) {
    return { type: "danger", message: "⚠️ You are over budget by " + formatCurrency(Math.abs(remaining)) };
  }
  if (remaining === 0) {
    return { type: "warning", message: "⚠️ Budget fully used — no money left." };
  }
  if (remaining < budget * 0.2) {
    return { type: "warning", message: "⚠️ Only " + formatCurrency(remaining) + " left — slow down." };
  }
  return { type: "positive", message: "✅ You still have " + formatCurrency(remaining) + " left." };
}

/* ---------- 4. RENDER FUNCTIONS ---------- */

function renderSummary() {
  const totalSpent = calculateTotalExpenses(state.expenses);
  const remaining  = state.budget - totalSpent;

  summaryBudget.textContent = formatCurrency(state.budget);
  summarySpent.textContent  = formatCurrency(totalSpent);
  summaryBalance.textContent = formatCurrency(remaining);

  // reset color classes
  balanceBox.classList.remove("positive", "warning", "danger");
  feedbackBox.classList.remove("positive", "warning", "danger");

  // CONDITIONAL: add appropriate color + message
  const status = getBudgetStatus(state.budget, totalSpent);
  summaryFeedback.textContent = status.message;

  if (status.type === "danger") {
    balanceBox.classList.add("danger");
    feedbackBox.classList.add("danger");
  } else if (status.type === "warning") {
    balanceBox.classList.add("warning");
    feedbackBox.classList.add("warning");
  } else if (status.type === "positive") {
    balanceBox.classList.add("positive");
    feedbackBox.classList.add("positive");
  }
}

function renderTable() {
  // clear existing rows
  expensesTbody.innerHTML = "";

  // CONDITIONAL: show either empty state or table
  if (state.expenses.length === 0) {
    emptyState.hidden = false;
    expensesTable.hidden = true;
    return;
  }

  emptyState.hidden = true;
  expensesTable.hidden = false;

  // LOOP: build a row for each expense
  for (let i = 0; i < state.expenses.length; i++) {
    const exp = state.expenses[i];
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${exp.name}</td>
      <td>${formatCurrency(exp.amount)}</td>
      <td>${capitalize(exp.category)}</td>
      <td>${exp.date}</td>
      <td><button class="delete-btn" data-id="${exp.id}">Delete</button></td>
    `;

    expensesTbody.appendChild(row);
  }
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/* ---------- 5. EVENT HANDLERS ---------- */

// Set budget
setBudgetBtn.addEventListener("click", () => {
  const value = Number(budgetInput.value);

  // CONDITIONAL: validate input
  if (!value || value <= 0) {
    formMessage.textContent = "Please enter a valid budget amount.";
    formMessage.className = "form-message error";
    return;
  }

  state.budget = value;
  formMessage.textContent = "Budget set to " + formatCurrency(value);
  formMessage.className = "form-message success";

  budgetInput.value = "";
  renderSummary();
});

// Submit expense form
expenseForm.addEventListener("submit", (event) => {
  event.preventDefault();   // stop page reload

  const name   = nameInput.value.trim();
  const amount = Number(amountInput.value);
  const cat    = categoryInput.value;
  const date   = dateInput.value;

  // CONDITIONAL: validate
  if (!name || !amount || amount <= 0 || !date) {
    formMessage.textContent = "Please fill in all fields with valid values.";
    formMessage.className = "form-message error";
    return;
  }

  // push new expense object into the ARRAY
  state.expenses.push({
    id: nextId++,
    name: name,
    amount: amount,
    category: cat,
    date: date
  });

  formMessage.textContent = "Added: " + name + " — " + formatCurrency(amount);
  formMessage.className = "form-message success";

  expenseForm.reset();
  renderTable();
  renderSummary();
});

// Delete a row (EVENT DELEGATION on the tbody)
expensesTbody.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    const id = Number(event.target.getAttribute("data-id"));
    // LOOP: find and remove the matching expense
    for (let i = 0; i < state.expenses.length; i++) {
      if (state.expenses[i].id === id) {
        state.expenses.splice(i, 1);
        break;
      }
    }
    renderTable();
    renderSummary();
  }
});

/* ---------- 6. INITIAL RENDER ---------- */
renderTable();
renderSummary();
console.log("✅ SpendWise interactive version loaded.");