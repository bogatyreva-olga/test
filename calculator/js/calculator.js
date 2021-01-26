function inputCharsetToResult(e) {
    document.getElementById("result").value += e.target.innerHTML
}

document.addEventListener("DOMContentLoaded", function (event) {
    let inputButtons = document.getElementsByClassName("input-button")
    for (let i = 0; i < inputButtons.length; i++) {
        inputButtons[i].addEventListener("click", inputCharsetToResult)
    }
})
