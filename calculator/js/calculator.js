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
    let operator = e.target.getAttribute("data-value")
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

function getCalculateResult() {
    let result = document.getElementById("result").value
    return parseFloat(eval(result))

}

function calculateResult() {
    document.getElementById("result").value = getCalculateResult()
}

function addToMemory() {
    let memoryValue = parseFloat(document.getElementById("memory").innerHTML)
    calculateResult()
    document.getElementById("memory").innerHTML = memoryValue + getCalculateResult()
}

function memoryRead() {
    document.getElementById("result").value = document.getElementById("memory").innerHTML
}

function memoryClear() {
    document.getElementById("memory").innerHTML = ""
}

function subtractToMemory() {
    let memoryValue = parseFloat(document.getElementById("memory").innerHTML)
    calculateResult()
    document.getElementById("memory").innerHTML = memoryValue - getCalculateResult()
}

function clearResult() {
    document.getElementById("result").value = ""
}

function inputDoubleZeroToResult() {
    let result = document.getElementById("result").value
    if (result === "") {
        document.getElementById("result").value = '0'
        return
    }
    if (['+', '-', '/', '*'].includes(result.charAt(result.length - 1))) {
        document.getElementById("result").value += '0'
        return
    }
    let arr = result.split(/[+\-\*\/]+/)
    if (arr[arr.length - 1] === '0') {
        return
    }
    document.getElementById("result").value += '00'
}

function inputBackspaceToResult() {
    document.getElementById("result").value = document.getElementById("result").value.slice(0, document.getElementById("result").value.length - 1)
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
    document.getElementById("clear").addEventListener("click", clearResult)
    document.getElementById("dot").addEventListener("click", inputDotToResult)
    document.getElementById('calculator').addEventListener("click", calculateResult)
    document.getElementById("memory-add").addEventListener("click", addToMemory)
    document.getElementById("memory-read").addEventListener("click", memoryRead)
    document.getElementById("memory-clear").addEventListener("click", memoryClear)
    document.getElementById("memory-subtract").addEventListener("click", subtractToMemory)
    document.getElementById("double-zero").addEventListener("click", inputDoubleZeroToResult)
    document.getElementById("backspace").addEventListener("click", inputBackspaceToResult)
})

/*
   +результаты закрыты для ручного ввода

   +Точка не может быть первым символом в строке.
   +Точка не может ставиться после оператора
   +Нельзя ставить точки подря
  + В числе м.б. тольк одна точка.


  Если строка для вычисления результата содержит недопустимые символы, написать error
   вывод результатов при назатии "="

   +если первый символ 0 и потом вводится число заменяем 0, на число.
   +если первый символ 0 и потом вводится точка, то мы добавляем точку.

  + Если нажимаешь на С, то происходит очистка окна результата.

   + отнимание из памяти
   + восстановление из памяти input result;
   + очистка памятиж
   00
   удаление последнего символа
   квадратный корень


    */