// ELEMENTS
const html = document.getElementById('HTML');
const buttonChangeMode = document.getElementById("buttonChangeMode");

console.log(buttonChangeMode.innerText);
// EVENTS
buttonChangeMode.addEventListener("click", () => {
    if (buttonChangeMode.innerText === "Light mode") {
        buttonChangeMode.innerText = "Dark mode"
    } else {
        buttonChangeMode.innerText = "Light mode"
    }
    html.classList.toggle("dark")
})
