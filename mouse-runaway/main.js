function handleMouseOver(e) {
    document.getElementById("runner").style.position = "fixed"
    document.getElementById("runner").style.left = getRandomInt(0, 100) + "px"
    document.getElementById("runner").style.top = getRandomInt(0, 100) + "px"
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("runner").addEventListener("mouseover", handleMouseOver)
})