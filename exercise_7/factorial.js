let factorial = 1;
let userPrompt = require('prompt-sync')();
function getFactorialRecursive(number) {
    if (number <= 1) {
        return factorial * 1;
    }
    if (number > 1) {
        factorial = number * getFactorialRecursive(number - 1);
        number = number - 1;
        return factorial;
    }
}

function getFactorial(number) {
    factorial = 1;
    while (number > 1) {
        factorial = number * factorial;
        number = number - 1;
    }
    return factorial;
}
function getFactorial1() {
    //let userPrompt = require('prompt-sync')();
    let num = userPrompt("Enter the number: ");
    factorial = getFactorial(num);
    console.log("Factorial of the number is: " + factorial);
    factorial = 1;
}
function getFactorial1Recursive() {
    //let userPrompt = require('prompt-sync')();
    let num = userPrompt("Using Recursive Function method. Enter the number: ");
    let factorialRecurcise = getFactorialRecursive(num);
    console.log("Factorial using recurcise function is: " + factorialRecurcise);
    factorial = 1;
}
getFactorial1();// factorial of a user-inputted number
getFactorial1Recursive(); // factorial using recursive function

