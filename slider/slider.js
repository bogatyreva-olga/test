function getImages() {
    return [
        {name: "Пик Пушкина", url: "https://i.ytimg.com/vi/hBEhBu94Ffw/maxresdefault.jpg"},
        {name: "Кошта-тау", url: "https://topgid.net/uploads/posts/2019-12/5e06287f4f11b-5344-koshtan-tau.jpeg"},
        {
            name: "Шхара",
            url: "https://peakfinder.ru/image/original/67_shhara.jpg"
        },
    ]

}

function showNewImage(index) {
    document.getElementById("image").setAttribute("data-index", index)
    let image = document.getElementById("image").firstChild;
    image.src = getImages()[index].url
    image.alt = getImages()[index].name
}

function initFirstImage() {
    //  let image = '<img src="' + getImages()[0].url + '" alt="' + getImages()[0].name + '">'
    // document.getElementById("image").innerHTML = image
    // let initImageIndex = 0
    // let image = new Image()
    // image.src = getImages()[initImageIndex].url
    // image.alt = getImages()[initImageIndex].name
    // document.getElementById("image").setAttribute("data-index", initImageIndex)
    // document.getElementById("image").appendChild(image)
    showNewImage(0)
}

function showNextImage() {
    let currentIndex = parseInt(document.getElementById("image").getAttribute("data-index"))
    currentIndex++
    if (currentIndex >= getImages().length) {
        currentIndex = 0
    }
    showNewImage(currentIndex)

}

function showPrevImage() {
    let currentIndex = parseInt(document.getElementById("image").getAttribute("data-index"))
    currentIndex--

    if (currentIndex < 0) {
        currentIndex = getImages().length - 1
    }
    showNewImage(currentIndex)
}

document.addEventListener("DOMContentLoaded", function (event) {
    initFirstImage();

    document.getElementById("next").addEventListener("click", showNextImage)
    document.getElementById("prev").addEventListener("click", showPrevImage)
})