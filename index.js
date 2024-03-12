/* 
I NEED TO BUILD OUT THIS THING!

- Get rid of leading zeroes
- Typing a number after equals issue

*/

"use strict";
function divide(numOne, numTwo) {
    if (numTwo == 0) {
        return NaN;
    }
    return numOne / numTwo;
}

function multiply(numOne, numTwo) {
    return numOne * numTwo;
}
function subtract(numOne, numTwo) {
    return numOne - numTwo;
}
function add(numOne, numTwo) {
    return numOne + numTwo;
}

function changeDisplay(num) {
    display.textContent = num;
    console.log(operands);
}

function allClear() {
    operands = [];
    console.log("ALL CLEAR!");
    changeDisplay(0);
}

function performOtherOp(op) {
    if (operands.length < 3) {
        if (op == "sign") {
            operands[0] = changeSign(0);
        } else {
            operands[0] = changePercent(0);
        }
    } else {
        if (op == "sign") {
            operands[2] = changeSign(2);
        } else {
            operands[2] = changePercent(2);
        }
    }
}

function changeSign(index) {
    if (operands[index].includes("-")) {
        return operands[index].slice(1);
    } else {
        return "-" + operands[index];
    }
}

function changePercent(index) {
    let num = parseFloat(operands[index]);
    let percentage = num / 100;
    return String(percentage);
}

function modifyNum(num) {
    let lastIndex = operands.length - 1;

    if (!operands[lastIndex].includes(".") || numbers.includes(num)) {
        operands[lastIndex] += num;
    }
}

function evaluate(numOne, numTwo, operation) {
    let floatNumOne = parseFloat(numOne);
    let floatNumTwo = parseFloat(numTwo);
    let results;
    switch (operation) {
        case "+":
            results = add(floatNumOne, floatNumTwo);
            break;
        case "-":
            results = subtract(floatNumOne, floatNumTwo);
            break;
        case "*":
            results = multiple(floatNumOne, floatNumTwo);
            break;
        case "/":
            results = divide(floatNumOne, floatNumTwo);
            break;
        default:
            console.log("Hello from func evaluate");
    }
    results = String(results);
    return results;
}

function onClick(event) {
    let val = event.target.dataset.val;
    if (val == "AC") {
        allClear();
        return;
    }
    // if val is num






}

let display = document.querySelector(".display");
let buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
    button.addEventListener("click", onClick);
});

let operations = "+-/*";
let equals = "=";
let otherOps = "sign%";
let operands = [];
let storedNum = ""

function isNum(num) {
    let nums = "0123456789";
    return nums.includes(num);
}