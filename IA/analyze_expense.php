<?php
require 'db.php';

// Handle month selection
$selected_month = isset($_GET['month']) ? $_GET['month'] : date('Y-m');

// Fetch current spending limit
$limit_stmt = $pdo->query("SELECT limit_amount FROM spending_limit ORDER BY set_date DESC LIMIT 1");
$current_limit = $limit_stmt->fetch(PDO::FETCH_ASSOC)['limit_amount'] ?? 0;

// Calculate total spending for the selected month
$month_stmt = $pdo->prepare("SELECT SUM(amount) AS total_spent FROM expenses WHERE DATE_FORMAT(expense_date, '%Y-%m') = ?");
$month_stmt->execute([$selected_month]);
$total_spent = $month_stmt->fetch(PDO::FETCH_ASSOC)['total_spent'] ?? 0;

// Calculate percentage used
$percentage = ($current_limit > 0) ? min(($total_spent / $current_limit) * 100, 100) : 0;

// Fetch all expenses for the selected month
$expenses_stmt = $pdo->prepare("SELECT * FROM expenses WHERE DATE_FORMAT(expense_date, '%Y-%m') = ?");
$expenses_stmt->execute([$selected_month]);
$expenses = $expenses_stmt->fetchAll(PDO::FETCH_ASSOC);

// Prepare data for Google Pie Chart
$category_stmt = $pdo->prepare("SELECT category, SUM(amount) AS total FROM expenses WHERE DATE_FORMAT(expense_date, '%Y-%m') = ? GROUP BY category");
$category_stmt->execute([$selected_month]);
$category_data = $category_stmt->fetchAll(PDO::FETCH_ASSOC);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Analyze Expense</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script>
        // Load Google Charts
        google.charts.load('current', { packages: ['corechart'] });
        google.charts.setOnLoadCallback(drawChart);

        // Draw Pie Chart with category data
        function drawChart() {
            var data = google.visualization.arrayToDataTable([
                ['Category', 'Amount'],
                <?php
                foreach ($category_data as $row) {
                    echo "['" . $row['category'] . "', " . $row['total'] . "],";
                }
                ?>
            ]);

            var options = {
                title: 'Expense Breakdown by Category',
                pieHole: 0.4,
                width: '100%',
                height: 400
            };

            var chart = new google.visualization.PieChart(document.getElementById('piechart'));
            chart.draw(data, options);
        }
    </script>
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
        <!-- Month Selection -->
        <h3>Select Month</h3>
        <form method="GET" action="analyze_expense.php" class="row g-3 mb-4">
            <div class="col-auto">
                <input type="month" name="month" class="form-control" value="<?php echo $selected_month; ?>" required>
            </div>
            <div class="col-auto">
                <button type="submit" class="btn btn-primary">View</button>
            </div>
        </form>

        <!-- Monthly Spending Progress Bar -->
        <h3>Monthly Spending Status</h3>
        <?php if ($current_limit > 0): ?>
            <div class="progress" style="height: 30px;">
                <div class="progress-bar <?php echo $percentage >= 80 ? 'bg-danger' : 'bg-success'; ?>" 
                     role="progressbar" 
                     style="width: <?php echo $percentage; ?>%;" 
                     aria-valuenow="<?php echo $percentage; ?>" 
                     aria-valuemin="0" 
                     aria-valuemax="100">
                    <?php echo round($percentage, 2); ?>%
                </div>
            </div>
            <p class="mt-2">
                You have spent $<?php echo number_format($total_spent, 2); ?> out of your $<?php echo number_format($current_limit, 2); ?> limit for <?php echo date('F Y', strtotime($selected_month)); ?>.
            </p>
        <?php else: ?>
            <p class="text-muted">Set a monthly spending limit to track your progress.</p>
        <?php endif; ?>

        <!-- Pie Chart -->
        <h3 class="mt-5">Expense Breakdown by Category</h3>
        <div id="piechart" style="width: 100%; height: 400px;"></div>

        <!-- Expense Table -->
        <h3 class="mt-5">All Expenses for <?php echo date('F Y', strtotime($selected_month)); ?></h3>
        <table class="table table-striped mt-3">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Category</th>
                    <th>Amount ($)</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($expenses as $expense): ?>
                    <tr>
                        <td><?php echo $expense['id']; ?></td>
                        <td><?php echo $expense['category']; ?></td>
                        <td><?php echo number_format($expense['amount'], 2); ?></td>
                        <td><?php echo date('d M Y', strtotime($expense['expense_date'])); ?></td>
                    </tr>
                <?php endforeach; ?>
                <?php if (empty($expenses)): ?>
                    <tr>
                        <td colspan="4" class="text-center">No expenses recorded for this month.</td>
                    </tr>
                <?php endif; ?>
            </tbody>
        </table>
    </div>
</body>
</html>
