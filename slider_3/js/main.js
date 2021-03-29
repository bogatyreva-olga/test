function getImagesNodes() {
    return document.querySelectorAll("#images-collection-js img")
}

function showImage(element) {
    document.getElementById("slider-js").style.display = "block"
    document.querySelector(".slider img").src = element.src
    document.getElementById("images-collection-js").setAttribute("show-data-index", element.getAttribute("data-index"))

}

function showSlider(event) {
    showImage(event.target)
}

function showNextImage() {
    let currentIndex = document.getElementById("images-collection-js").getAttribute("show-data-index")
    currentIndex++
    if (currentIndex > getImagesNodes().length - 1) {
        currentIndex = 0
    }
    showImage(getImagesNodes()[currentIndex])
}

function showPrevImage() {
    let currentIndex = document.getElementById("images-collection-js").getAttribute("show-data-index")
    currentIndex--
    if (currentIndex < 0) {
        currentIndex = getImagesNodes().length - 1
    }
    showImage(getImagesNodes()[currentIndex])
}

document.addEventListener("DOMContentLoaded", function () {
    let imagesNodes = getImagesNodes();
    for (let i = 0; i < imagesNodes.length; i++) {
        imagesNodes[i].addEventListener("click", showSlider)
    }

    document.getElementById("next-js").addEventListener("click", showNextImage)
    document.getElementById("prev-js").addEventListener("click", showPrevImage)
})
