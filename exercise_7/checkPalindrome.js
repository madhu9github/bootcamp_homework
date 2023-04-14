function checkPalindrome(str) {
    let inputStr = str;
    let isPalindrome = true;
    let re = /[^A-Za-z0-9]/g;//Using regular expression to identify and replace special characters
    inputStr = str.toLowerCase().replace(re, "");//converted to lowercase and removed special characters
    let len = inputStr.length;
    for (let i = 0; i < len / 2; i++) {
        if (inputStr[i] != inputStr[len - 1 - i]) {
            isPalindrome = false;
            break;
        }
    }
    if (isPalindrome) {
        console.log("Yes, input string is a palindrome");
    } else {
        console.log("No, input string is not a palindrome");
    }
    return isPalindrome;
}

function checkPalindrome1() {
    console.log("Function checkPalindrome1() is used to get user-input for the string");
    const userPrompt = require("prompt-sync")();
    let str = userPrompt("Enter the input string: ");
    console.log(str);
    checkPalindrome(str);
}
checkPalindrome1();
