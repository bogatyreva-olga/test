let colors = [
    {"name": "Красный 1", "color": "#fff1f0"},
    {"name": "Красный 2", "color": "#ffccc7"},
    {"name": "Красный 3", "color": "#ffa39e"},
    {"name": "Красный 4", "color": "#ff7875"},
    {"name": "Красный 5", "color": "#ff4d4f"},
    {"name": "Красный 6", "color": "#f5222d"},
    {"name": "Красный 7", "color": "#cf1322"},
    {"name": "Красный 8", "color": "#a8071a"},
    {"name": "Красный 9", "color": "#820014"},
    {"name": "Красный 10", "color": "#5c0011"}
]


function test(e) {
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
        colorItemElement.addEventListener("click", test)

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




