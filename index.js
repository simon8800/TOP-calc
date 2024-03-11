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
// function to clear screen

let operands = [];

function onClick(event) {
    console.log(event.target.dataset.val);
}

let buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
    button.addEventListener("click", onClick);
});
