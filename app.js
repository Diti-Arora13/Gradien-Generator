// SELECTING THE GRADIENT TYPE
const gTypes = document.querySelector(".gradient-type")
const gOption = document.querySelector("option")



// SETTING THE GRADIENT
const gradientBox = document.querySelector(".gradient-box")
const color = document.querySelectorAll(".color")

gradientBox.style.background = `linear-gradient(to left, ${color[1].value} , ${color[0].value})`


function setGraident() {
    gradientBox.style.background = `linear-gradient(to left, ${color[1].value} , ${color[0].value})`
}

color.forEach(inp => inp.addEventListener("input", setGraident))


// MODAL CLOSING AND OPENING
const codeBtn = document.querySelector(".code-btn")
const modal = document.querySelector(".modal-div")
const closeIcon = document.querySelector(".modal-icon")

codeBtn.addEventListener("click", () => setTimeout(() => modal.style.visibility = "visible", 500))
closeIcon.addEventListener("click", () => modal.style.visibility = "hidden")

// COPY CSS CODE AND TOAST NOTIFICATION
const modalCode = document.querySelector(".modal-css")
const copyBtn = document.querySelector(".modal-btn")
const toast = document.querySelector(".toast-notification")

var code = modalCode.innerText = `background: linear-gradient(to right, ${color[0].value}, ${color[1].value})`
copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(code)
   
})


// DELAY FOR THE VISIBILITY OF MODAL
// GRAIDENT SELECTION



