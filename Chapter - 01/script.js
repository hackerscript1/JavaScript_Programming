/*
console.log("Hello World!");
console.log("BIKRAM MANDAL");
*/

// Variables in JS ✅ 
// A variable is a container for storing data values. 
/*
fullName = "BIKRAM MANDAL";
age = 24;
CGPA = 8.17;

// console.log("fullName");
console.log(fullName);
console.log(age);
console.log(CGPA);

x = null;
console.log(x);

y = undefined;
console.log(y);

isFollow = true;
console.log(isFollow);
*/

// let, const & var ✅ 
// let & const are block scoped while var is function scoped

// var : Variable can be re-declared & updated. A global scope variable.
/*
var age = 24;
var age = 34;
var age = 84;
console.log(age)
*/

// let : Variable can be re-declared but not updated. A block scope variable.
/*
let fullName = "BIKRAM MANDAL";
let age = 24;
let CGPA = 8.17;
let isFollow = true;

console.log(fullName);
console.log(age);
console.log(CGPA);
console.log(isFollow);
*/

/*
let a;
console.log(a); // undefined
*/

// let can be re-declared but not updated
/*
let age = 24;
age = 34;
age = 84;
console.log(age);
*/

// const : Variable cannot be re-declared or updated. A block scope variable. 
/*
const age = 24;
// age = 34;
console.log(age);
*/

// Data Types in JS ✅ 
// Primitive DataType. 
/*
// 1. Number
let num = 22;
let num2 = -22;
let num3 = 3.14;
console.log(num);
console.log(typeof num);

// 2. String
let str = "BIKRAM MANDAL";
console.log(str);
console.log(typeof str);

// 3. Boolean
let isFollow = true;
console.log(isFollow);
console.log(typeof isFollow);

// 4. Null
// Null is a variable that is assigned a value of null.
let nullVar = null;
console.log(nullVar);
console.log(typeof nullVar);

// 5. Undefined
// Undefined is a variable that is not assigned a value.
let undefinedVar;
console.log(undefinedVar);
console.log(typeof undefinedVar);

// 6. BigInt
let bigInt = 9007199254740991n;
console.log(bigInt);
console.log(typeof bigInt);

// 7. Symbol
let sym = Symbol("HACKER");
console.log(sym);
console.log(typeof sym);
*/


// Non Primitive DataType. ✅ 
// Object
/*
const student = {
    name: "BIKRAM MANDAL",
    age: 24,
    CGPA : 8.17,
    isPass: true
}

console.log(student);
console.log(student.name);
console.log(student["name"]);
console.log(student["age"]);
console.log(student["isPass"]);

student["age"] = student["age"] + 1;
console.log(student.age);
*/


// Operations in JS ✅ 
// +, -, *, /, %, ++, --, **
/*
let a = 10;
let b = 20;

let c = a + b;
console.log(c);

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a++);
console.log(a--);
console.log(a ** b);
*/

// NaN in JS ✅ 
// The result of a math operation that cannot be calculated, is called NaN (Not a Number).
/*
let a = 0;
let b = 0;
let c = a / b;
console.log(c);
console.log(typeof c);

console.log(c + 1);
console.log(c - 1);
console.log(c * 1);
console.log(c ** 2);

let d = "BIKRAM";
let e = 0;
let f = d / e;
console.log(f);
console.log(typeof f);
*/

// Operators Precedence in JS ✅ 

// Operators Precedence Table | BODMAS | Left to Right
// 1. ()
// 2. ** (Exponentiation)
// 3. *, /, %
// 4. +, -

// For example:
/*
let a = 1 + 2 * 3;
let b = (1 + 2) * 3;
console.log(a);
console.log(b);
*/

// Assignment Operators in JS ✅ 
// =, +=, -=, *=, /=, %=

/*
let a = 1;
a = a + 1;
a += 1;
a -= 1;
a *= 1;
a /= 1;
a %= 1;
console.log(a);
*/

// Unary Operators in JS ✅ 
/*
// 1. Pre Increment ++a
let a = 1;
console.log(++a);
// 2. Post Increment a++
console.log(a++);
// 3. Pre Decrement --a
console.log(--a);
// 4. Post Decrement a--
console.log(a--);

console.log(a);
*/

// Identifier Rules in JS ✅ 
// 1. It must start with a letter, underscore or dollar sign
// 2. It cannot start with a number
// 3. It cannot contain any special characters except $ and _
// 4. It cannot be a reserved keyword
// 5. It is case-sensitive


// What is TypeScript? ✅ | Designed by Microsoft
// TypeScript is a programming language that is a strict superset of JavaScript.
// Static Typed, where JS is Dynamic Typed


// String in JS ✅ 
// Strings are text or sequence of characters, which are written inside quotes.
// Strings are immutable, which means that once a string is created, it cannot be changed.

// String Concatenation in JS ✅ 
/*
let firstName = "BIKRAM";
let lastName = "MANDAL";
let fullName = firstName + " " + lastName;
console.log(fullName);
*/

/*
let char = 'a';
console.log(char);
console.log(typeof char);
*/

// Empty String in JS ✅ 
/*
let str = "";
console.log(str);
console.log(typeof str);
console.log(str.length);

let str1 = " ";
console.log(str1);
console.log(typeof str1);
console.log(str1.length);
*/


// String Indices in JS ✅ 
/*
let str = "BIKRAM MANDAL";
console.log(str[0]);
console.log(str[1]);
console.log(str[2]);
console.log(str[3]);
console.log(str[4]);
console.log(str[5]);
console.log(str[6]);
console.log(str[7]);
console.log(str[8]);
console.log(str[9]);
console.log(str[10]);
console.log(str[11]);
console.log(str[12]);

console.log(str.length);
console.log(str[str.length - 1]);
*/

