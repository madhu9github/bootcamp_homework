"use strict";
class circle {
    constructor(r) {
        this.radius = r;
        this.area = Math.PI * r * r;
        this.perimeter = 2 * Math.PI * r;
    }

    setRadius(r) {
        console.log("Using setRadius() to change radius to: " + r);
        this.radius = r;
        this.area = Math.PI * r * r;
        this.perimeter = 2 * Math.PI * r;

    }
    getArea() {
        return this.area;//this.area;
    }

    getPerimeter() {
        return this.perimeter;
    }

    print() {

        console.log("Area of a circle with radius " + this.radius + " is: " + this.getArea());
        console.log("Perimeter of a circle with radius " + this.radius + " is: " + this.getPerimeter());
    }

    radius;
    area;
    perimeter;

}

function circleValues() {
    console.log("Using Class and methods to find the area and perimeter of a circle.")
    const userPrompt = require("prompt-sync")();
    let radius = userPrompt("Enter the radius: ");
    circleValues1(radius);
}

function circleValues1(r) {
    const obj = new circle(r)
    obj.print();
    obj.setRadius(10);
    obj.print();
    obj.setRadius(3);
    obj.print();
}
circleValues();


