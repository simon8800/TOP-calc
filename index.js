/* 
I NEED TO BUILD OUT THIS THING!

- What happens when a user presses numbers
- What happens when a user presses an operation
- What happens if a user presses equals
- What happens if a user presses equals with only 1 number

*/

// function to change sign of number
// function to change to percentage
// function to clear screen
// function to divide numbers, be careful of dividing by 0
// function to multiply numbers
// function to subtract numbers
// function to add numbers
// function to calculate results
console.log("hello from index.js");

function onClick(event) {
    console.log(event.target.dataset.val)
}



let buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
    button.addEventListener('click', onClick);
})

let nums = [];