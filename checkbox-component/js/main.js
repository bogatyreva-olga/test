function checkboxClickHandle() {
    let checkbox = document.getElementById("checkbox")
    let statusCheckbox = document.getElementById("check-status")
    let checkButton = document.getElementById("check-button")
    if (checkbox.checked) {
        statusCheckbox.innerHTML = "Checked"
        checkButton.value = "Uncheck"
    } else {
        statusCheckbox.innerHTML = "Unchecked"
        checkButton.value = "Check"
    }
}

function checkButtonClickHandle() {
    let checkbox = document.getElementById("checkbox")
    let statusCheckbox = document.getElementById("check-status")
    let checkButton = document.getElementById("check-button")
    if (checkbox.checked) {
        statusCheckbox.innerHTML = "Unchecked"
        checkButton.value = "Check"
        checkbox.checked = false
    } else {
        statusCheckbox.innerHTML = "Checked"
        checkButton.value = "Uncheck"
        checkbox.checked = true
    }
}

function disableCheckbox() {
    let statusCheckbox = document.getElementById("check-status")
    let blockStatus = document.getElementById("block-status")
    let checkbox = document.getElementById("checkbox")
    let disableButton = document.getElementById("disable-button")
    if (disableButton.value === "Disable") {
        checkbox.disabled = true
        disableButton.value = "Enable"
        statusCheckbox.style.color = "#d3d3d3"
        blockStatus.style.color = "#d3d3d3"

    } else {
        checkbox.disabled = false
        disableButton.value = "Disable"
        statusCheckbox.style.color = "black"
        blockStatus.style.color = "black"
    }

}

document.addEventListener("DOMContentLoaded", function () {
    let checkboxElement = document.getElementById("checkbox")
    checkboxElement.addEventListener("click", checkboxClickHandle)
    let checkButtonElement = document.getElementById("check-button")
    checkButtonElement.addEventListener("click", checkButtonClickHandle)
    let disableButton = document.getElementById("disable-button")
    disableButton.addEventListener("click", disableCheckbox)

})