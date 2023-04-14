function compoundInt(principalAmount, rateOfInt, timeInYears, noOfTimes) {
    let rateOfInterest = rateOfInt / 100;
    console.log("Principal amount is: " + principalAmount + ", Rate of interest is: " + rateOfInt + " percent, Time is: " + timeInYears + " years, " + "and no of times compounded is: " + noOfTimes);
    let totalAmount = 0;
    totalAmount = principalAmount * Math.pow(1 + rateOfInterest / noOfTimes, timeInYears * noOfTimes);
    console.log("****Total amount calculated as per the compound interest formula is****: " + totalAmount);
    return totalAmount;
}
function compundInt1() {
    console.log("Function compundInt1() is used to get user-inputs for the input arguments");
    const userPrompt = require("prompt-sync")();
    let prinAmount = parseFloat(userPrompt("Enter the principal amount: "));
    let rateOfIn = parseFloat(userPrompt("Enter the rate of interest: "));
    let timeInYears = parseFloat(userPrompt("Enter the timeInYears: "));
    let noOfTimes = parseInt(userPrompt("Enter the no. of times interest is compounded: "));
    compoundInt(prinAmount, rateOfIn, timeInYears, noOfTimes);
}
compundInt1();
compoundInt(35000, 8, 5, 12);
compoundInt(100000, 4.5, 7, 1);
compoundInt(50900, 6, 11, 2);