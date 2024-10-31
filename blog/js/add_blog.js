document.getElementById('blogForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);

    fetch('add_blog.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(result => {
        document.getElementById('addFeedback').innerText = result; // Display feedback
        document.getElementById('blogForm').reset(); // Reset the form after submission
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('addFeedback').innerText = 'Error adding blog. Please try again.';
    });
});
