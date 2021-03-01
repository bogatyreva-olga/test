function getImages() {
    return [
        {name: "Пик Пушкина", url: "https://i.ytimg.com/vi/hBEhBu94Ffw/maxresdefault.jpg"},
        {name: "Кошта-тау", url: "https://topgid.net/uploads/posts/2019-12/5e06287f4f11b-5344-koshtan-tau.jpeg"},
        {
            name: "Миссес-тау",
            url: "https://lh3.googleusercontent.com/proxy/sk5gl9g9sczadnsRlnm1VapgyZL101i1ycQK9ZalS1TvUrFkrazZEBdaOYZdAL4qzomuZz7VqFvkqcRc1h5NOk8Ed2OCoU9ol2uy-Nw"
        },
    ]

}

function initFirstImage() {
    //  let image = '<img src="' + getImages()[0].url + '" alt="' + getImages()[0].name + '">'
    // document.getElementById("image").innerHTML = image
    let initImageIndex = 0
    let image = new Image()
    image.src = getImages()[initImageIndex].url
    image.alt = getImages()[initImageIndex].name
    image.height = 300
    document.getElementById("image").setAttribute("data-index", initImageIndex)
    document.getElementById("image").appendChild(image)
}

function showNextImage() {
    let currentIndex = parseInt(document.getElementById("image").getAttribute("data-index"))
    currentIndex++
    if (currentIndex >= getImages().length) {
        currentIndex = 0
    }
    let image = new Image()
    image.src = getImages()[currentIndex].url
    image.alt = getImages()[currentIndex].name
    image.height = 300
    document.getElementById("image").setAttribute("data-index", currentIndex)

    let oldImage = document.getElementById("image").firstChild;
    document.getElementById("image").replaceChild(image, oldImage)

}

function showPrevImage() {
    let currentIndex = parseInt(document.getElementById("image").getAttribute("data-index"))
    currentIndex--

    if (currentIndex <= getImages().length) {
        currentIndex = getImage().length - 1
    }
    let image = new Image()
    image.src = getImages()[currentIndex].url
    image.alt = getImages()[currentIndex].name
    image.height = 300
    document.getElementById("image").setAttribute("data-index", currentIndex)

    let oldImage = document.getElementById("image").firstChild;
    document.getElementById("image").replaceChild(image, oldImage)
}

document.addEventListener("DOMContentLoaded", function (event) {
    initFirstImage();

    document.getElementById("next").addEventListener("click", showNextImage)
    document.getElementById("prev").addEventListener("click", showPrevImage)
})