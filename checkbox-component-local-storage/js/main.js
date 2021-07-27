const checkboxStorageKey = "checkbox-status"
const disableStorageKey = "disable-button-status"
const blockedColor = "#d3d3d3";
const unblockedColor = "#000000";

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
    setValueToStorage(checkboxStorageKey, false)
}

function changeToCheckedStatus() {
    let checkbox = getCheckboxElement();
    let statusCheckbox = getStatusCheckboxElement()
    let checkButton = getCheckButtonElement()
    statusCheckbox.innerHTML = "Checked"
    checkButton.value = "Uncheck"
    checkbox.checked = true
    setValueToStorage(checkboxStorageKey, true)
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

function getBlockStatusElement() {
    return document.getElementById("block-status");
}

function getDashElement() {
    return document.getElementById("dash");
}

function changeToDisable() {
    getCheckboxElement().disabled = true
    getDisableButton().value = "Enable"
    getStatusCheckboxElement().style.color = blockedColor
    getBlockStatusElement().style.color = blockedColor
    getDashElement().style.color = blockedColor
    setValueToStorage(disableStorageKey, false)
}

function changeToEnable() {
    getCheckboxElement().disabled = false
    getDisableButton().value = "Disable"
    getStatusCheckboxElement().style.color = unblockedColor
    getBlockStatusElement().style.color = unblockedColor
    getDashElement().style.color = unblockedColor
    setValueToStorage(disableStorageKey, true)
}

function disableCheckbox() {
    if (getDisableButton().value === "Disable") {
        changeToDisable();
    } else {
        changeToEnable();
    }
}

function setValueToStorage(key, value) {
    localStorage.setItem(key, value)
}

function getValueFromStorage(key) {
    return localStorage.getItem(key)
}

function restoreUserData() {
    let isChecked = getValueFromStorage(checkboxStorageKey) === "true"
    if (!isChecked) {
        changeToUncheckedStatus();
    } else {
        changeToCheckedStatus()
    }
    let isEnabledDisableButton = getValueFromStorage(disableStorageKey) === "true"
    if (!isEnabledDisableButton) {
        changeToDisable();
    } else {
        changeToEnable();
    }
}

document.addEventListener("DOMContentLoaded", function () {
    restoreUserData()
    let checkboxElement = getCheckboxElement();
    checkboxElement.addEventListener("click", checkboxClickHandle)
    let checkButtonElement = getCheckButtonElement()
    checkButtonElement.addEventListener("click", checkButtonClickHandle)
    let disableButton = getDisableButton()
    disableButton.addEventListener("click", disableCheckbox)
})