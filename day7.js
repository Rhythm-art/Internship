//switch condition statement

//let day = Number(prompt("Enter your day"));
//switch (day) {
//    case 1:
//      console.log("Sunday");
 //       break;
 //   case 2:
  //      console.log("Monday");
  //      break;
  //  case 3:
 //       console.log("Tuesday");
 //       break;
 //   case 4:
 //       console.log("Wednesday");
  //      break;
  //      default:
 //       console.log("Invalid day");
//}



//let choice = Number(prompt("Enter operationn \n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division"));


//let num1 = Number(prompt("Enter first number"));
//let num2 = Number(prompt("Enter second number"));

//switch (choice) {
    //case 1:
      //  console.log("Addition: " + (num1 + num2));
       // break;
   // case 2:
      //  console.log("Subtraction: " + (num1 - num2));
      //  break;
   // case 3:
       // console.log("Multiplication: " + (num1 * num2));
       // break;
   // case 4:
       // console.log("Division: " + (num1 / num2));
      //  break;    
//}

//let grade = Number(prompt("Enter your grade of MERN"));

//switch (true) {
    //case (grade >= 90):
      //  console.log("A+");
     //   break;
   // case (grade >= 80):
     //   console.log("A");
     //   break;
   // case (grade >= 70):
     //   console.log("B+"); 
     //   break; 
    //case (grade >= 60):
       // console.log("B");
      //  break;
   // default:
       // console.log("Fail");
//}


//Looping statements
// types of loops
// 1. for loop
// 2. while loop
// 3. do while loop

console.log("For loop");

for (let i = 0; i <= 5; i++) {
    console.log("Hello");
}



// sum of natural numbers

let number= 30
let sum = 0;
for (let i = 1; i < number; i++) {
    sum =sum+i;
}
console.log("Sum of natural numbers" +" is: " + sum);