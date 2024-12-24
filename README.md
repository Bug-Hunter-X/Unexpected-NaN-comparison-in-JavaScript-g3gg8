# Unexpected NaN comparison in JavaScript
This repository demonstrates a common, yet subtle, error in JavaScript related to the comparison of NaN (Not a Number) values.

## The Problem
JavaScript's loose comparison (==) and strict comparison (===) operators behave unexpectedly when dealing with NaN. The strict equality operator (===) always returns false when comparing NaN to itself or any other value, including NaN. The loose equality operator (==) also returns false in this case.

This behavior can lead to unexpected results in your code if you're not aware of it.

## Solution
The recommended way to check for NaN is to use the `isNaN()` function. This function returns `true` if the value is NaN, and `false` otherwise.

## How to run the code
1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` in your preferred JavaScript environment (e.g., browser's console, Node.js).
3. Run the code in each file to see the different outputs.

This example highlights the importance of understanding how JavaScript handles NaN to avoid unexpected behavior in your programs.