const closeMenu = document.querySelector(".fa-times")
const openMenu = document.querySelector(".fa-bars")
const closeOpenButton = document.querySelector(".close-tool")
const toolMenu = document.querySelectorAll(".tool-item")

function hideMenu() {
    closeMenu.classList.add('d-none')
    openMenu.classList.remove('d-none')
    toolMenu.forEach(element => {
        element.style.transform = "translateX(50px)"
    })
}
function showMenu() {
    closeMenu.classList.remove('d-none')
    openMenu.classList.add('d-none')
    toolMenu.forEach(element => {
        element.style.transform = "translateX(0px)"
    })
}
closeMenu.addEventListener('click', () => {
    hideMenu()
})
openMenu.addEventListener('click', () => {
    showMenu()
})