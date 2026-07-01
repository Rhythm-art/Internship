let fruits = ["Apple", "Banana", "Mango", "Orange"]; //[0, 1, 2, 3]
//includes

console.log(fruits.includes("Apple")); // It will return true if the element is present in the array, otherwise false.


//indexOf method - It returns the index of the first occurrence of a specified value in an array. If the value is not found, it returns -1.

console.log(fruits.indexOf("Apple")); // it gives us the position of an element in an array.

//short
console.log(fruits)

//reverse
console.log(fruits); // it reverses the order of elements in an array.

//splice method 
fruits.splice(1, 2); // removes 2 elements starting from index 1
console.log(fruits); 

//for each loop
fruits.forEach(function(fruit, index) {
    console.log("the fruit is " + fruit)///
});


// map array method - it helps us to return a new array by loop through each element
let upper = fruits.map(function(fruit) {
    console.log(fruit); // it will return the current element of the array
    return fruit.toUpperCase(); // it will return a new array with all elements in uppercase
});
console.log(upper);


// filter method - it returns the new array containing only the element that satisfy the condition
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0; 
})
console.log(evenNumbers); 


// reduce - helps us to reduce the array to a single value
let numm = numbers.reduce(function(total,num){
    return total + num; 
})
console.log(numm);