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



