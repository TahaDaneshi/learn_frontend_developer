// ELEMENTS
const HTML = document.getElementById("root")
const changeModeButton = document.getElementById("changeMode");
const modeIcon = document.getElementById("modeIcon");

// EVENTS
changeModeButton.addEventListener("click", function () {
  HTML.classList.toggle("dark");
  if (HTML.className === "dark") {
    modeIcon.setAttribute("src", "../../../learn images/Icons/Objects/Moon.svg")
  } else {
    modeIcon.setAttribute("src", "../../../learn images/Icons/Objects/Sun.svg")
  }
})
