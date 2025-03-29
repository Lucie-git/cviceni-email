const emailClosing = document.querySelector(".email__closing")

const goodbye = (name = "Lucie") => {
    emailClosing.textContent = "S pozdravem, " + name
}

const konecEmailu = goodbye()

