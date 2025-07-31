const user = {
    username: "ishant",
    price: 899,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

//  user.welcomeMessage()
//  user.username = "rahul"
//  user.welcomeMessage()

// this will be empty object but in browser return window object
// console.log(this);

// this not worked inside function it only works with object
// function chai(){
//     const username = "ishu"
//     console.log(this.username);
// }

// chai()

// const chai = function(){
//     let username = "ishant"
//     console.log(this.username);
// }

//arrow function
const chai = () => {
    let username = "ishant"
    //console.log(this.username);
    console.log(this);
}

//chai()

//basic arrow function or explicit dunction
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

//implicit return
//const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) => (num1 + num2);

//undefined
//const addTwo = (num1, num2) => {username: "ishant"};

//using ()
const addTwo = (num1, num2) => ({username: "ishant"});


console.log(addTwo(3,6));


const myArray = [2, 5, 7, 8, 1]

// myArray.forEach(function() {})
// myArray.forEach(() => {})
// myArray.forEach(() => ())
