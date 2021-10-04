function creatTable(row, col) {
    let multTable = document.getElementById("multiplication-table-js")
    let table = document.createElement("table")
    for (let i = 1; i < row; i++) {
        let tr = document.createElement("tr")
        tr.classList.add("row-style")
        tr.style.border = "1px solid-black"
        for (let j = 1; j < col; j++) {
            let td = document.createElement("td")
            td.classList.add("column-style")
            td.innerText = i * j
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
    multTable.appendChild(table)
}

document.addEventListener("DOMContentLoaded", function () {
    creatTable(10, 10)
})