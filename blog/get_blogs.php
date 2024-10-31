<?php
include 'db.php';

$result = $conn->query("SELECT * FROM blogs");

$blogs = [];
while ($row = $result->fetch_assoc()) {
    $blogs[] = $row;
}

header('Content-Type: application/json');
echo json_encode($blogs);

$conn->close();
?>
