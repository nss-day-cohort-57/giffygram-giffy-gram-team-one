import { Navigation } from "./nav/NavBar.js"
import { Footer } from "./nav/Footer.js"
import { Posts } from "./feed/PostList.js"
import { MessageForm } from "./message/MessageForm.js"

let showMessageForm = false

const toggleMessageForm = () => {
    if (showMessageForm) {
        return MessageForm()
    }

    return ""
}

export const GiffyGram = () => {

    // Show main main UI
    return `
        <section class="navigation">
            ${Navigation()}
        </section>
        ${toggleMessageForm()}
        <section class="giffygram__feed">
            ${Posts()}
        </section>
        <section class="footer">
            ${Footer()}
        </section>
    `
}

document.addEventListener("displayMessageForm", event => {
    showMessageForm = true
    document.dispatchEvent(new CustomEvent("stateChanged"))
})

document.addEventListener("closeMessageForm", event => {
    showMessageForm = false
    document.dispatchEvent(new CustomEvent("stateChanged"))
})
