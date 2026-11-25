
let calculator = document.getElementsByClassName("calculator")[0]
let input = document.getElementsByClassName("display")[0]
let container = document.getElementsByClassName("container")[0]

let add = document.getElementById("add")
let del = document.getElementById("Del")
let ac = document.getElementById("ac")
let mul = document.getElementById("mul")
let mod = document.getElementById("mod")

let seven = document.getElementById("seven")
let eight = document.getElementById("eight")
let nine = document.getElementById("nine")
let six = document.getElementById("six")
let five = document.getElementById("five")
let four = document.getElementById("four")
let three = document.getElementById("three")
let two = document.getElementById("two")
let one = document.getElementById("one")
let zero = document.getElementById("zero")

let div = document.getElementById("div")
let pow = document.getElementById("pow")
let bra = document.getElementById("bra")
let equal = document.getElementById("equal")
let dot = document.getElementById("dot")
let calculation = document.getElementsByClassName("calculation")[0]

// Number buttons

one.addEventListener("click", () => {
    input.value += "1"
})

two.addEventListener("click", () => {
    input.value += "2"
})

three.addEventListener("click", () => {
    input.value += "3"
})

four.addEventListener("click", () => {
    input.value += "4"
})

five.addEventListener("click", () => {
    input.value += "5"
})

six.addEventListener("click", () => {
    input.value += "6"
})

seven.addEventListener("click", () => {
    input.value += "7"
})

eight.addEventListener("click", () => {
    input.value += "8"
})

nine.addEventListener("click", () => {
    input.value += "9"
})

zero.addEventListener("click", () => {
    input.value += "0"
})

// Delete button

del.addEventListener("click", () => {
    input.value = input.value.slice(0, -1)
})

// Clear button

ac.addEventListener("click", () => {
    input.value = ""
    calculation.innerText = ""
})

// Percentage button

mul.addEventListener("click", () => {
    input.value += "%"
})

// Division button

mod.addEventListener("click", () => {
    input.value += "/"
})

// Multiplication button

add.addEventListener("click", () => {
    input.value += "*"
})

// Subtraction button

div.addEventListener("click", () => {
    input.value += "-"
})

// Addition button

pow.addEventListener("click", () => {
    input.value += "+"
})

// Decimal button

dot.addEventListener("click", () => {
    input.value += "."
})

// Plus / Minus button

// bra.addEventListener("click", () => {
//     let match = input.value.match(/-?\d*\.?\d+$/)

//     if (match) {
//         let number = match[0]
//         let position = match.index

//         if (number.startsWith("-")) {
//             input.value = input.value.slice(0, position) + number.slice(1)
//         } else {
//             input.value = input.value.slice(0, position) + "-" + number
//         }
//     } else if (input.value === "") {
//         input.value = "-"
//     }
// })
equal.addEventListener("click", () => {
    try {
        let expression = input.value;

        if (expression !== "") {
            let answer = eval(expression);

            calculation.innerText = expression;
            input.value = answer;
        }
    } catch (error) {
        input.value = "Error";
    }
})

// Equal button

equal.addEventListener("click", () => {
    try {
        if (input.value !== "" && /^[0-9+\-*/%.() ]+$/.test(input.value)) {
            input.value = eval(input.value)
        }
    } catch (error) {
        input.value = "Error"
    }
})
