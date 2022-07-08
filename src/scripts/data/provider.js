const apiURL = "http://localhost:8088"
const applicationElement = document.querySelector(".giffygram")


const applicationState = {
    currentUser: {},
    feed: {
        chosenUser: null,
        displayFavorites: false,
        displayMessages: false
    },
    users: [],
    posts: [],
    messages: [],
    favorites: []
}

export const fetchUsers = () => {
    return fetch(`${apiURL}/users`)
        .then((response) => response.json())
        .then((users) => { applicationState.users = users })
}

export const getUsers = () => {
    return applicationState.users.map(user => ({ ...user }))
}

export const fetchPosts = () => {
    return fetch(`${apiURL}/posts`)
        .then((response) => response.json())
        .then((posts) => { applicationState.posts = posts })
}

export const getPosts = () => {
    return applicationState.posts.map(post => ({ ...post }))
}

export const sendPosts = (postData) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postData)
    }

    return fetch(`${apiURL}/posts`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const deletePosts = (id) => {
    return fetch(`${apiURL}/posts/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}

export const fetchMessages = () => {
    return fetch(`${apiURL}/messages`)
        .then((response) => response.json())
        .then((messages) => { applicationState.messages = messages })
}

export const getMessages = () => {
    return applicationState.messages.map(message => ({ ...message }))
}

export const sendMessages = (messageData) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(messageData)
    }

    return fetch(`${apiURL}/messages`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const fetchFavorites = () => {
    return fetch(`${apiURL}/favorites`)
        .then((response) => response.json())
        .then((favorites) => { applicationState.favorites = favorites })
}

export const getFavorites = () => {
    return applicationState.favorites.map(favorite => ({ ...favorite }))
}

export const sendFavorites = (favoriteData) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(favoriteData)
    }

    return fetch(`${apiURL}/favorites`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const deleteFavorites = (id) => {
    return fetch(`${apiURL}/favorites/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}
