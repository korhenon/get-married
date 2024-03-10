const splash = document.getElementById("splash")
const form = document.getElementById("form")

window.onload = () => {
    document.body.style.overflow = "hidden"
}

splash.onclick = () => {
    document.body.style.overflow = "scroll"
    splash.className = "animate"
}

form.onsubmit = async (e) => {
    e.preventDefault()
    const data = new FormData(form)
    const url = `https://docs.google.com/forms/u/0/d/e/1FAIpQLScy6HBb2Zx4jSLq4O2Vi647fUnxMdlK0P_fy-kdLuhrnomjyw/formResponse?entry.807227795=${data.get("alcohol")}&entry.618516051=${data.get("contests")}`

    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    });
}