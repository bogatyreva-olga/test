function showSignInForm() {
    document.getElementById("sign-up-form").style = "display: none"
    document.getElementById("sign-in-form").style = "display: block"
}

function showSignUpForm() {
    document.getElementById("sign-up-form").style = "display: block"
    document.getElementById("sign-in-form").style = "display: none"
}

function restoreErrorsState() {
    var errors = document.getElementsByClassName("error")
    for (var i = 0; i < errors.length; i++) {
        errors[i].style = 'display:none;'
    }

    errors = document.getElementsByTagName("input")
    for (i = 0; i < errors.length; i++) {
        errors[i].classList.remove("error-input")
    }
}

function sendSignUpForm() {
    restoreErrorsState()

    var result = document.getElementById("result")
    result.innerHTML = ""
    var userName = document.getElementById("name")
    var userEmail = document.getElementById("email")
    var userMobile = document.getElementById("mobile")
    var userPassword = document.getElementById("password")
    var userCPassword = document.getElementById("c-password")
    var userDayBirthDay = document.getElementById("day")
    var userMonthBirthDay = document.getElementById("month")
    var userYearBirthDay = document.getElementById("year")
    var userAgree = document.getElementById("agree-checkbox")

    var isError = false

    var genders = document.getElementsByName('genders');
    for (var i = 0, length = genders.length; i < length; i++) {
        if (genders[i].checked) {
            var gender = genders[i].value
            break
        }
    }

    if (userName.value == '') {
        isError = true
        var errorName = document.getElementById("error-name")
        errorName.style = 'display:block;'
        errorName.innerHTML = 'Имя не может быть пустым'
        userName.classList.add("error-input")
    }

    if (userEmail.value == '') {
        isError = true
        var errorEmail = document.getElementById("error-email")
        errorEmail.style = 'display:block;'
        errorEmail.innerHTML = 'Email не может быть пустым'
        userEmail.classList.add("error-input")
    }

    if (userMobile.value == "") {
        isError = true
        var errorMobile = document.getElementById("error-mobile")
        errorMobile.style = 'display:block;'
        errorMobile.innerHTML = "Телефон не может быть пустым"
        userMobile.classList.add("error-input")
    }

    if (userPassword.value == "") {
        isError = true
        var errorPassword = document.getElementById("error-password")
        errorPassword.style = 'display:block;'
        errorPassword.innerHTML = "Введите пароль"
        userPassword.classList.add("error-input")
    }

    if (userCPassword.value == "") {
        isError = true
        var errorCPassword = document.getElementById("error-conform-password")
        errorCPassword.style = 'display:block;'
        errorCPassword.innerHTML = "Введите пароль еще раз"
        userCPassword.classList.add("error-input")
    }

    if (userDayBirthDay.value == "" || userMonthBirthDay.value == "" || userYearBirthDay.value == "") {
        isError = true
        var errorBirthContainer = document.getElementById("error-birth-container")
        errorBirthContainer.style = 'display:block;'
        errorBirthContainer.innerHTML = "Введите дату рождения"
    }

    if (!userAgree.checked) {
        isError = true
        var errorAgreeCheckbox = document.getElementById("error-agree-checkbox-container")
        errorAgreeCheckbox.style = 'display:block;'
        errorAgreeCheckbox.innerHTML = "Вы согласны с условиями регистрации?"
    }

    if (!isError) {
        result.innerHTML =
            "<div>Имя пользователя: " + userName.value + "</div>" +
            "<div>Email пользователя: " + userEmail.value + "</div>" +
            "<div>Телефон пользователя: " + userMobile.value + "</div>" +
            "<div>Дата рождения: " + userDayBirthDay.value + "-" + userMonthBirthDay.value + "-" + userYearBirthDay.value + "</div>" +
            "<div>Пол: " + gender + "</div>"
    }
}

function sendSignInForm() {
    restoreErrorsState()
    var result = document.getElementById("result-sign-in-form")
    result.innerHTML = ""
    var userEmail = document.getElementById("email-sign-in-form")
    var userPassword = document.getElementById("password-sign-in-form")
    var isError = false

    if (userEmail.value == '') {
        isError = true
        var errorEmail = document.getElementById("error-email-in-form")
        errorEmail.style = 'display:block;'
        errorEmail.innerHTML = 'Email не может быть пустым'
        userEmail.classList.add("error-input")
    }
    if (userPassword.value == "") {
        isError = true
        var errorPassword = document.getElementById("error-password-in-form")
        errorPassword.style = 'display:block;'
        errorPassword.innerHTML = "Введите пароль"
        userPassword.classList.add("error-input")
    }
    if (!isError) {
        result.innerHTML =
            "<div>Email пользователя: " + userEmail.value + "</div>" +
            "<div>Password пользователя: " + userPassword.value
    }
}

function fillYearOfBirth() {
    var userYear = document.getElementById("year")
    var result = ''
    var startYear = 1930
    var endYear = 2010
    for (var i = startYear; i < endYear; i++) {
        if (i === 1991) {
            result += '<option value=' + i + ' selected>' + i + '</option>'
        } else {
            result += '<option value=' + i + '>' + i + '</option>'
        }
    }
    userYear.innerHTML = result
}

function fillDayOfBirth(endDay) {
    var startDay = 1
    var userDay = document.getElementById("day")
    var userSelectedDay = parseInt(userDay.value)

    var result = ''
    for (var i = startDay; i <= endDay; i++) {
        if (i === userSelectedDay) {
            result += '<option value=' + i + ' selected>' + i + '</option>'
        } else {
            result += '<option value=' + i + '>' + i + '</option>'
        }
    }
    userDay.innerHTML = result
}

function getMonthsObject() {
    return {
        "1": {"name": "January", "countDays": 31},
        "2": {"name": "February", "countDays": 29},
        "3": {"name": "March", "countDays": 31},
        "4": {"name": "April", "countDays": 30},
        "5": {"name": "May", "countDays": 31},
        "6": {"name": "June", "countDays": 30},
        "7": {"name": "Jule", "countDays": 31},
        "8": {"name": "August", "countDays": 31},
        "9": {"name": "September", "countDays": 30},
        "10": {"name": "October", "countDays": 31},
        "11": {"name": "November", "countDays": 30},
        "12": {"name": "December", "countDays": 31},
    }
}

function fillMonthOfBirth() {
    var userMonth = document.getElementById("month")
    var result = ''
    var months = getMonthsObject()
    for (const [monthNumber, month] of Object.entries(months)) {
        result += '<option value=' + monthNumber + '>' + month.name + '</option>'
    }
    userMonth.innerHTML = result
}


function isLeapYear(year) {
    year = parseInt(year)
    return new Date(year, 1, 29).getDate() === 29;
}

function changeMonthAndYearHandler() {
    var monthNumber = document.getElementById("month").value
    var months = getMonthsObject()
    var countDays = months[monthNumber].countDays
    if (parseInt(monthNumber) === 2) {
        var selectedYear = document.getElementById('year')
        if (isLeapYear(selectedYear.value)) {
            countDays = 29
        } else {
            countDays = 28
        }

    }
    fillDayOfBirth(countDays)
}


document.addEventListener("DOMContentLoaded", function (event) {
        var submitSignUpForm = document.getElementById("submit-sign-up-form")
        submitSignUpForm.addEventListener('click', sendSignUpForm)

        var submitSignInForm = document.getElementById("submit-sign-in-form")
        submitSignInForm.addEventListener('click', sendSignInForm)

        var signUpFree = document.getElementById("sign-up-free")
        signUpFree.addEventListener('click', showSignUpForm)

        var signInFree = document.getElementById("sign-in-free")
        signInFree.addEventListener('click', showSignInForm)

        fillYearOfBirth()
        fillDayOfBirth(31)
        fillMonthOfBirth()


        /*var userMonth = document.getElementById("month")
        userMonth.addEventListener('change', function () {
            var userMonth = document.getElementById("month")
            alert(userMonth.value)

        })*/


        var userMonth = document.getElementById("month")
        userMonth.addEventListener('change', function (e) {
            changeMonthAndYearHandler()
        })

        var userYear = document.getElementById("year")
        userYear.addEventListener('change', function (e) {
            changeMonthAndYearHandler()
        })

    }
)
