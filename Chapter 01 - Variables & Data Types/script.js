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
let nullVar = null;
console.log(nullVar);
console.log(typeof nullVar);

// 5. Undefined
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


// Let's Practice ✅ 
// Question : 1 | Create a const object called “product” to store information shown in the picture. 
/*
const product = {
    name: "CT Ball Pen",
    price: 270,
    brand: "Parker Jotter",
    isAvailable: true
}

console.log(product);
*/

// Question : 2 | Create a const object called “profile” to store information shown in the picture.
/*
const instagramProfile = {
    username: "hackerscript1",
    followers: 10,
    following: 18,
    isVerified: true
}

console.log(instagramProfile);
console.log(typeof instagramProfile);
console.log(typeof instagramProfile["username"]);
console.log(typeof instagramProfile["isVerified"]);
console.log(typeof instagramProfile["followers"]);
*/

