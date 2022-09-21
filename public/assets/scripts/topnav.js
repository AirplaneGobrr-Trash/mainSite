const topnav = document.getElementsByClassName("topnav")

const pagesLeft = {
    "Home": "/",
    "About": "/about",
    "Contact": "/contact",
    "Projects": "/projects",
    "Pingcord": "/pingcord"
}
const pagesRight = {
    "Login": "/login",
    "Register": "/register"
}

for (var page in pagesLeft) {
    var a = document.createElement("a")
    a.href = pagesLeft[page]
    //if we are on the current page, make it active
    if (window.location.pathname == pagesLeft[page]) a.className = "active";
    a.classList.add("left")
    a.innerHTML = page
    topnav[0].appendChild(a)
}

for (var page in pagesRight) {
    var a = document.createElement("a")
    a.href = pagesRight[page]
    //if we are on the current page, make it active
    if (window.location.pathname == pagesRight[page]) a.className = "active";
    a.classList.add("right")
    a.innerHTML = page
    topnav[0].appendChild(a)
}