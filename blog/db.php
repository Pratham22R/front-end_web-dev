<?php
$servername = "localhost"; // or your server name
$username = "root"; // your database username
$password = ""; // your database password (default is empty for XAMPP)
$dbname = "blog_db"; // your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}