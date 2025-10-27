//object literal
const user = {
    username: "Ishant",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        //console.log(`Username: ${username}`);
        //console.log(`Username: ${this.username}`);
        console.log(this)
    }
}



// console.log(user.username);
//console.log(user.getUserDetails());
// console.log(this)

// const promiseOne = new Promise(function(resolve, reject){

// })

// const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }
    return this
}

const userOne = new User("ishu",6,true);
//userTwo override userone
const userTwo = new User("sanjay",4,false);
console.log(userOne.constructor);
// console.log(userTwo);

