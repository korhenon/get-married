const splash = document.getElementById("splash")

window.onload = () => {
    document.body.style.overflow = "hidden"
}

splash.onclick = () => {
    document.body.style.overflow = "scroll"
    splash.className = "animate"
}