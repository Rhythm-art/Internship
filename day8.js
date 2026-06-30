// While Loop


//while(condition) {
    // code to be executed
//}


//Example

//let count= 1;
//while(count <= 10) {
 //   console.log(" Number are" + count);
  //  count++;
//}


//let count = 1;
// do {
  //  console.log("Number are" + count);
  //  while(count >= 10);


//Function 
//function sum(a, b) {
 //   return a + b;
//}

//let result = sum(10, 10)
//let result = sum(20, 40)
 //   console.log(result);
  //  console.log(result);


//Grade checking using function



function gradeCheck(marks) {
    if(marks >= 90) {
        console.log("A+");
    } else if(marks >= 80) {
        console.log("A");
    } else if(marks >= 70) {
        console.log("B+");
    }
    else{
        console.log("Fail");
    }
}

gradeCheck(86);

// function with expression

const sayHello = function() {
    console.log("Hello Function with argument");
}


///scope 
// 1. Global scope - Variables declared outside any function or block

let name = "Rhythm Shrestha";
function myname() {
    console.log(name);
}
myname();
    console.log(name); 



// 2. Local scope - Variables declared inside a function or block

function myname() {
    let name1 = "Rhythm Shrestha";
    console.log(name1);
}  

myname();
//console.log(name1); 


/// Objects - Object is a collection of properties and methods

let student = {
    name: "Rhythm Shrestha",
    age: 20,
    faculty: "BIT",
    college: "IIC",
}


student.address = "Dharan";


student.age = 21;//updating the value of age
//console.log(student); 

delete student.faculty; //deleting the property faculty
console.log(student);

// Question 
let vegetables = {
    name: "Tomato",
    color: "Red",
    price: "RS150",
    quantity: 10,
}
console.log(vegetables);


///arrays - An array is a collection of elements

let fruits = ["Apple", "Banana", "Mango", "Orange"]; //[0, 1, 2, 3]
console.log(fruits[0]); 

// push method
fruits.push("Grapes");
console.log(fruits);


// pop method - removes the last element from an array
fruits.pop();

//shift method - removes the first element from an array
fruits.shift();
console.log(fruits);

//unshift method - adds an element to the beginning of an array
fruits.unshift("Strawberry");
console.log(fruits);


//length - returns the number of elements in an array
console.log(fruits.length);
