let colors = [
    {"name": "цвет -1", "color": "#e6f7ff"},
    {"name": "цвет -2", "color": "#bae7ff"},
    {"name": "цвет -3", "color": "#91d5ff"},
    {"name": "цвет -4", "color": "#69c0ff"},
    {"name": "цвет -5", "color": "#40a9ff"},
    {"name": "цвет -6", "color": "#1890ff"},
    {"name": "цвет -7", "color": "#096dd9"},
    {"name": "цвет -8", "color": "#0050b3"},
    {"name": "цвет -9", "color": "#003a8c"},
    {"name": "цвет -10", "color": "#002766"},
]

function copyColorToClipboard(e) {
    const el = document.createElement('textarea');
    el.value = e.target.lastChild.innerHTML;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    alert(e.target.firstChild.innerHTML + " скопировано " + e.target.lastChild.innerHTML)
}

document.addEventListener("DOMContentLoaded", function () {
    let paletteElement = document.getElementById("palette-js")

    for (let i = 0; i < colors.length; i++) {
        let textColor = "black"
        if (i > Math.round(colors.length / 2) - 1) {
            textColor = "white"
        }
        let fontWeight = "300"
        if (i === Math.round(colors.length / 2)) {
            fontWeight = "900"
        }

        let colorItemElement = document.createElement("div")
        colorItemElement.style.background = colors[i].color
        colorItemElement.style.color = textColor
        colorItemElement.addEventListener("click", copyColorToClipboard)

        let colorNameElement = document.createElement("span")
        colorNameElement.innerHTML = colors[i]["name"]
        colorNameElement.style.fontWeight = fontWeight
        colorItemElement.appendChild(colorNameElement)

        let colorHashElement = document.createElement("span")
        colorHashElement.innerHTML = colors[i]["color"]
        colorHashElement.style.fontWeight = fontWeight
        colorItemElement.appendChild(colorHashElement)

        paletteElement.appendChild(colorItemElement)
    }
})