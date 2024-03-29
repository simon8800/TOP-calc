/* 
I NEED TO BUILD OUT THIS THING!

- Get rid of leading zeroes
- Adding decimals

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

function changeDisplay(value) {
    display.textContent = value;
}

function isNum(value) {
    let nums = "0123456789.";
    return nums.includes(value);
}

function isOperation(op) {
    let operations = "+-/*";
    return operations.includes(op);
}

function allClear() {
    clearCurrentOperands();
    clearOldOperands();
    changeDisplay("0");
    console.log("ALL CLEAR!");
}

function clearCurrentOperands() {
    currentOperands = {
        numOne: "",
        numTwo: "",
        op: "",
    };
}

function clearOldOperands() {
    oldOperands = {
        results: "",
        oldNum: "",
        oldOp: "",
    };
}

function isOtherOp(op) {
    let otherOps = "sign%";
    return otherOps.includes(op);
}

function performOtherOp(op) {
    let key;
    let number;

    if (oldOperands["results"] && currentOperands["numOne"] == "") {
        key = "results";
        number = oldOperands["results"];
    } else if (currentOperands["op"] == "") {
        key = "numOne";
        number = currentOperands["numOne"];
    } else {
        key = "numTwo";
        number = currentOperands["numTwo"];
    }

    if (op == "sign") {
        number = changeSign(number);
        if (key == "results") {
            oldOperands["results"] = number;
        } else {
            currentOperands[key] = number;
        }
    } else {
        number = changePercent(number);
        if (key == "results") {
            oldOperands["results"] = number;
        } else {
            currentOperands[key] = number;
        }
    }
}

function changeSign(number) {
    if (number.includes("-")) {
        return number.slice(1);
    } else {
        return "-" + number;
    }
}

function changePercent(number) {
    let num = parseFloat(number);
    let percentage = num / 100;
    return String(percentage);
}

function modifyNum(value) {
    let key;
    let number;

    if (currentOperands["op"] == "") {
        key = "numOne";
        number = currentOperands["numOne"];
    } else {
        key = "numTwo";
        number = currentOperands["numTwo"];
    }

    // if the number is nothing, then make the number = value or make it 0.
    if (number == "" && value != ".") {
        number = value;
    } else if (number == "" && value == ".") {
        number = "0.";
    } else if (number != "" && value != ".") {
        number += value;
    } else if (number != "" && value == "." && !number.includes(value)) {
        number += value;
    }

    currentOperands[key] = number;
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
            results = multiply(floatNumOne, floatNumTwo);
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
    oldOperands["oldOp"] = operation;
    clearCurrentOperands();
}

function cleanNumber(num) {

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
            evaluate(
                currentOperands["numOne"],
                currentOperands["numTwo"],
                currentOperands["op"]
            );
            currentOperands["numOne"] = oldOperands["results"];
        } else if (currentOperands["numOne"] == "" && oldOperands["results"]) {
            // If there's no operand, then we are working on the previous result
            currentOperands["numOne"] = oldOperands["results"];
            clearOldOperands();
        } else if (
            currentOperands["numOne"] == "" &&
            oldOperands["results"] == ""
        ) {
            // Since default display is 0, we will work with 0
            currentOperands["numOne"] = "0";
        }
        currentOperands["op"] = val;
    }

    if (isOtherOp(val)) {
        performOtherOp(val);
    }

    if (val == "=") {
        if (currentOperands["numOne"] && currentOperands["numTwo"]) {
            evaluate(
                currentOperands["numOne"],
                currentOperands["numTwo"],
                currentOperands["op"]
            );
        } else if (
            currentOperands["numOne"] && 
            !currentOperands["op"] && 
            oldOperands["results"]
        ) {
            // Happens when a user gets a result, then a new number, and then equals
            evaluate(currentOperands["numOne"], oldOperands["oldNum"], oldOperands["oldOp"]);
        } else if (
            currentOperands["numOne"] &&
            !currentOperands["numTwo"] &&
            currentOperands["op"]
        ) {
            // If only numOne and an op, then we perform it on itself
            evaluate(
                currentOperands["numOne"],
                currentOperands["numOne"],
                currentOperands["op"]
            );
        } else if (oldOperands["results"]) {
            // If results then perform previous operations on results
            evaluate(
                oldOperands["results"],
                oldOperands["oldNum"],
                oldOperands["oldOp"]
            );
        }
    }

    if (currentOperands["numOne"] && !currentOperands["numTwo"]) {
        changeDisplay(currentOperands["numOne"]);
    } else if (currentOperands["numTwo"]) {
        changeDisplay(currentOperands["numTwo"]);
    } else if (oldOperands["results"] != "") {
        if (oldOperands["results"] != "NaN") {
            changeDisplay(oldOperands["results"]);
        } else {
            alert("Don't divide by zero pls");
            allClear();
        }
    }

    console.log(currentOperands);
    console.log(oldOperands);
    console.log("\n");
}

let display = document.querySelector(".display");
let buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
    button.addEventListener("click", onClick);
});

let oldOperands = {
    results: "",
    oldNum: "",
    oldOp: "",
};
let currentOperands = {
    numOne: "",
    numTwo: "",
    op: "",
};
