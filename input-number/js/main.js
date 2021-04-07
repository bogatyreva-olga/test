function inputDisabled() {
    let inputNumbers = document.getElementById("input-number-js")
    inputNumbers.disabled = !inputNumbers.disabled
    inputNumbers.value = ""

    // inputNumbers.setAttribute("disabled", "disabled")
    //  if (inputNumbers.getAttribute("disabled") === "disabled"){
    //      inputNumbers.removeAttribute("disabled")
    //  }else{
    //      inputNumbers.setAttribute("disabled", "disabled")
    //  }
}


function showButtons() {
    let isDisabledInput = document.getElementById("input-number-js").disabled
    if (!isDisabledInput) {
        document.getElementById("up-down-container-js").style.display = "block"
    }
}

function hideButtons() {
    document.getElementById("up-down-container-js").style.display = "none"
}

function addNumberButton() {
    let inputNumberValue = parseInt(document.getElementById("input-number-js").value)
    if (inputNumberValue === NaN) {
        inputNumberValue = 0
    }
    inputNumberValue++
    document.getElementById("input-number-js").value = inputNumberValue
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("toggle-disabled-js").addEventListener("click", inputDisabled)
    document.getElementById("input-container-js").addEventListener("mouseover", showButtons)
    document.getElementById("input-container-js").addEventListener("mouseout", hideButtons)
    document.getElementById("up-js").addEventListener("click", addNumberButton)
})
//document.getElementById("input-number-js").disabled = true