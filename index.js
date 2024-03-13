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


function isNum(value) {
    let nums = "0123456789";
    return nums.includes(value);
}

function isOperation(op) {
    let operations = "+-/*";
    return operations.includes(op);
}

function allClear() {
    clearCurrentOperands();
    clearOldOperands();
    console.log("ALL CLEAR!");
}

function clearCurrentOperands() {
    currentOperands = {
        "numOne": "",
        "numTwo": "",
        "op": "",
    }
}

function clearOldOperands () {
    oldOperands = {
        "results": "",
        "oldNum": "",
        "oldOp": "",
    }
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

// Select 
function modifyNum(num) {
    if (currentOperands["op"] == "") {
        currentOperands["numOne"] += num;
    } else {
        currentOperands["numTwo"] += num;
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
    moveValues(results, numTwo, operation);
    return results;
}

function moveValues(results, numTwo, operation) {
    oldOperands["results"] = results;
    oldOperands["oldNum"] = numTwo;
    oldOperands["oldOp"] = operation
    clearCurrentOperands();
}

function onClick(event) {
    let val = event.target.dataset.val;
    if (val == "AC") {
        allClear();
        return;
    }
    
    if (isNum(val)) {
        modifyNum(val);
    }

    if (isOperation(val)) {
        if (currentOperands["numOne"] && currentOperands["numTwo"] == "") {
            // Only one operand, we don't need our old operands
            clearOldOperands();
        } else if (currentOperands["numOne"] && currentOperands["numTwo"]) {
            // If two operands already, evaluate to create room for next number
            evaluate(currentOperands["numOne"], currentOperands["numTwo"], currentOperands["op"]);
            currentOperands["numOne"] = oldOperands["results"];
        } else if (currentOperands["numOne"] == "" && oldOperands["results"]) {
            // If there's no operand, then we are working on the previous result
            currentOperands["numOne"] = oldOperands["results"];
            clearOldOperands();
        } else if (currentOperands["numOne"] == "" && oldOperands["results"] == "") {
            // Since default display is 0, we will work with 0
            currentOperands["numOne"] = "0";
        }
        currentOperands["op"] = val;
    }

    if (val == "=") {
        if (currentOperands["numOne"] && currentOperands["numTwo"]) {
            evaluate(currentOperands["numOne"], currentOperands["numTwo"], currentOperands["op"]);
        }   else if (currentOperands["numOne"] && !currentOperands["numTwo"] && currentOperands["op"]) {
            // If only numOne and an op, then we perform it on itself
            evaluate(currentOperands["numOne"], currentOperands["numOne"], currentOperands["op"]);
        }   else if (oldOperands["results"]) {
            // If results then perform previous operations on results
            evaluate(oldOperands["results"], oldOperands["oldNum"], oldOperands["oldOp"]);
        }
    }

    console.log(currentOperands)
    console.log(oldOperands);
    console.log("############################################################################################");
}

let display = document.querySelector(".display");
let buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
    button.addEventListener("click", onClick);
});

let oldOperands = {
    "results": "",
    "oldNum": "",
    "oldOp": "",
}
let currentOperands = {
    "numOne": "",
    "numTwo": "",
    "op": "",
}