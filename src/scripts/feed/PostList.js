import { getPosts } from "../data/provider.js"
import { PostEntry } from "./PostList.js"

export const Posts = () => {
    const posts = getPosts()

    return `
    <div class="giffygram__feed">
        <div class="miniMode" id="miniMode">Have a gif to post?</div>
        ${post.map(post => 
            `
            <section class="post">
                <header>
                    <h2 class="post__title">${post.title}</h2>
                </header>
                <img class="post__image" src="${post.imageURL}">
                <div class="post__description">${post.description}</div>
                <div class="post__tagline">
                    " Posted by "
                    <a href="#" class="profileLink" id="profile--${post.userId}"></a>
                </div>
            </section>
            `
            ).join("")}
    </div>
    `
}