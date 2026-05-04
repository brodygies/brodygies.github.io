//variables
let firstName = document.querySelector("#fname")
let heading = document.querySelector("#heading")

//functions
firstName.oninput = function() {
    if (firstName.value == "Brody") {
        heading.innerHTML = "It's Me!!"
    } else {
        heading.innerHTML = "We Appreciate the Feedback"
    }
}

function resetHeading() {
    heading.innerHTML = "Contact Us"
}
