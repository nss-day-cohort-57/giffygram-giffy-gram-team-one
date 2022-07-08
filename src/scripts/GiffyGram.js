import { Posts } from "./feed/PostList.js"

export const GiffyGram = () => {

    // Show main main UI
    return `
        <h1>Giffygram</h1>
        <section class="navigation">

        </section>
            ${Posts()}
        <section class="footer">
            todo - footer funtion here
        </section>
    `
}
