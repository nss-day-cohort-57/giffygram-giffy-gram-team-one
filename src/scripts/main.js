import { GiffyGram } from "./GiffyGram.js"
import { fetchUsers } from "./data/provider.js"
import { LoginForm } from "./auth/Login.js"

const applicationElement = document.querySelector(".giffygram")

export const renderApp = () => {
    const user = parseInt(localStorage.getItem("gg_user"))

    if (user) {
        fetchUsers()
        .then(() => {applicationElement.innerHTML = GiffyGram()})
    } else {
        fetchUsers()
        .then(() => {applicationElement.innerHTML = LoginForm()})
    }
}

renderApp()

document.addEventListener("stateChanged", event => {
    renderApp()
})
