function sumUnlimited(...numbers) {
    const noOfArguments = numbers.length;
    console.log("Number of input arguments is: " + noOfArguments);
    let totalSum = numbers.reduce((pValue, cValue) => {
        return parseInt(cValue) + parseInt(pValue);
    }, 0);
    console.log("Total sum of all imputs is: " + totalSum);
}
sumUnlimited(1, 2, 3, 4);
sumUnlimited(1, 2, 3, 4, 4, 5, 6, 457, 1000, 100);
sumUnlimited(13, 77, 909);







