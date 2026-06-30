//Create an object named employee with the following properties:

//id
//name
//department
//salary

//Then perform the following operations:


let employee = {
    id: 1,
    name: "Rhythm Shrestha",
    department: "IT",
    salary: 50000
};

//Display the original object.
console.log("Original Object:", employee);


//Add a new property address with the value "Kathmandu".
employee.address = "Kathmandu";
console.log("After Adding Address:", employee); 


//Update the salary to 60000.
employee.salary = 60000;
console.log("After Updating Salary:", employee);


//Delete the department property.
delete employee.department;
console.log("After Deleting Department:", employee);



