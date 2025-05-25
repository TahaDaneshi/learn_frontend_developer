'strict'
const nav = document.getElementsByTagName('nav')[0]

setInterval(function () {
  nav.setAttribute('style', `background-color:rgba(${Math.random() * 255}, ${Math.random() * 255}, 250, 0.5);`)
}, 6000)