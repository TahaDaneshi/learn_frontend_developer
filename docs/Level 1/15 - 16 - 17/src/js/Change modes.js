'strict'

// ELEMENTS
const HTML = document.getElementById("root");
const nav = document.getElementsByClassName('main-nav')[0];
// changers
// language mode changer
const btnChangeLanguage = document.getElementById('btn-change-language');
const txtCurrentLanguage = document.getElementById('txt-current-language');
// dark mode changer
const btnChangeMode = document.getElementById("btn-change-mode");
const imgCurrentMode = document.getElementById("img-current-mode");
// sections
const EnSection = document.getElementById("EN");
const FaSection = document.getElementById("FA");
// FUNCTIONS
async function auto() {
  // change 'nav' background color 
  setInterval(function () {
    nav.setAttribute('style', `background-color:rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.5);transition: background-color 3s ease;`)
  }, 5500);
}
auto()

// EVENTS
btnChangeLanguage.addEventListener('click', () => {

  if (txtCurrentLanguage.innerText === "EN") {
    txtCurrentLanguage.innerText = "FA"
  } else {
    txtCurrentLanguage.innerText = "EN"
  };
  EnSection.classList.toggle("none")
  FaSection.classList.toggle("none")
})
btnChangeMode.addEventListener("click", function () {
  if (HTML.classList.contains("dark")) {
    imgCurrentMode.setAttribute("src", "../../../learn images/Icons/Objects/Sun.svg");
  } else {
    imgCurrentMode.setAttribute("src", "../../../learn images/Icons/Objects/Moon.svg");
  }
  HTML.classList.toggle("dark")
})