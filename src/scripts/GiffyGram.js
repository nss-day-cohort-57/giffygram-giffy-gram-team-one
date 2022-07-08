import { Navigation } from "./nav/NavBar.js"
import { Footer } from "./nav/Footer.js"
import { Posts } from "./feed/PostList.js"

export const GiffyGram = () => {

    // Show main main UI
    return `
        <section class="navigation">
            ${Navigation()}
        </section>
        <section class="giffygram__feed">
            ${Posts()}
        </section>
        <section class="footer">
            ${Footer()}
        </section>
    `
}
