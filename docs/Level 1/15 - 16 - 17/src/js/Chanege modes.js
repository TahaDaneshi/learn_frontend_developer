'strict'
const nav = document.getElementsByTagName('nav')[0]

setInterval(function () {
  nav.setAttribute('style', `background-color:rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.5);transition: background-color 3s ease;`)
}, 5500)