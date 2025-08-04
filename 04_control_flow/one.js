// if
const isUserLoggedIn = true;
const temperature = 39
// if ( temperature <= 50){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }
// console.log("Execute");


// <    3<5
// >    6>2
// <=   2<=2
// >=   7>=5
// ==   2==2
// !=   2!=1
// ===  2=='2'
// !==  2!=='2'

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User Power: ${power}`);    
// }

// console.log(`User Power: ${power}`);


//const balance = 1000

//if (balance > 500) console.log("Yes above 500"),console.log("test 2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoggle = true
const loggedInFromEmail = false

//user logged in and also have debit card
if (userLoggedIn && debitCard  &&  2==2) {
    console.log("Allow to buy course");
}

//either user logged in from goggle or email
if (loggedInFromEmail || loggedInFromGoggle) {
    console.log("User Logged In");
}
