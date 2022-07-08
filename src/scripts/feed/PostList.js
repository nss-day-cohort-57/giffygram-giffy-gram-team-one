import { getPosts, getUsers } from "../data/provider.js"
//import { PostEntry } from "./PostList.js"

let showForm = false

const showButtonOrForm = (showForm) => {
    if (showForm) {
        return `<div>postEntryForm</div>` //call PostEntry() when finished
    }

    return `<div class="miniMode" id="miniMode">Have a gif to post?</div>`
}

const getUserNamebyId = (userId) => {
    const users = getUsers()
    const foundUser = users.find(user => user.id === userId)
    
    return foundUser.name
}

const convertToDate = (timestamp) => {
    const date = new Date(timestamp)

    return `
        ${date.getMonth() + 1}/${date.getDay()}/${date.getFullYear()}
    `
}

export const Posts = () => {
    const posts = getPosts()

    return `
        ${showButtonOrForm(showForm)}
        ${posts.map(post => 
            `
            <section class="post">
                <header>
                    <h2 class="post__title">${post.title}</h2>
                </header>
                <img class="post__image" src="${post.imageURL}">
                <div class="post__description">${post.description}</div>
                <div class="post__tagline">
                    " Posted by "
                    <a href="#" class="profileLink" id="profile--${post.userId}">${getUserNamebyId(post.userId)}</a>
                    " On ${convertToDate(post.timestamp)} "
                </div>
                <div class="post__actions">
                    <div>
                        <img id="favoritePost--37" class="actionIcon" src="http://giffygram.nss.team/images/favorite-star-blank.svg">
                    </div>
                </div>
            </section>
            `
            ).join("")}
    `
}

document.addEventListener("click", event => {
    if (event.target.id === "miniMode") {
        showForm = true
        document.dispatchEvent(new CustomEvent("stateChanged"))
    }
})