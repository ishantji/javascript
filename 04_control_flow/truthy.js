//const userEmail = "ish@gmail.com";
const userEmail = [];

//assume userEmail is true value
// if(userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

// falsy values
//false, 0, -0, bigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function() {}


//check array length is empty or not
// if(userEmail.length === 0) {
//     console.log("Array is empty");
// }

//check object is empty or not
const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }

//Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 20

// console.log(val1);

//ternary operator
// condition ? true : false

const bookPrice = 400;
bookPrice <= 300 ? console.log("less than 300") : console.log("more than 300")