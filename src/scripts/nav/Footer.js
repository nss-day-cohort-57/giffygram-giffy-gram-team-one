import { getFavorites, getUsers } from "../data/provider.js";

export const Footer = () => {
    return `<nav class="footer">
                <div class="footer__item">
                    Posts by user ${userHTML()}
                </div>
                <div class="footer__item">
                    Show only favorites <input type="checkbox" value="favoriteCheck" />
                </div>
            </nav>
    `
}

const userHTML = () => {
    const users = getUsers()
    let HTML = `<select id="user-menu">`
    HTML += `<option value="0" id="user--0">Select a user...</option>`
    for (const user of users) {
        HTML += `<option name="sender" value="${user.id}" id="user--${user.id}">${user.name}</option>`
    }

    HTML += "</select>"

    return HTML
}

