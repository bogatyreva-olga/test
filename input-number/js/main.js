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
    inputNumberValue = isNaN(inputNumberValue) ? 0 : inputNumberValue + 1
    document.getElementById("input-number-js").value = inputNumberValue
    if (inputNumberValue >= 10) {
        document.getElementById("up-js").classList.add("up-button-disabled")
    }
}

function decreaseNumberButton() {
    let inputNumberValue = parseInt(document.getElementById("input-number-js").value)
    inputNumberValue--
    document.getElementById("input-number-js").value = inputNumberValue
    if (inputNumberValue > 0) {
        document.getElementById("down-js").classList.add("down-button-disabled")
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("toggle-disabled-js").addEventListener("click", inputDisabled)
    document.getElementById("input-container-js").addEventListener("mouseover", showButtons)
    document.getElementById("input-container-js").addEventListener("mouseout", hideButtons)
    document.getElementById("up-js").addEventListener("click", addNumberButton)
    document.getElementById("down-js").addEventListener("click", decreaseNumberButton)
})
//document.getElementById("input-number-js").disabled = true