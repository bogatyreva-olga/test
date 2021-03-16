function getImages() {
    return document.querySelectorAll("#images-collection-js img")
}


function getCurrentIndex() {
    return document.getElementById("images-collection-js").getAttribute("data-index");
}

function hideImage(currentIndex) {
    getImages()[currentIndex].style.display = "none"
}


function showImage(currentIndex) {
    getImages()[currentIndex].style.display = "block"
    document.getElementById("images-collection-js").setAttribute("data-index", currentIndex)
}

function showNextImage2() {
    let currentIndex = getCurrentIndex()
    hideImage(currentIndex)
    currentIndex++
    if (currentIndex > getImages().length - 1) {
        currentIndex = 0
    }
    showImage(currentIndex)
}

function showPrevImage2() {
    let currentIndex = getCurrentIndex()
    hideImage(currentIndex)
    currentIndex--
    if (currentIndex < 0) {
        currentIndex = getImages().length - 1
    }
    showImage(currentIndex)
}

document.addEventListener("DOMContentLoaded", function (event) {
    showImage(0)
    document.getElementById("next-js").addEventListener("click", showNextImage2)
    document.getElementById("prev-js").addEventListener("click", showPrevImage2)
})