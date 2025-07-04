// Primitive data types in JavaScript

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt        

// javascript is a dynamically typed language, meaning you don't have to declare the type of a variable when you create it. The type is determined automatically based on the value assigned to the variable.

const score = 100; // Number
//console.log(typeof score); //datatype number
const scoreValue = 99.99; // Number (floating point)
//console.log(typeof scoreValue); //datatype number

const userName = "John Doe"; // String
//console.log(typeof userName); //datatype string

const isLoggedIn = true; // Boolean
// console.log(typeof isLoggedIn); //datatype boolean

const outsideTemp = null; // Null (no value)
//console.log(typeof outsideTemp); //datatype object

let userEmail; // Undefined (no value assigned)
//console.log(typeof userEmail); //datatype undefined

const id = Symbol('123'); // Symbol (unique identifier)
//console.log(typeof id); //datatype symbol
const anotherId = Symbol('123'); // Different symbols, even with the same description
//console.log(id === anotherId); // false 

const bigNumber = 29832323332323223232232n; // BigInt (large integer)
//console.log(typeof bigNumber); //datatype bigint

// Reference (Non Primitive) data types: 

// 3 types: Object, Array, Function

const heros = ["shaktiman", "naagraj", "krissh"]; // Array (list of values)
//console.log(typeof heros); //datatype object

let myObj = {
    name: "Ishant",
    age: 25,
}
//console.log(typeof myObj); //datatype object

const myfunction = function() {
    console.log("Hello World");
}
console.log(typeof myfunction); //datatype function(object)

//https://262.ecma-international.org/5.1/#sec-11.4.3