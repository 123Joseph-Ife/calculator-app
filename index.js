const body = document.body
const container = document.querySelector(".content")
const toggle = document.querySelector("label")
const datedisplay = document.querySelector(".datedisplay")
const setting = document.querySelector(".output .setting .mode")
const hr = document.querySelector("hr")
const buttons = document.querySelectorAll(".button")
const answer = document.querySelector(".answer")
const screen = document.querySelector(".screen")
const equal = document.querySelector(".equal")
const clear = document.querySelector(".clear")

const today = new Date();
setTimeout(() => {
    datedisplay.innerHTML = today;
}, 1000);

toggle.addEventListener("click", () => {
    body.classList.toggle("lightmode")
    container.classList.toggle("lightmode")
    setting.classList.toggle("lightmode")
    buttons.forEach(button => {
        button.classList.toggle("lightmode")
    })
    answer.classList.toggle("lightmode")
    screen.classList.toggle("lightmode")
    datedisplay.classList.toggle("lightmode")
    hr.classList.toggle("lightmode")
})

buttons.forEach(button => {
    button.addEventListener("click", () => {
        screen.value += button.innerHTML
    })
})

equal.addEventListener("click", () => {
    try {
        answer.innerHTML = eval(screen.value)
        screen.value = ""
    } catch (error) {
        answer.innerHTML = "Syntax Error"
    }
})

clear.addEventListener("click", () => {
    answer.innerHTML = ""
    screen.value = ""
})