document.addEventListener("DOMContentLoaded", () => {
    loadBlogs();
});

function loadBlogs() {
    fetch('get_blogs.php')
        .then(response => response.json())
        .then(blogs => {
            const blogContainer = document.getElementById('blogContainer');
            blogContainer.innerHTML = '';

            blogs.forEach(blog => {
                const blogDiv = document.createElement('div');
                blogDiv.classList.add('blog');

                blogDiv.innerHTML = `
                    <h2>${blog.title}</h2>
                    <p>${blog.content.substring(0, 100)}...</p>
                    <button onclick="upvote(${blog.id})">Upvote (${blog.upvotes})</button>
                    <a href="blog_detail.html?id=${blog.id}">View Details</a>
                `;

                blogContainer.appendChild(blogDiv);
            });
        });
}

function upvote(blogId) {
    fetch(`upvote.php?id=${blogId}`, {
        method: 'POST'
    }).then(() => {
        loadBlogs(); // Reload blogs to update upvote count
    });
}
