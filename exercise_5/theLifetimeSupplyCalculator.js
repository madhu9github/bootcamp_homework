function calculateSupply(age, aPerDay) {
    const maxAge = 100;
    let timeInDays = (maxAge - Math.round(age)) * 365;
    let amountPerDay = Math.round(aPerDay);
    let lifetimeSupply = timeInDays * amountPerDay;
    console.log("You will need "+ lifetimeSupply + " to last you until the ripe old age of " + maxAge);
    return lifetimeSupply;
}
calculateSupply(15.7, 11.49);
calculateSupply(50.2, 2.5);
calculateSupply(75.8, 1.75);



