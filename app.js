
const formEl = document.querySelector(".form")
const btnEl = document.getElementById("btn-el")
const mainEl = document.getElementById("main-container")

formEl.addEventListener("submit", (e) => {
    e.preventDefault()
    const inputEl = document.getElementById("input-el").value
    fetch(`https://api.github.com/users/${inputEl}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            mainEl.innerHTML = `
                    <section class="details-container bg-[#1f2a48] p-5 rounded-md">
                      <div class="profile-details flex gap-6 mb-6 items-center">
                        <img src="${data.avatar_url}" alt="placeholder profile picture" class="rounded-full w-18 h-18">
                        <div class="profile-details-text">
                          <h2 class="text-2xl">${data.name}</h2>
                          <p class="login-name text-[#0079fe]" id="login-name">@${data.login}</p>
                          <p>Joined: ${data.created_at.slice(0, 10)}</p>
                        </div>
                      </div>
                      <p class="mb-6">${data.bio}</p>
                      <div class="bg-[#141c2f] flex mx-auto justify-between px-4 py-3 rounded-md    text-center mb-8">
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
                        <div class="flex items-center gap-6 mb-3">
                          <img src="./images/icon-location.svg" alt="Location icon svg">
                          <p class="pl-1">${data.location}</p>
                        </div>
                        <div class="flex items-center gap-6 mb-3 max-w-full">
                          <img src="./images/icon-website.svg" alt="website icon svg">
                          <p class="break-words whitespace-normal overflow-hidden">${data.blog}</p>
                        </div>
                      </section>
                      <section class="right">
                        <div class="flex items-center gap-6 mb-3">
                          <img src="./images/icon-twitter.svg" alt="twitter icon svg">
                          <p>${data.twitter_username}</p>
                        </div>
                        <div class="flex items-center gap-6 mb-3">
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
