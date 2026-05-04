//variables
let quantity = document.getElementById("quantity")
let cardNumber = document.getElementById("cardNumber")

//functions
function calcTotal() {
    let tickets = quantity.value

    if (tickets == "" || tickets <= 0) {
        document.getElementById("total").innerHTML = 0
    } else {
        let total = tickets * 20
        document.getElementById("total").innerHTML = total
    }
}

function resetTotal() {
    document.getElementById("total").innerHTML = 0
    document.getElementById("cardMessage").innerHTML = ""
}

cardNumber.oninput = function() {
    if (cardNumber.value.length == 16) {
        document.getElementById("cardMessage").innerHTML = "Card number looks good!"
    } else {
        document.getElementById("cardMessage").innerHTML = ""
    }
}
