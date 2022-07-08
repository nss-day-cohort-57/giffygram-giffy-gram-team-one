import { navigation } from "./NavBar.js"

export const GiffyGram = () => {

    // Show main main UI
    return `
        <h1>Giffygram</h1>
        <section class="navigation">
            ${navigation()}
        </section>
        <section class="miniMode">
            todo - add a post function here
        </section>
        <section class="giffygram__feed">
            todo - main feed function here
        </section>
        <section class="footer">
            todo - footer funtion here
        </section>
    `
}
