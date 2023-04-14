function checkPrime(number) {
    let isPrime = true;
    if (number === 1) {
        console.log("1 is neither prime nor composite");
        isPrime = false;
    } else if (number > 1) {//for number ==2, isPrime is true
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;//once we find another factor, we break the loop
            }
        }
        if (isPrime) {
            console.log(number + " is a prime number!");
        } else {
            console.log(number + " is not a prime number!");
        }
        return isPrime;
    }
}
function checkPrime1() {
    console.log("Function checkPrime1() is used to get user-input.");
    const userPrompt = require("prompt-sync")();
    let number = parseInt(userPrompt("Please enter the number to check if its prime: "));
    checkPrime(number);
}
checkPrime1();

