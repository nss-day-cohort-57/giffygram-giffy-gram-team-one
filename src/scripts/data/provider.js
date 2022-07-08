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
    comments: [],
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

    return fetch(`${API}/posts`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const deletePosts = (id) => {
    return fetch(`${API}/posts/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}

export const fetchComments = () => {
    return fetch(`${apiURL}/comments`)
        .then((response) => response.json())
        .then((comments) => { applicationState.comments = comments })
}

export const getComments = () => {
    return applicationState.comments.map(comment => ({ ...comment }))
}

export const sendComments = (commentData) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(commentData)
    }

    return fetch(`${API}/comments`, fetchOptions)
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

    return fetch(`${API}/favorites`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const deleteFavorites = (id) => {
    return fetch(`${API}/favorites/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}
