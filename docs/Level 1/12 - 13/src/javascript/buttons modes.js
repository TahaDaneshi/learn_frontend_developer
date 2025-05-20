"strict"
// ELEMENTS
const HTML = document.getElementById("root");
// change mode
const btnChangeMode = document.getElementById("changeMode");
const modeIcon = document.getElementById("modeIcon");
// change language 
const btnChangeLanguage = document.getElementById("changeLanguage");
const languageNameContainer = document.getElementById("languageName");
//
const sectionEnglish = document.getElementById("EN");
const sectionFarsi = document.getElementById("FA");


// EVENTS
// change mode
btnChangeMode.addEventListener("click", function () {
  let mode = HTML.className
  if (mode === "dark") {
    modeIcon.setAttribute("src", "../../../learn images/Icons/Objects/Sun.svg")
  } else {
    modeIcon.setAttribute("src", "../../../learn images/Icons/Objects/Moon.svg")
  }
  HTML.classList.toggle("dark");
});
// change language
btnChangeLanguage.addEventListener("click", () => {
  let language = languageNameContainer.innerHTML
  if (language === "En") {
    languageNameContainer.innerText = "Fa"
  } else {
    languageNameContainer.innerText = "En"
  }
  sectionEnglish.classList.toggle("none");
  sectionFarsi.classList.toggle("none");
})