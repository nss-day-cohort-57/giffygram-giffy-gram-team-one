import { getUsers } from "../data/provider.js"

const applicationElement = document.querySelector(".giffygram")

const getUserNamebyId = (userId, users) => {
    const foundUser = users.find(user => user.id === userId)
    
    return foundUser.name
}

export const MessageForm = () => {
    const users = getUsers()

    return `
    <div class="directMessage">
        <h3>Direct Message</h3>
        <div>
            Recipient:
            <select name="directMessage__userSelect" class="message__input">
                <option>Choose a Recipient...</option>
                ${users.map(user => 
                    `<option value="messageRecipient--${user.id}">${getUserNamebyId(user.id, users)}</option>`
                    ).join("")}
            </select>
        </div>
        <div>
            <label for="message">Message:</label>
            <input name="message" class="message__input" type="text" placeholder="Message to user">
        </div>
        <button id="directMessage__submit">Save</button>
        <button id="directMessage__cancel">Cancel</button>
        <button id="directMessage__close">x</button>
    </div>
    `
}

document.addEventListener("click", event => {
    if (event.target.id === "directMessage__close") {
        document.dispatchEvent(new CustomEvent("closeMessageForm"))
    }
})

document.addEventListener("click", event => {
    if (event.target.id === "directMessage__Submit") {
        
    }
})