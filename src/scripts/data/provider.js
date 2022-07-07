const apiURL = "http://localhost:8088"
const applicationElement = document.querySelector(".giffygram")


const applicationState = {
    currentUser: {},
    feed: {
        chosenUser: null,
        displayFavorites: false,
        displayMessages: false
    },
    users: []
}

export const fetchUsers = () => {
    return fetch(`${apiURL}/users`)
    .then((response) => response.json())
    .then((users) => {applicationState.users = users})
}

export const getUsers = () => {
    return applicationState.users.map(user => ({...user}))
}
