CREATE DATABASE expense_tracker;

USE expense_tracker;

CREATE TABLE expenses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(255),
    amount DECIMAL(10, 2),
    expense_date DATE
);




CREATE TABLE spending_limit (
    id INT AUTO_INCREMENT PRIMARY KEY,
    limit_amount DECIMAL(10, 2) NOT NULL,
    set_date DATE NOT NULL
);
