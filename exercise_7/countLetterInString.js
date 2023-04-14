function letterCount(userString, letter) {
    userString = userString.toLowerCase();
    let strLen = userString.length;
    let count = 0;
    for (let i = 0; i<strLen; i++){
        if(userString[i] == letter){
        count = count +1;
        }
    }
    console.log("count of letter " + "\'" + letter + "\'" + " in the string " + "\"" +  userString + "\"" +  " is: " + count);
    return count;
}
function letterCount1( ) {
    console.log("Function letterCount1( ) is used to get user-inputs.");
    let userPrompt = require('prompt-sync')();
    let userStr = userPrompt("Enter the String: ");
    let letter = userPrompt("Enter the letter to count: ");
    letterCount(userStr, letter);
}
letterCount1( );


