<?php
require 'db.php';

// Fetch current spending limit
$limit_stmt = $pdo->query("SELECT limit_amount FROM spending_limit ORDER BY set_date DESC LIMIT 1");
$current_limit = $limit_stmt->fetch(PDO::FETCH_ASSOC)['limit_amount'] ?? 0;

// Handle form submissions
if (isset($_POST['add_expense'])) {
    $amount = $_POST['amount'];
    $category = $_POST['category'];
    $expense_date = $_POST['expense_date'];

    $stmt = $pdo->prepare("INSERT INTO expenses (amount, category, expense_date) VALUES (?, ?, ?)");
    $stmt->execute([$amount, $category, $expense_date]);
    header("Location: add_expense.php");
    exit();
} elseif (isset($_POST['set_limit'])) {
    $limit_amount = $_POST['limit_amount'];
    $pdo->prepare("INSERT INTO spending_limit (limit_amount, set_date) VALUES (?, ?)")
        ->execute([$limit_amount, date('Y-m-d')]);
    header("Location: add_expense.php");
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Expense</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
        <a class="navbar-brand" href="index.html">Expense Tracker</a>
        <div class="navbar-nav">
            <a class="nav-link" href="index.html">Home</a>
            <a class="nav-link" href="add_expense.php">Add Expense</a>
            <a class="nav-link" href="analyze_expense.php">Analyze Expense</a>
        </div>
    </div>
</nav>


    <div class="container mt-5">
        <h1 class="mb-4 text-center">Add Expense</h1>

        <!-- Add Expense Form -->
        <form class="row g-3" action="add_expense.php" method="POST">
            <div class="col-md-4">
                <label for="amount" class="form-label">Amount</label>
                <input type="number" class="form-control" id="amount" name="amount" required>
            </div>
            <div class="col-md-4">
                <label for="category" class="form-label">Category</label>
                <input type="text" class="form-control" id="category" name="category" required>
            </div>
            <div class="col-md-4">
                <label for="expense_date" class="form-label">Date</label>
                <input type="date" class="form-control" id="expense_date" name="expense_date" required>
            </div>
            <div class="col-12">
                <button type="submit" name="add_expense" class="btn btn-primary">Add Expense</button>
            </div>
        </form>

        <!-- Set Monthly Spending Limit -->
        <div class="mt-5">
            <h3>Set Monthly Spending Limit</h3>
            <form action="add_expense.php" method="POST">
                <div class="mb-3">
                    <label for="limit_amount" class="form-label">Spending Limit ($)</label>
                    <input type="number" class="form-control" id="limit_amount" name="limit_amount" value="<?php echo $current_limit; ?>" required>
                </div>
                <button type="submit" name="set_limit" class="btn btn-secondary">Update Limit</button>
            </form>
        </div>
    </div>
</body>
</html>
