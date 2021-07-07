const userNameStorageKey = "user-name";
const passwordStorageKey = "password";
const rememberMeStorageKey = "remember-me-checkbox";
const errorColor = '#ff4d17';

function getUserNameElement() {
    return document.getElementById("user-name");
}

function getPasswordElement() {
    return document.getElementById("password");
}

function getRememberMeElement() {
    return document.getElementById("remember-me-checkbox");
}

function submitData() {
    let errorUsername = document.getElementById("error-username")
    let errorPassword = document.getElementById("error-password")
    let userNameInput = getUserNameElement()
    let passwordInput = getPasswordElement()
    let checkbox = getRememberMeElement()

    errorPassword.innerHTML = ""
    errorUsername.innerHTML = ""

    let isError = false

    if (userNameInput.value === "") {
        isError = true
        errorUsername.innerHTML = "Please input your username!"
        errorUsername.style.color = errorColor
        userNameInput.style.borderColor = errorColor
    }

    if (passwordInput.value === "") {
        isError = true
        errorPassword.innerHTML = "Please input your password!"
        errorPassword.style.color = errorColor
        passwordInput.style.borderColor = errorColor
    }

    if (!passwordInput.value.match(/^[\dA-Za-z]{7,}$/)) {
        isError = true
        errorPassword.innerHTML = "Please input enter correct password!"
        errorPassword.style.color = errorColor
    }

    if (isError) {
        return
    }

    setValueToStorage(rememberMeStorageKey, checkbox.checked.toString())
    if (checkbox.checked === true) {
        setValueToStorage(userNameStorageKey, userNameInput.value)
        setValueToStorage(passwordStorageKey, passwordInput.value)
    }
}

function deleteErrorUsername() {
    let errorUsername = document.getElementById("error-username")
    errorUsername.innerHTML = ""
}

function deleteErrorPassword() {
    let errorPassword = document.getElementById("error-password")
    errorPassword.innerHTML = ""
}

function setValueToStorage(key, value) {
    sessionStorage.setItem(key, value)
}

function getValueFromStorage(key) {
    return sessionStorage.getItem(key)
}

function removeValueFromStorage(key) {
    sessionStorage.removeItem(key)
}

function restoreUserData() {
    let isChecked = (getValueFromStorage(rememberMeStorageKey) === "true")
    if (isChecked) {
        getUserNameElement().value = getValueFromStorage(userNameStorageKey)
        getPasswordElement().value = getValueFromStorage(passwordStorageKey)
        getRememberMeElement().checked = isChecked
    } else {
        removeValueFromStorage(userNameStorageKey)
        removeValueFromStorage(passwordStorageKey)
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    restoreUserData()
    document.getElementById("submit-button").addEventListener("click", submitData)
    document.getElementById("user-name").addEventListener("input", deleteErrorUsername)
    document.getElementById("password").addEventListener("input", deleteErrorPassword)
})
