

export const Navigation = () => {
    return `<nav class= "navigation">
                <div class="navigation_item navigation_icon">
                    <img src="/images/pb.png" alt="Giffygram icon" id="logo">
                </div>
                <div class="navigation__item navigation__name">Giffygram</div>
                <div class="navigation__item navigation__message">
                    <img id="directMessageIcon" src="/images/fountain-pen.svg" alt="Direct message">
                    <div class="notification__count"> </div>
                </div>
                <div class="navigation__item navigation__logout">
                    <button id="logout" class="fakeLink">Logout</button>
                </div>
            </nav>`
}


document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "logout") {
        let foundUser = null

        localStorage.setItem("gg_user", foundUser)

        document.dispatchEvent(new CustomEvent("stateChanged")) //.querySelector(".giffygram") - put this back create the GiffyGram module
        }
    })



            
//need to get current user 