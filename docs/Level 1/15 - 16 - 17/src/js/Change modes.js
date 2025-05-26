'strict'

// ELEMENTS
const nav = document.getElementsByTagName('nav')[0];
// changers
const btnChangeLanguage = document.getElementById('btn-change-language');
const txtCurrentLanguage = document.getElementById('txt-current-language');
// sections
const EnSection = document.getElementById("EN");
const FaSection = document.getElementById("FA");
// FUNCTIONS
async function auto() {
  // change 'nav' background color 
  setInterval(function () {
    nav.setAttribute('style', `background-color:rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.5);transition: background-color 3s ease;`)
  }, 5500)
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