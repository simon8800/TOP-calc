/* 
I NEED TO BUILD OUT THIS THING!

- What happens when a user presses numbers
- What happens when a user presses an operation
- What happens if a user presses equals
- What happens if a user presses equals with only 1 number

*/

"use strict";
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

function changeDisplay(num) {
    display.textContent = num;
    console.log(operands);
}

function allClear() {
    operands = [];
    console.log("ALL CLEAR!")
    changeDisplay(0);
}

// changes sign or turns into a percentage
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
    switch(operation) {
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
            console.log("Hello from func evaluate")
    }
    return String(results);
}

function onClick(event) {
    let val = event.target.dataset.val;
    if (val == "AC") {
        allClear();
        return;
    }

    // if stack length is 0, either add a number or do nothing
    if (operands.length == 0) {
        if (numbers.includes(val) || val == ".") {
            operands.push(val);
        } else if (otherOps.includes(val)) {
            operands.push("0");
            performOtherOp(val);
        } else if (operations.includes(val)) {
            operands.push("0");
            operands.push(val);
        }
        console.log(operands);
        changeDisplay(operands[0]);
        return;
    }

    // if the stack length is 1, then either add num or push operation or change sign or change percentage
    if (operands.length == 1) {
        if (numbers.includes(val) || val == ".") {
            modifyNum(val);
        } else if (operations.includes(val)) {
            operands.push(val);
        } else if (otherOps.includes(val)) {
            performOtherOp(val);
        }
        changeDisplay(operands[0]);
        return;
    }

    // if stack length is 2, then either add num or change operation or other op on first num
    if (operands.length == 2) {
        if (numbers.includes(val) || val == ".") {
            operands.push(val);
            changeDisplay(operands[2]);
        } else if (operations.includes(val)) {
            operands[1] = val;
        } else if (otherOps.includes(val)) {
            otherOps(val);
        }
        console.log(operands);
        return;
    }

    // if array length is 3, then modify num, otherOp on second num, or
    if (operands.length == 3) {
        if (numbers.includes(val) || val == ".") {
            modifyNum(val);
            changeDisplay(operands[2]);
        } else if (operations.includes(val)) {
            // I have an issue where if I want to perform another op when I have a result already
            // I want to keep the 2nd number in case the user wants to continue adding the same thing? Or do I not want that?
            operands[0] = evaluate(operands[0], operands[2], operands[1]);
            operands[1] = val;
            operands.pop();
            changeDisplay(operands[0]);
        } else if (otherOps.includes(val)) {
            performOtherOp(val);
            changeDisplay(operands[2]);
        } else if (val == equals) {
            operands[0] = evaluate(operands[0], operands[2], operands[1]);
            changeDisplay(operands[0]);
        }
        console.log(operands);
        return;
    }
}





let display = document.querySelector(".display");
let buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
    button.addEventListener("click", onClick);
});

let operations = "+-/*";
let equals = "=";
let numbers = "01234567890";
let otherOps = "sign%";
let operands = [];