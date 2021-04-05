function clickDivHandle(event) {
    console.log(event.currentTarget)
    if (event.currentTarget.getAttribute("data-is-show") === "0") {
        event.currentTarget.setAttribute("data-is-show", "1")
        event.currentTarget.classList.add("label-active")
    } else {
        event.currentTarget.setAttribute("data-is-show", "0")
        event.currentTarget.classList.remove("label-active")
    }

}

document.addEventListener("DOMContentLoaded", function () {
    let clickDivs = document.getElementsByClassName("click-div-js")
    console.log(clickDivs)
    for (let i = 0; i < clickDivs.length; i++) {
        clickDivs[i].addEventListener("click", clickDivHandle)
    }
})

// Повесить листенер на ДОМКонтентЛоадед и внутри этого листенера найти все
// элементы с классом click-div-js и повесить
// на них листенеры и уже в этом листенере обрабатывать нажатие на див.































