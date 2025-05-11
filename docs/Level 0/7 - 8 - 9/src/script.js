"strict"
// ELEMENTS
const menuController = document.getElementById('menu');
const menuContent = document.getElementById('menuContent');

// EVENTS
menuController.addEventListener("click", function (event) {
    if (event.target.innerText === "!!!") {
        event.target.innerText = "X"
    } else {
        event.target.innerText = "!!!"
    }
    menuContent.classList.toggle('moveDoneMenuContent');
});