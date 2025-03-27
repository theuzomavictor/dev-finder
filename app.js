fetch("https://api.github.com/users/theuzomavictor")
    .then(response => response.json())
    .then(data => console.log(data))