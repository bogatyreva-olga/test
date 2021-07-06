const userNameCookieName = "user-name";
const passwordCookieName = "password";
const rememberMeCookieName = "remember-me-checkbox";
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

    setCookie(rememberMeCookieName, checkbox.checked.toString())
    if (checkbox.checked === true) {
        setCookie(userNameCookieName, userNameInput.value)
        setCookie(passwordCookieName, passwordInput.value)
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

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function restoreUserData() {
    let isChecked = (getCookie(rememberMeCookieName) === "true")
    if (isChecked) {
        getUserNameElement().value = getCookie(userNameCookieName)
        getPasswordElement().value = getCookie(passwordCookieName)
        getRememberMeElement().checked = isChecked
    } else {
        eraseCookie(userNameCookieName)
        eraseCookie(passwordCookieName)
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    restoreUserData()
    document.getElementById("submit-button").addEventListener("click", submitData)
    document.getElementById("user-name").addEventListener("input", deleteErrorUsername)
    document.getElementById("password").addEventListener("input", deleteErrorPassword)
})
