<?php
include 'db.php';

if (isset($_GET['id'])) {
    $id = $_GET['id'];

    // Update upvote count
    $stmt = $conn->prepare("UPDATE blogs SET upvotes = upvotes + 1 WHERE id = ?");
    $stmt->bind_param("i", $id);

    if ($stmt->execute()) {
        echo "Upvote successful!";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
}
$conn->close();
?>
