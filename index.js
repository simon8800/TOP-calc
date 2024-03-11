/* 
I NEED TO BUILD OUT THIS THING!

- What happens when a user presses numbers
- What happens when a user presses an operation
- What happens if a user presses equals
- What happens if a user presses equals with only 1 number

*/

"use strict";

// // function to change sign of number
// function changeSign(num) {
//     return num * -1;
// }
// // function to change to percentage
// function percent(num) {
//     return num / 100;
// }
// // function to divide numbers, be careful of dividing by 0
// function divide(numOne, numTwo) {
//     if (numTwo == 0) {
//         return NaN;
//     }
//     return numOne / numTwo;
// }
// // function to multiply numbers
// function multiply(numOne, numTwo) {
//     return numOne * numTwo;
// }
// // function to subtract numbers
// function subtract(numOne, numTwo) {
//     return numOne - numTwo;
// }
// // function to add numbers
// function add(numOne, numTwo) {
//     return numOne + numTwo;
// }
// function to calculate results

function evaluate() {}

function allClear() {
    return null;
}

function onClick(event) {
    let value = event.target.dataset.val;
    let lastIndex = "";
    // if it's a number or decimal
    if (numbers.includes(value) && value != ".") {
        if (getNumTwo) {
            operands["numTwo"] += value;
        } else {
            operands["numOne"] += value;
        }
    } else {
        if (getNumTwo) {
        }
    }
}

let display = document.querySelector(".display");
let buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
    button.addEventListener("click", onClick);
});

let operands = {
    numOne: "",
    numTwo: "",
    op: "",
};
let getNumTwo = false;
let operations = "+-/*=";
let nums = "01234567890.";
let otherOperations = "sign%";
