function getInputNumberElement() {
    return document.getElementById("input-number-js")
}

function inputDisabled() {
    let inputNumbers = getInputNumberElement()
    inputNumbers.disabled = !inputNumbers.disabled
    inputNumbers.value = getInputNumberValue()
}

function getInputNumberValue() {
    return parseFloat(getInputNumberElement().value.replace(/[^\d.\-]/, ""))
}

function getContainerElement() {
    return document.getElementById("up-down-container-js")
}

function showButtons() {
    let isDisabledInput = getInputNumberElement().disabled
    if (!isDisabledInput) {
        getContainerElement().style.display = "block"
    }
}

function hideButtons() {
    getContainerElement().style.display = "none"
}

function addNumberButton() {
    let inputNumberValue = getInputNumberValue()
    inputNumberValue = isNaN(inputNumberValue) ? 0 : inputNumberValue + getStepValue()
    inputNumberValue = inputNumberValue.toFixed(getStepFixed())
    if (parseInt(inputNumberValue) === parseFloat(inputNumberValue)) {
        inputNumberValue = parseInt(inputNumberValue)
    }
    getInputNumberElement().value = inputNumberValue
}

function decreaseNumberButton() {
    let inputNumberValue = getInputNumberValue()
    inputNumberValue = isNaN(inputNumberValue) ? 0 : inputNumberValue - getStepValue()
    inputNumberValue = inputNumberValue.toFixed(getStepFixed())
    if (parseInt(inputNumberValue) === parseFloat(inputNumberValue)) {
        inputNumberValue = parseInt(inputNumberValue)
    }
    console.log(inputNumberValue)
    getInputNumberElement().value = inputNumberValue
}

function getStepFixed() {
    let stepValue = getStepValue().toString().replace(/^\d+\./, "").length
    let inputNumbers = getInputNumberValue().toString().replace(/^-?\d+\./, "").length
    if (stepValue >= inputNumbers) {
        return stepValue
    }
    return inputNumbers

}

function getStepValue() {
    if (getInputNumberElement().hasAttribute("step")) {
        let stepValue = parseFloat(getInputNumberElement().getAttribute("step"))
        return isNaN(stepValue) ? 1 : Math.abs(stepValue)
    }
    return 1
}

function hasMin() {
    return getInputNumberElement().hasAttribute("min")
}

function hasMax() {
    return getInputNumberElement().hasAttribute("max");
}

function getMin() {
    return parseFloat(getInputNumberElement().getAttribute("min"));
}

function getMax() {
    return parseFloat(getInputNumberElement().getAttribute("max"));
}

function getUpButton() {
    return document.getElementById("up-js")
}

function getDownButton() {
    return document.getElementById("down-js")
}

function inputNumberChangeHandler() {
    if (!isMinMaxSuccessCondition()) {
        console.warn("Max-min condition failure")
        return
    }
    let inputNumberValue = getInputNumberValue()
    if (hasMax() && inputNumberValue >= getMax()) {
        getInputNumberElement().value = getMax()
        getUpButton().classList.add("button-disabled")
    } else {
        getUpButton().classList.remove("button-disabled")
    }
    if (hasMin() && inputNumberValue <= getMin()) {
        getInputNumberElement().value = getMin()
        getDownButton().classList.add("button-disabled")
    } else {
        getDownButton().classList.remove("button-disabled")
    }
}

function inputNumberValue() {
    getInputNumberElement().value = getInputNumberValue()
}

function isMinMaxSuccessCondition() {
    if (!hasMax() || !hasMin()) {
        return true
    }
    return getMax() > getMin()
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("toggle-disabled-js").addEventListener("click", inputDisabled)
    getInputNumberElement().addEventListener("mouseover", showButtons)
    document.getElementById("input-container-js").addEventListener("mouseout", hideButtons)
    getUpButton().addEventListener("click", addNumberButton)
    getDownButton().addEventListener("click", decreaseNumberButton)
    getInputNumberElement().addEventListener("input", inputNumberChangeHandler)
    getInputNumberElement().addEventListener("change", inputNumberChangeHandler)
    getUpButton().addEventListener("click", inputNumberChangeHandler)
    getDownButton().addEventListener("click", inputNumberChangeHandler)
    getInputNumberElement().addEventListener("change", inputNumberValue)

})
