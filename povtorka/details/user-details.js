let params = new URLSearchParams(window.location.search);
let userId = params.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
        let userDiv = document.getElementById('user');
        userDiv.className = 'user';
        userDiv.innerHTML = `
           ' <h2>${user.name}</h2>'
            <p>ID: ${user.id}</p>
            <p>Email: ${user.email}</p>
           
        `;
    });

document.getElementById('loadPosts').addEventListener('click', () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(response => response.json())
        .then(posts => {
            let postsDiv = document.getElementById('posts');
            posts.forEach(post => {
                let postDiv = document.createElement('div');
                postDiv.className = 'post';
                postDiv.innerHTML = `
                    <h3>${post.title}</h3>
                    <a href="post-details.html?id=${post.id}">Details</a>
                `;
                postsDiv.appendChild(postDiv);
            });
        });
});
