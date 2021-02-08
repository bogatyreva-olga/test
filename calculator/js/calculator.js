function inputNumberToResult(e) {
    let number = e.target.innerHTML
    let result = document.getElementById("result").value
    let arr = result.split(/[+\-\*\/]+/)
    if (arr[arr.length - 1] === '0') {
        result = result.slice(0, -1) + number
    } else {
        result += number
    }
    document.getElementById("result").value = result
}

function inputOperatorToResult(e) {
    let result = document.getElementById("result").value
    let operator = e.target.innerHTML
    if (result === "" && operator !== '-') {
        return
    }
    if (['+', '-', '/', '*'].includes(result.charAt(result.length - 1))) {
        result = result.slice(0, -1) + operator
    } else {
        result += operator
    }
    document.getElementById("result").value = result
}

function inputDotToResult() {
    let result = document.getElementById("result").value
    if (result === "") {
        return
    }
    if (['+', '-', '/', '*', '.'].includes(result.charAt(result.length - 1))) {
        return
    }
    let arr = result.split(/[+\-\*\/]+/)
    if (arr[arr.length - 1].indexOf(".") !== -1) {
        return
    }

    document.getElementById("result").value += "."

}


document.addEventListener("DOMContentLoaded", function (event) {
    let inputNumbers = document.getElementsByClassName("input-number")
    for (let i = 0; i < inputNumbers.length; i++) {
        inputNumbers[i].addEventListener("click", inputNumberToResult)
    }
    let inputOperators = document.getElementsByClassName("input-operator")
    for (let i = 0; i < inputOperators.length; i++) {
        inputOperators[i].addEventListener("click", inputOperatorToResult)
    }
    document.getElementById("clear").addEventListener("click", function () {
        document.getElementById("result").value = ""
    })
    document.getElementById("dot").addEventListener("click", inputDotToResult)


/*
   +результаты закрыты для ручного ввода

   +Точка не может быть первым символом в строке.
   +Точка не может ставиться после оператора
   +Нельзя ставить точки подряд.
  + В числе м.б. тольк одна точка.


  Если строка для вычисления результата содержит недопустимые символы, написать error
   вывод результатов при назатии "="

   +если первый символ 0 и потом вводится число заменяем 0, на число.
   +если первый символ 0 и потом вводится точка, то мы добавляем точку.

  + Если нажимаешь на С, то происходит очистка окна результата.

    */