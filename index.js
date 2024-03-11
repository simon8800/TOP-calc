/* 
I NEED TO BUILD OUT THIS THING!

- What happens when a user presses numbers
- What happens when a user presses an operation
- What happens if a user presses equals
- What happens if a user presses equals with only 1 number

*/

"use strict";

// function to change sign of number
function changeSign(num) {
    return num * -1;
}
// function to change to percentage
function percent(num) {
    return num / 100;
}
// function to divide numbers, be careful of dividing by 0
function divide(numOne, numTwo) {
    if (numTwo == 0) {
        return NaN;
    }
    return numOne / numTwo;
}
// function to multiply numbers
function multiply(numOne, numTwo) {
    return numOne * numTwo;
}
// function to subtract numbers
function subtract(numOne, numTwo) {
    return numOne - numTwo;
}
// function to add numbers
function add(numOne, numTwo) {
    return numOne + numTwo;
}
// function to calculate results
function evaluate(numOne, numTwo, operation) {
    /* 
    Picks which operation to use
    Accepts three inputs
    */
}
// function to clear screen
function allClear() {
    display.textContent = "0";
}

function onClick(event) {
    let value = event.target.dataset.val;
    let operator = operands[1];
    let numTwo = operands[2];
    if (value == "AC") {
        allClear();
        return;
    }
    if (nums.includes(value) && !getNumTwo) {
        // check if it's a decimal point and if there's already a decimal point
        if (value == "." && operands[0].includes[value]) {
            return;
        } else {
            operands[0] += value;
            return;
        }
    }

    if (nums.includes(value) && getNumTwo) {
        if (value == "." && operands[2].includes[value]) {
            return;
        } else {
            operands[2] += value;
            return;
        }
    }

    // I need to get 3 user inputs
    // numOne, operation, and numTwo -> var operands

    // When a user hits presses a non-num key do the following:
    // If numTwo is empty, then perform operation to numOne with itself
    // If numTwo is non-empty, then perform operation

    // If user hits a num key do the following:
    // Keep getting numOne as long as getNumTwo is false
    // Once user hits an operation, set getNumTwo to true
    // Keep getting numTwo until user hits non-num key
}

let display = document.querySelector(".display");
let buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
    button.addEventListener("click", onClick);
});

let operands = ["0", "", "0"];
let getNumTwo = false;

let operations = "+-/*";
let nums = "01234567890.";
let funcs = "sign%";
