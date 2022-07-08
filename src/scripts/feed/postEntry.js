import { getPosts, sendPosts } from "../data/provider.js"
const applicationElement = document.querySelector(".giffygram")

export const PostEntry = () => {
    return `
            <div class="newPost">
                <div>
                    <input value name="postTitle" class="newPost__input" type="text placeholder="Title">
                </div>
                <div>
                    <input value name="postURL" class="newPost__input" type="text" placeholder="URL of gif">
                </div>
                <textarea name="postDescription" class="newPost__input newPost__description" placeholder="Story behind your gif..."></textarea>
                <button id="newPost__submit">Save</button>
                <button id="newPost__cancel">Cancel</button>
            </div>`
}

applicationElement.addEventListener("click", event =>{
    if (event.target.id === "newPost__submit") {
        const postIndex = getPosts().length
        const newPost = {}

        newPost.id = postIndex

        newPost.title = document.querySelector("input[name='postTitle']").value
        newPost.imageURL = document.querySelector("input[name='postURL']").value
        newPost.description = document.querySelector("input[name='postDescription']").value
        newPost.timestamp = Date.now()

        sendPosts(newPost)


    }
})