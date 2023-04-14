"use strict"
let userPrompt = require('prompt-sync')();
function countVowel(userString) {
    userString = userString.toLowerCase();
    let count = 0;
    for (let i = 0; i < userString.length; i++) {
        if ((userString.charAt(i) == 'a') || (userString.charAt(i) == 'e') || (userString.charAt(i) == 'i') || (userString.charAt(i) == 'o') || (userString.charAt(i) == 'u')) {
            count++;
        }
    }
    console.log("There are " + count + " vowels in the string, " + " \"" + userString + "\"");
}

function countVowelRegularExp(userString) {
    userString = userString.toLowerCase();
    console.log("There are " + userString.match(/[aeiou]/g).length + " vowels in the string, " + " \"" + userString + "\"");
    return userString.match(/[aeiou]/g).length;
    console.log("There are " + str.length + " vowels in the string, " + " \"" + userString + "\"");
}

function cntV() {
    console.log("Count vowels in a string.");
    let userStr = userPrompt("Enter the String: ");
    countVowel(userStr);
    console.log("Count vowels in a string using regular expression.");
    userStr = userPrompt("RegularExp: Enter the String: ");
    countVowelRegularExp(userStr);
}

cntV(); //count vowels in a string from user-prompt/keyboard input
