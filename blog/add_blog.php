<?php
// add_blog.php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $title = $_POST['title'];
    $content = $_POST['content'];
    $unique_id = uniqid('blog_', true);

    // Prepare and bind the query to insert a new blog post
    $stmt = $conn->prepare("INSERT INTO blogs (unique_id, title, content) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $unique_id, $title, $content);

    if ($stmt->execute()) {
        // Redirect to the main page after successful addition
        header("Location: index.html");
        exit(); // Ensure no further code is executed
    } else {
        echo "Error adding blog: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>
