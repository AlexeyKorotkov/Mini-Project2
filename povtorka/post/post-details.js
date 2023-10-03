let params = new URLSearchParams(window.location.search);
let postId = params.get('id');

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(post => {
        let postDiv = document.getElementById('post');
        postDiv.className = 'post';
        postDiv.innerHTML = `
            <h2>${post.title}</h2>
            <p>ID: ${post.id}</p>
            <p>${post.body}</p>
        `;
    });

document.getElementById('loadComments').addEventListener('click', () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(response => response.json())
        .then(comments => {
            let commentsDiv = document.getElementById('comments');
            comments.forEach(comment => {
               let commentDiv = document.createElement('div');
                commentDiv.className = 'comment';
                commentDiv.innerHTML = `
                    <h3>${comment.name}</h3>
                    <p>${comment.body}</p>
                `;
                commentsDiv.appendChild(commentDiv);
            });
        });
});
