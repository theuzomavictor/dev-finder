
const formEl = document.querySelector(".form")
const btnEl = document.getElementById("btn-el")
const mainEl = document.getElementById("main-container")

formEl.addEventListener("submit", (e) => {
    e.preventDefault()
    const inputEl = document.getElementById("input-el").value
    console.log(inputEl)
    fetch(`https://api.github.com/users/${inputEl}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            mainEl.innerHTML = `
                <section class="details-container">
                    <div class="profile-details">
                        <img src="${data.avatar_url}" alt="placeholder profile picture" class="img">
                        <div class="profile-details-text">
                            <h2>${data.name}</h2>
                            <p class="login-name">@${data.login}</p>
                            <p>${data.created_at.slice(0, 10)}</p>
                        </div>
                    </div>
                    <p class="bio">${data.bio}</p>
                    <div class="engagement">
                        <div class="repo">
                            <h3>Repo</h3>
                            <p>${data.public_repos}</p>
                        </div>
                        <div class="followers">
                            <h3>Followers</h3>
                            <p>${data.followers}</p>
                        </div>
                        <div class="following">
                            <h3>Following</h3>
                            <p>${data.following}</p>
                        </div>
                    </div>
                    <div class="more-details">
                        <section class="left">
                            <div>
                                <img src="./images/icon-location.svg" alt="Location icon svg">
                                <p class="san-frn">${data.location}</p>
                            </div>
                            <div>
                                <img src="./images/icon-website.svg" alt="website icon svg">
                                <p>${data.blog}</p>
                            </div>
                        </section>
                        <section class="right">
                            <div>
                                <img src="./images/icon-twitter.svg" alt="twitter icon svg">
                                <p>@${data.twitter_username}</p>
                            </div>
                            <div>
                                <img src="./images/icon-company.svg" alt="Location icon svg">
                                <p>@${data.company}</p>
                            </div>
                        </section>
                    </div>
                </section>
            `
        })
        formEl.reset()
})
