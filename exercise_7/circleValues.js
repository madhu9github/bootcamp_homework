"use strict";
class circle {
    constructor(r) {
        this.radius = r;
        this.area = Math.PI * r * r;
        this.perimeter = 2 * Math.PI * r;
    }

    setRadius(r) {
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

        console.log("area is: " + this.getArea());
        console.log("perimeter is: " + this.getPerimeter());
    }

    radius;
    area;
    perimeter;

}

function circleValues() {
    const ps = require("prompt-sync");
    const user_prompt = ps();

    let radius = user_prompt("Enter the radius: ");

    circleValues1(radius);
}

function circleValues1(r) {
    const obj = new circle(r)
    obj.print();
    console.log("Using setRadius() to change radius to 10");
    obj.setRadius(10);
    obj.print();
}
circleValues();


