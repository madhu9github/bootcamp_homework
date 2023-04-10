function calculateDogAge(puppysAge) {
    const conRate = 7;
    let dogYears = puppysAge * conRate;
    console.log("Your doggie is " + dogYears + " years old in dog years!")
    return dogYears;
}
calculateDogAge(5);
calculateDogAge(10);
calculateDogAge(15);

function calculateDogAge1(puppysAge, convRate) {
    let dogYears = puppysAge * convRate;
    console.log("Your doggie is " + dogYears + " years old in dog years!")
    return dogYears;
}
var result = calculateDogAge1(10,10);
console.log("Your doggie is " + result + " years old in dog years!");
calculateDogAge1(5,6);
calculateDogAge1(10,7);
calculateDogAge1(15,8);