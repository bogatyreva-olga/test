function inputDisabled() {
    let inputNumbers = document.getElementById("input-number-js")
    inputNumbers.disabled = !inputNumbers.disabled
    inputNumbers.value = parseInt(document.getElementById("input-number-js").value) ? parseInt(document.getElementById("input-number-js").value) : 0

    // inputNumbers.setAttribute("disabled", "disabled")
    //  if (inputNumbers.getAttribute("disabled") === "disabled"){
    //      inputNumbers.removeAttribute("disabled")
    //  }else{
    //      inputNumbers.setAttribute("disabled", "disabled")
    //  }
}

function getInputNumberValue() {

    return parseInt(document.getElementById("input-number-js").value.replace(/[^\d\.]/, ""));
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
    let inputNumberValue = getInputNumberValue()
    inputNumberValue = isNaN(inputNumberValue) ? 0 : inputNumberValue + 1
    document.getElementById("input-number-js").value = inputNumberValue
}

function decreaseNumberButton() {
    console.log("decreaseNumberButton")
    let inputNumberValue = getInputNumberValue()
    inputNumberValue = isNaN(inputNumberValue) ? 0 : inputNumberValue - 1
    document.getElementById("input-number-js").value = inputNumberValue
}


function inputNumberChangeHandler() {
    let hasMin = document.getElementById("input-number-js").hasAttribute("min")
    let min = parseInt(document.getElementById("input-number-js").getAttribute("min"))
    let hasMax = document.getElementById("input-number-js").hasAttribute("max")
    let max = parseInt(document.getElementById("input-number-js").getAttribute("max"))
    let inputNumberValue = getInputNumberValue()
    if (hasMax && inputNumberValue >= max) {
        document.getElementById("input-number-js").value = max
        document.getElementById("up-js").classList.add("button-disabled")
    } else {
        document.getElementById("up-js").classList.remove("button-disabled")
    }
    if (hasMin && inputNumberValue <= min) {
        document.getElementById("input-number-js").value = min
        document.getElementById("down-js").classList.add("button-disabled")
    } else {
        document.getElementById("down-js").classList.remove("button-disabled")
    }


}

function inputNumberValue() {
    document.getElementById("input-number-js").value = getInputNumberValue()
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("toggle-disabled-js").addEventListener("click", inputDisabled)
    document.getElementById("input-container-js").addEventListener("mouseover", showButtons)
    document.getElementById("input-container-js").addEventListener("mouseout", hideButtons)
    document.getElementById("up-js").addEventListener("click", addNumberButton)
    document.getElementById("down-js").addEventListener("click", decreaseNumberButton)
    document.getElementById("input-number-js").addEventListener("input", inputNumberChangeHandler)
    document.getElementById("input-number-js").addEventListener("change", inputNumberChangeHandler)
    document.getElementById("up-js").addEventListener("click", inputNumberChangeHandler)
    document.getElementById("down-js").addEventListener("click", inputNumberChangeHandler)
    document.getElementById("input-number-js").addEventListener("change", inputNumberValue)

})
//document.getElementById("input-number-js").disabled = true