//function defination
function sayMyName() {
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("N");
    console.log("T");
}

//function execution/calling
//sayMyName();

//addition number using function with parameters
// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
// }
// function addTwoNumbers(num1, num2) {
//     let result = num1 + num2;
//     //console.log("test");
//     return result;
//     //after retun no code execute
// }
function addTwoNumbers(num1, num2) {
    return num1 + num2;
}
//execeution with arguments
const res = addTwoNumbers(3, 7);
//console.log("Result:" ,res);
//default value set to sam
function loginUserMessage(username = "sam"){
    // if(username === undefined)
    if(!username) { // both are same
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`;
}

//console.log(loginUserMessage('Ishant'));
//undefined without parameter
//console.log(loginUserMessage());

//spread operator holds all parameters in array
//while before any parametres reduce the array count
function calculateCartPrice(val1, val2, ...num1){
    return num1;
}

//console.log(calculateCartPrice(200, 400, 500, 300, 800));

//pass object in function
const user = {
    username: "Ishant",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user);
// handleObject({
//     username: 'Ram',
//     price: 700
// });

//pass array in function
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1];
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 100, 300, 800]));