import { getPosts, getUsers, sendFavorites, getFavorites } from "../data/provider.js"
import { PostEntry } from "./postEntry.js"

let showForm = false

const showButtonOrForm = (showForm) => {
    if (showForm) {
        return `${PostEntry()}`
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
        ${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}
    `
}
export const Favorite = () => {

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
                    Posted by 
                    <a href="#" class="profileLink" id="profile--${post.userId}">${getUserNamebyId(post.userId)}</a>
                    On ${convertToDate(post.timestamp)} 
                </div>
                <div class="post__actions">
                    <div>
                        <img id="favoritePost--${post.id}" class="actionIcon" src="http://giffygram.nss.team/images/favorite-star-blank.svg">
                    </div>
                </div>
            </section>
            `
            ).join("")}
    `
}

document.addEventListener("click", event => {
    if (event.target.id.startsWith("favoritePost--")) {
        const [,postId] = event.target.id.split("--")

        const favoriteObject = {}

        favoriteObject.id = getFavorites().length
        favoriteObject.userId = parseInt(localStorage.getItem("gg_user"))
        favoriteObject.postId = parseInt(postId)

        event.target.src = "http://giffygram.nss.team/images/favorite-star-yellow.svg"
        sendFavorites(favoriteObject)
    }
})
document.addEventListener("click", event => {
    if (event.target.id === "miniMode") {
        showForm = true
        document.dispatchEvent(new CustomEvent("stateChanged"))
    }
})

document.addEventListener("close", event => {
    showForm = false
})