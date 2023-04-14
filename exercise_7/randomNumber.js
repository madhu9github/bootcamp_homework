function genRandom(max, min) {
    const minInteger = Math.ceil(min);//rounds to nearest integer greater than a given floating point value
    const maxInteger = Math.floor(max);; // rounds to nearest integer less than a given floating point value
    let randomInteger = Math.floor(Math.random() * (maxInteger - minInteger) + minInteger);
    console.log("Here is the random number generated: " + randomInteger);
    return randomInteger;

}
function genRandom1() {
    console.log("Function genRandom1() is used to get user-inputs for random number range");
    const userPrompt = require("prompt-sync")();
    let min = userPrompt("Enter the minimum value in random number range: ");
    let max = userPrompt("Enter the maximum value in random number range: ");
    genRandom(max, min);
}
genRandom1();
genRandom(100.1, 50.25);
genRandom(1001.99, 59.5);
genRandom(10000.67, 5.2);



