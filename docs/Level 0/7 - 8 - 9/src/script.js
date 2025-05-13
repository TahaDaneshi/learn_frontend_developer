"strict"
// ELEMENTS
const menuController = document.getElementById('menu');
const menuContent = document.getElementById('menuContent');
const moreTitles = document.getElementById('moreTitles')
// EVENTS
menuController.addEventListener("click", function (event) {
    if (event.target.innerText === "!!!") {
        event.target.innerText = "X"
    } else {
        event.target.innerText = "!!!"
    }
    menuContent.classList.toggle('moveDoneMenuContent');
});
moreTitles.addEventListener('click', function () {
    if (moreTitles.style.borderColor === 'green') {
        moreTitles.style.borderColor = "red"
    } else {
        moreTitles.style.borderColor = "green"
    }
    menuContent.classList.toggle('moveDoneMenuContent');
})