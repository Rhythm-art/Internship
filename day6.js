//variable understand
//var age =22;
//let age = 23;
///let age = 24;
//age = 25;   
//console.log(age);



// 
//const pi = 3.14;
//console.log(pi);
//pi = 3.14159; // This will throw an error because pi is a constant and cannot be reassigned

//DATA Types in JavaScript
//string, number, boolean, null, undefined, object, symbol
let number = 42; // number
const string = "Rhythm Shrestha 999"; // string
let isloggedIn = true; // boolean
let city; // undefined
let user = null; // null 

console.log(typeof number); // "number"
console.log(typeof string); // "string"
console.log(typeof city); // "undefined"

//operators
//arithmetic operators
let x = 10;
let y = 5;
let z = x + y; // 15
console.log(z); 

let a = 10;
let b = 3;
let c = a - b;
console.log(c);


let d = 10;
let e = 3;
console.log(d * e);
console.log(d / e);
console.log(d % e);

//comparison operators
// == equal to
// != not equal to
// === equal value and equal type
// !== not equal value or not equal type
// > greater than
// < less than
// >= greater than or equal to
// <= less than or equal to    

let age = 18;
console.log(age == 18); 
console.log(age != 18);
console.log(age >= 22);
console.log(age <= 10);

//logical operators
// && logical AND
// || logical OR
// ! logical NOT    
//let age44=22;
//let citizen=true;
//console.log(ag>=22 && citizen==true); // true if both conditions are true

//conditional statements
let age4 = 18;

// voting eligibility

if (age4 >= 18) {
    console.log("You are eligible to vote.");
}
else {
    console.log("You are not eligible to vote.");
}

let mern = 60;
if (mern >= 90) {
    console.log("You got A+")   
}
else if (mern >= 80) {
    console.log("You got A")
}
else if (mern >= 70) {
    console.log("You got B+")
}   
