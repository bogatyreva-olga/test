let collapserElements = [
    {
        "title": "This is panel header 1",
        "content": "Собака-это разновидность одомашненного животного. Известный своей преданностью и верностью."
    },
    {
        "title": "This is panel header 2",
        "content": "В собаке всегда можно найти друга для своей души - маленького, ласкового, игривого, серьезного, грозного охранника."
    },
    {
        "title": "This is panel header 3",
        "content": "Какими бы качествами не обладала собака, она навсегда останется вашим преданным другом, несмотря ни на что - вашу внешность, цвет глаз, рост. Достаточно просто любить её"
    }
]

function clickDivHandle(event) {
    if (event.currentTarget.getAttribute("data-is-show") === "0") {
        event.currentTarget.setAttribute("data-is-show", "1")
        event.currentTarget.classList.add("label-active")
    } else {
        event.currentTarget.setAttribute("data-is-show", "0")
        event.currentTarget.classList.remove("label-active")
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let collapser = document.getElementById("collapser-js")

    for (let i = 0; i < collapserElements.length; i++) {
        let elementCollapser = document.createElement("div")
        elementCollapser.classList.add("click-div")
        elementCollapser.setAttribute("data-is-show", "0")
        elementCollapser.addEventListener("click", clickDivHandle)


        let itemTitle = document.createElement("div")
        itemTitle.classList.add("content-title")
        let arrowElement = document.createElement("span")
        arrowElement.innerHTML = "&#10148"
        arrowElement.classList.add("arrow")
        let arrowDiv = document.createElement("div")
        arrowDiv.appendChild(arrowElement)
        itemTitle.appendChild(arrowDiv)
        let title = document.createElement("div")
        title.innerHTML = collapserElements[i]["title"]
        itemTitle.appendChild(title)

        let itemContent = document.createElement("div")
        itemContent.classList.add("content-div")
        let content = document.createElement("p")
        content.innerHTML = collapserElements[i]["content"]
        itemContent.appendChild(content)

        collapser.appendChild(elementCollapser)
        elementCollapser.appendChild(itemTitle)
        elementCollapser.appendChild(itemContent)


    }
})