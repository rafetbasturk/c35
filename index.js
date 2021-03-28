const ham = document.querySelector(".header--ham")
const close = document.querySelector(".header--close")
const nav = document.querySelector("nav")

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("header--ham")) {
        ham.style.display = "none"
        close.style.display = "block"
        nav.style.display = "flex"
        nav.classList.add("fade-in")
    } else if (e.target.classList.contains("header--close")) {
        ham.style.display = "block"
        close.style.display = "none"
        nav.style.display = "none"
        nav.classList.remove("fade-in")
    }
})