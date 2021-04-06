function inputDisabled() {
    let inputNumbers = document.getElementById("input-number-js")
    inputNumbers.disabled = !inputNumbers.disabled
    inputNumbers.value = ""

    // inputNumbers.setAttribute("disabled", "disabled")
    //  if (inputNumbers.getAttribute("disabled") === "disabled"){
    //      inputNumbers.removeAttribute("disabled")
    //  }else{
    //      inputNumbers.setAttribute("disabled", "disabled")
    //  }
}


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("toggle-disabled-js").addEventListener("click", inputDisabled)

})
//document.getElementById("input-number-js").disabled = true