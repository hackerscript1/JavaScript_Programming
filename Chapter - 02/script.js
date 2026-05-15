// JavaScript Part 2 ✅ 

// consol.log ✅ 
/*
console.log("Hello World");
console.log(12345);
console.log(2 + 5);
console.log("Bikram", "12345", "3.14");
*/

// Template Literals ✅ 
// They are used to add embedded expressions into strings.
/*
let a = 5;
let b = 10;

// Normal way
console.log("The value of " + a + " and " + b + " is " + (a + b));

// Template Literals
console.log(`The value of ${a} and ${b} is ${a + b}`);
*/

// Comparison Operators ✅ 
// Comparison operators are used to compare values.
/*
let a = 5;
let b = 10;

console.log(a == b); // false
console.log(a != b); // true
console.log(a > b); // false
console.log(a < b); // true
console.log(a >= b); // false
console.log(a <= b); // true
*/

/*
let a = 5;
let b = "5";

console.log(a == b); // true
console.log(a === b); // false  | strict equality operator
*/

// Comparison for Non-Numbers ✅ 
/*
console.log('a' > 'A'); // true
console.log('a' < 'A'); // false

console.log('a' > 'b'); // false
console.log('a' < 'b'); // true

console.log('A' > 'a'); // false
console.log('A' < 'a'); // true

console.log('*' < '&'); // false
console.log('*' > '&'); // true
*/

// Conditional Statements ✅ 
// if-else
// nested if-else
// switch

// if statement
/*
let a = 10;
let b = 5;
if (a > b) {
    console.log("a is greater than b");
}

let age = 18;
if (age >= 18) {
    console.log("You can vote");
}
*/

// if-else statement
/*
let age = 17;
if (age >= 18) {
    console.log("You can vote");
} else {
    console.log("You cannot vote");
}
*/

// if-else-if statement
/*
let age = 15;
if (age >= 18) {
    console.log("You can vote");
} else if (age >= 12) {
    console.log("You are a teenager");
} else {
    console.log("You cannot vote");
}
*/

// Nested if-else
/*
let age = 17;
if (age >= 18) {
    console.log("You can vote");
} else {
    if (age >= 12) {
        console.log("You are a teenager");
    } else {
        console.log("You cannot vote");
    }
}
*/

// Logical Operators ✅ 
// &&, ||, !

// && - Logical AND
// || - Logical OR
// ! - Logical NOT

// && - All conditions must be true
// || - At least one condition must be true
// ! - Reverse the condition

// && - Logical AND
/*
let a = 5;
let b = 10;
if (a > 0 && b > 0) {
    console.log("Both a and b are positive");
}
*/

// || - Logical OR
/*
let a = 5;
let b = 10;
if (a > 0 || b > 0) {
    console.log("At least one of a or b is positive");
}
*/

// ! - Logical NOT
/*
let a = 5;
let b = 10;
if (!(a > 0 && b > 0)) {
    console.log("At least one of a or b is not positive");
}
*/

// truthy and falsy values ✅ 
/*
let a = 0;
if (a) {
    console.log("a is truthy");
} else {
    console.log("a is falsy");
}

let b = "";
if (b) {
    console.log("b is truthy");
} else {
    console.log("b is falsy");
}
*/

// Switch Statement ✅ 
/*
let num = 7;
switch (num) {
    case 1:
        console.log("Sunday");
        break;
    
    case 2:
        console.log("Monday");
        break;
    
    case 3:
        console.log("Tuesday");
        break;
    
    case 4:
        console.log("Wednesday");
        break;
    
    case 5:
        console.log("Thursday");
        break;
    
    case 6:
        console.log("Friday");
        break;
    
    case 7:
        console.log("Saturday");
        break;
    
    default:
        console.log("Invalid day");
        break;
}
*/

// Alert and Prompt ✅ 
// alert("Hello World");
// prompt("Enter your name");

/*
let name = prompt("Enter your name");
// alert("Hello " + name);
console.log("Hello " + name);
*/

// Confirm ✅ 
// confirm("Are you sure?");

