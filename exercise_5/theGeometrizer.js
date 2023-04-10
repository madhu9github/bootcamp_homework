function calcCircumference(radius) {
    let circum = 2 * Math.PI * radius;
    console.log("The circumference is " + circum);
    return circum;
}
calcCircumference(3);
calcCircumference(5);
calcCircumference(7);

function calcArea(radius){
    let area = Math.PI * radius * radius;
    console.log("The area is " + area);
    return area;
}
calcArea(4);
calcArea(10);
calcArea(6);