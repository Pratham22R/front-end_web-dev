let totalAmount = 0;

// Add Expense Form Submission
document.getElementById('expense-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const amount = parseFloat(document.getElementById('amount').value);
    const category = document.getElementById('category').value;
    const expenseDate = document.getElementById('expense-date').value;

    // Update total amount
    totalAmount += amount;
    document.getElementById('total-amount').textContent = `Total Available: ₹${totalAmount}`;

    // Save expense to database
    fetch('add-expense.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, category, expenseDate })
    });

    this.reset();
});

// Show Add Expense Section
document.getElementById('add-expense-btn').addEventListener('click', () => {
    document.getElementById('add-expense-section').classList.remove('hidden');
    document.getElementById('analyze-expense-section').classList.add('hidden');
});

// Show Analyze Expense Section
document.getElementById('analyze-expense-btn').addEventListener('click', () => {
    document.getElementById('analyze-expense-section').classList.remove('hidden');
    document.getElementById('add-expense-section').classList.add('hidden');
    loadExpenses();
});

// Load Expenses for Analysis
function loadExpenses() {
    fetch('get-expenses.php')
    .then(response => response.json())
    .then(expenses => {
        populateTable(expenses);
        generateChart(expenses);
    });
}

// Populate Table
function populateTable(expenses) {
    const tableBody = document.querySelector('#expense-table tbody');
    tableBody.innerHTML = ''; // Clear existing rows

    expenses.forEach(expense => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${expense.amount}</td>
            <td>${expense.category}</td>
            <td>${expense.expense_date}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Generate Chart
function generateChart(expenses) {
    const data = {};
    expenses.forEach(expense => {
        data[expense.category] = (data[expense.category] || 0) + parseFloat(expense.amount);
    });

    const ctx = document.getElementById('expenseChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: Object.keys(data),
            datasets: [{
                data: Object.values(data),
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
            }]
        }
    });
}
