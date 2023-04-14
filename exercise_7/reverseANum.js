"use strict";

function reverseNum(num) {
    var reverse = 0;
    var reminder;
    var n = num;
    while (n > 0) {
        reminder = n % 10;
        reverse = (reverse * 10) + reminder;
        n = Math.floor(n / 10);
    };
    console.log("Reverse of " + num + " is: " + reverse);
    return reverse;
}
``
function reverseNumber() {
    console.log("Function reverseNumber() is used to get user-input");
    const userPrompt = require("prompt-sync")();
    let number = userPrompt("Enter the number: ");
    reverseNum(number);
}
reverseNumber();
reverseNum(1234);
reverseNum(6599);

