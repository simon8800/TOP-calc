# TOP-calc

This calculator allows a user to perform these operations on one pair of numbers at a time:

- Add
- Subtract
- Multiply
- Divide
- Performs operations on two numbers at a time

I am basing the calculator's logic off of the iOS and Windows calculator app:

- When a user presses `=` after getting a result, it will perform the same operation using the 2nd operand on the results
  - e.g. Pressing the following keys in order: `2` `+` `1` `=` results in `3`. Pressing `=` again will perform `+` `1` on `3`, resulting in `4`.
- When a user enters an operation while there is already a pair of numbers in queue, the calculator will evaluate that pair first.
  - e.g. Pressing the following keys in order `2` `+` `1` `+` will cause the calcualtor to evaluate and display the results of `2 + 1` before evaluating the next operation.
- When a user presses enters one number, operation, then `=`, the calculator will evaluate using the same number as both operands.
  - e.g. Pressing the following keys in order `2` `+` `=` will results in `4`.


## Thought process

I created two objects to hold certain values:

- `currentOperands` holds the values that the user is currently punching in.
  - `numOne` holds the first operand
  - `numTwo` holds the second number operand
  - `op` holds the current operator
- `oldOperands` holds the values after evaluating `currentOperands`
  - `results` holds the results
  - `oldNum` holds `numTwo`'s value
  - `oldOp` holds `op`'s value
- Using a ton of conditionals... maybe too many... I will find which operands currently hold a value to find the right sequence of functions to execute
  
## Latest thoughts

As of 3/13/24, I have decided to move on from this project since I've gotten a lot of exercise from it. There are still a few bugs I need to sort out such as:

- Leading zeroes
- Adding a negative sign, followed by a number when the screen is cleared

There may be more bugs I haven't come across yet.