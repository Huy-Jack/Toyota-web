const tabs = document.querySelectorAll(".buttonWrapper");
const tabButtons = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".content");

function active(el) {
    el.addEventListener('click', e => {
        tabButtons.forEach(btn => {
            btn.classList.remove('active')
        })
        e.target.classList.add('active')

        contents.forEach(ct => {
            ct.classList.remove('active')
        })
        const id = e.target.dataset.id;
        const element = document.querySelector('#' + id)
        element.classList.add('active')
    })
}

active(tabs[0])
active(tabs[1])

const closeMenu = document.querySelector(".fa-times")
const openMenu = document.querySelector(".fa-bars")
const closeOpenButton = document.querySelector(".close-tool")
const toolMenu = document.querySelectorAll(".tool-item")
console.log(toolMenu)

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



