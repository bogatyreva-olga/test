function inputNumberToResult(e) {
    document.getElementById("result").value += e.target.innerHTML
}

function inputOperatorToResult(e) {
    document.getElementById("result").value += e.target.innerHTML
    let result = document.getElementById("result").value
    let operator = e.target.innerHTML
    if (['+', '-', '/', '*'].includes(result.charAt(result.length - 1))) {
        result.slice(0, -1) + operator
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    let inputButtons = document.getElementsByClassName("input-button")
    for (let i = 0; i < inputButtons.length; i++) {
        inputButtons[i].addEventListener("click", inputNumberToResult)
    }
    let inputOperators = document.getElementsByClassName("input-operator")
    for (let i = 0; i < inputOperators.length; i++) {
        inputOperators[i].addEventListener("click", inputOperatorToResult)


    }

})

/*
 результаты закрыты для ручного ввода

  Операторы не вводятся друг за другом.
  Если последний символ является оператором, то заменить его на новый введенный оператор.
  Оператор не может быть первым символом в строке, за исключением минуса.

   Точка не может быть первым символом в строке.
   Точка не может ставиться после оператора
   Нельзя ставить точки подряд.
   В числе м.б. тольк одна точка.


 Если строка для вычисления результата содержит недопустимые символы, написать error
   вывод результатов при назатии "="

   если первый символ 0 и потом вводится число заменяем 0, на число.
   если первый символ 0 и потом вводится точка, то мы добавляем точку.

   Если нажимаешь на С, то происходит очистка окна результата.

    */
