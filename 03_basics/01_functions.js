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

//add of two number using function parameters
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

console.log(loginUserMessage('Ishant'));
//undedined without parameter
//console.log(loginUserMessage());