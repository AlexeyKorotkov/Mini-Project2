
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let usersDiv = document.getElementById('users');
        users.forEach(user => {
            let userDiv = document.createElement('div');
            userDiv.className = 'user';
            userDiv.innerHTML = `
                <h2>${user.name}</h2>
                <p>ID: ${user.id}</p>
                <a href="user-details.html?id=${user.id}">details</a>
            `;
            usersDiv.appendChild(userDiv);
            document.body.appendChild(userDiv)
        });
    });
