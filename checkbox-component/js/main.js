function getCheckboxElement() {
    return document.getElementById("checkbox")
}

function getStatusCheckboxElement() {
    return document.getElementById("check-status")
}

function getCheckButtonElement() {
    return document.getElementById("check-button");
}

function checkboxClickHandle() {
    let checkbox = getCheckboxElement();
    if (checkbox.checked) {
        changeToCheckedStatus()
    } else {
        changeToUncheckedStatus()
    }
}

function changeToUncheckedStatus() {
    let checkbox = getCheckboxElement();
    let statusCheckbox = getStatusCheckboxElement()
    let checkButton = getCheckButtonElement()
    statusCheckbox.innerHTML = "Unchecked"
    checkButton.value = "Check"
    checkbox.checked = false
}

function changeToCheckedStatus() {
    let checkbox = getCheckboxElement();
    let statusCheckbox = getStatusCheckboxElement()
    let checkButton = getCheckButtonElement()
    statusCheckbox.innerHTML = "Checked"
    checkButton.value = "Uncheck"
    checkbox.checked = true
}

function checkButtonClickHandle() {
    let checkbox = getCheckboxElement();
    if (checkbox.checked) {
        changeToUncheckedStatus();
    } else {
        changeToCheckedStatus()
    }
}

function getDisableButton() {
    return document.getElementById("disable-button");
}

function disableCheckbox() {
    let statusCheckbox = getStatusCheckboxElement()
    let blockStatus = document.getElementById("block-status")
    let checkbox = getCheckboxElement();
    let disableButton = getDisableButton()
    let dash = document.getElementById("dash")
    if (disableButton.value === "Disable") {
        checkbox.disabled = true
        disableButton.value = "Enable"
        const blockedColor = "#d3d3d3";
        statusCheckbox.style.color = blockedColor
        blockStatus.style.color = blockedColor
        dash.style.color = blockedColor
    } else {
        checkbox.disabled = false
        disableButton.value = "Disable"
        const unblockedColor = "#000000";
        statusCheckbox.style.color = unblockedColor
        blockStatus.style.color = unblockedColor
        dash.style.color = unblockedColor
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let checkboxElement = getCheckboxElement();
    checkboxElement.addEventListener("click", checkboxClickHandle)
    let checkButtonElement = getCheckButtonElement()
    checkButtonElement.addEventListener("click", checkButtonClickHandle)
    let disableButton = getDisableButton()
    disableButton.addEventListener("click", disableCheckbox)

})