let people = ["Greg", "Mary", "Devon", "James"];
console.log("Current elements of the array are...")
for (i = 0; i < people.length; i++) {
    console.log(i + "th element of the array is: " + people[i]);
}
console.log("shift() method to remove first element of the array...")
let firstElementRemoved = people.shift();
console.log("First Element removed from array is: " + firstElementRemoved)
console.log("people[] after using shift() method: " + people.toString());

console.log("pop() method to remove last element of the array...")
let lastElementRemoved = people.pop();
console.log("Last Element removed from array is: " + lastElementRemoved)
console.log("people[] after using pop() method: " + people.toString());

console.log("unshift() method to add a new element to the front of the array...")
let arrLength = people.unshift("Matt");
console.log("New array length is: " + arrLength)
console.log("people[] after using unshift() method: " + people.toString());

console.log("push() method to add a new element to the end of the array...")
arrLength = people.push("Madhurima");
console.log("New array length is: " + arrLength)
console.log("people[] after using push() method: " + people.toString());
console.log("Printing all the element until \"Mary\" to the console... ")
let indexOfMary = people.indexOf("Mary");
console.log("Index of \"Mary\" is: " + indexOfMary);
for (i = 0; i <= indexOfMary; i++) {
    console.log(i + "th element of the array is: " + people[i]);
}

console.log("slice() method to make a copy of the array...")
let newCopyUsingSlice = people.slice(people.indexOf("Mary")+1);
console.log("new array returned from by slice() method: " + newCopyUsingSlice.toString());

console.log("Command that gives index of \"Mary\"... ")
indexOfMary = people.indexOf("Mary");
console.log("Index of \"Mary\" is: " + indexOfMary);


console.log("Command that gives index of \"Foo\"... ")
let indexOfFoo = people.indexOf("Foo");
console.log("Index of \"Foo\" is: " + indexOfFoo);

people = ["Greg", "Mary", "Devon", "James"];
console.log("people[] after re-assigning its intial value: " + people.toString());
console.log("splice() method to add and remove elements...")
let removedItems = new Array();
removedItems = people.splice(2,1, "Elizabeth", "Artie");
console.log("Removed items using splice(): " + removedItems.toString());
console.log("people[] after using splice() method: " + people.toString());

let withBob = new Array();
withBob = people.concat("Bob");
console.log("withBob[] after using concat() method: " + withBob.toString());




