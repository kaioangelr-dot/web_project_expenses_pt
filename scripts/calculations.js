let budgetValue = 0;
let totalExpensesValue = 0;
let balanceColor = "green";

const expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

for (let i = 0; i < expenseEntries.length; i++) {
  totalExpensesValue += expenseEntries[i][1];
}

function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0;
  }
  return totalExpensesValue / expenseEntries.length;
}

function calculateBalance() {
  return budgetValue - totalExpensesValue;
}

function updateBalanceColor() {
  if (budgetValue - totalExpensesValue < 0) {
    balanceColor = "red";
  } else if (budgetValue - totalExpensesValue < (budgetValue * 25) / 100) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}

function calculateCategoryExpenses(category) {
  let total = 0;
  for (let i = 0; i < expenseEntries.length; i++) {
    if (category === expenseEntries[i][0]) {
      total += expenseEntries[i][1];
    }
  }
  return total;
}

function calculateLargestCategory() {
  let categoriesTotals = [
    ["groceries", calculateCategoryExpenses("groceries")],
    ["restaurants", calculateCategoryExpenses("restaurants")],
    ["transport", calculateCategoryExpenses("transport")],
    ["home", calculateCategoryExpenses("home")],
    ["subscriptions", calculateCategoryExpenses("subscriptions")],
  ];
  let maximum = 0;
  let name = "";
  for (let i = 0; i < categoriesTotals.length; i++) {
    if (categoriesTotals[i][1] > maximum) {
      maximum = categoriesTotals[i][1];
      name = categoriesTotals[i][0];
    }
  }
  return name;
}

function addExpenseEntry([category, value]) {
  expenseEntries.push([category, value]);
  totalExpensesValue += value;
}
