function inputDisabled() {
    let inputNumbers = document.getElementById("input-number-js")
    inputNumbers.disabled = !inputNumbers.disabled
    inputNumbers.value = getInputNumberValue()

}

function getInputNumberValue() {
    return parseFloat(document.getElementById("input-number-js").value.replace(/[^\d.\-]/, ""))
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
    inputNumberValue = isNaN(inputNumberValue) ? 0 : inputNumberValue + getStepValue()
    inputNumberValue = inputNumberValue.toFixed(getStepFixed())
    document.getElementById("input-number-js").value = inputNumberValue
}

function decreaseNumberButton() {
    console.log("decreaseNumberButton")
    let inputNumberValue = getInputNumberValue()
    inputNumberValue = isNaN(inputNumberValue) ? 0 : inputNumberValue - getStepValue()
    inputNumberValue = inputNumberValue.toFixed(getStepFixed())
    document.getElementById("input-number-js").value = inputNumberValue
}

function getStepFixed() {
    let stepValue = getStepValue().toString().replace(/^\d+\./, "").length
    let inputNumbers = getInputNumberValue().toString().replace(/^-?\d+\./, "").length
    if (stepValue >= inputNumbers) {
        return stepValue
    }
    return inputNumbers
}

/*
* {0,}
+ {1,}
? {0,1}
* /^-?\d+\./
* */
function getStepValue() {
    if (document.getElementById("input-number-js").hasAttribute("step")) {
        return Math.abs(parseFloat(document.getElementById("input-number-js").getAttribute("step")))
    }
    return 1
}

function inputNumberChangeHandler() {
    let hasMin = document.getElementById("input-number-js").hasAttribute("min")
    let min = parseFloat(document.getElementById("input-number-js").getAttribute("min"))
    let hasMax = document.getElementById("input-number-js").hasAttribute("max")
    let max = parseFloat(document.getElementById("input-number-js").getAttribute("max"))
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

function minMaxDifference() {
    let min = parseFloat(document.getElementById("input-number-js").getAttribute("min"))
    let max = parseFloat(document.getElementById("input-number-js").getAttribute("max"))
    return max > min
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
