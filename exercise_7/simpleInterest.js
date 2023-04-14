function simpleInt(principalAmount, rateOfInt, timeInYears) {
    console.log("Principal amount is: " + principalAmount + ". Rate of interest is: " + rateOfInt + " percent. Time is: " + timeInYears + " years.") ;
    let totalAmount = 0;
    totalAmount = principalAmount + ((principalAmount * rateOfInt * timeInYears) / 100);
    console.log("****Total amount calculated as per the simple interest formula is****: " + totalAmount);
    return totalAmount;
}
function simpleInt1() {
    console.log("Function simpleInt1() is used to get user-inputs");
    const userPrompt = require("prompt-sync")();
    let prinAmount = parseFloat(userPrompt("Enter the principal amount: "));
    let rateOfIn = parseFloat(userPrompt("Enter the rate of interest: "));
    let timeInYears = parseFloat(userPrompt("Enter the timeInYears: "));
    simpleInt(prinAmount, rateOfIn, timeInYears);
}
simpleInt1();
simpleInt(15000, 7, 11);
simpleInt(100000, 3.5, 5);
simpleInt(40000, 5.1, 4.5);














