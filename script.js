const splash = document.getElementById("splash")
const form = document.getElementById("form")
const answerSaved = document.getElementById("answer-saved")

window.onload = () => {
    document.body.style.overflow = "hidden"
    answerSaved.style.display = "none"
}

splash.onclick = () => {
    document.body.style.overflow = "scroll"
    splash.className = "animate"
}

form.onsubmit = async (e) => {
    e.preventDefault()
    form.style.display = "none"
    answerSaved.style.display = "block"

    const data = new FormData(form)
    const url = `https://docs.google.com/forms/u/0/d/e/1FAIpQLScy6HBb2Zx4jSLq4O2Vi647fUnxMdlK0P_fy-kdLuhrnomjyw/formResponse?entry.807227795=${data.get("alcohol")}&entry.618516051=${data.get("contests")}`

    await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    });
}