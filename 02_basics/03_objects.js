// singleton
//Object.create

//symbol
const mySym = Symbol("key1");
//console.log(mySym);

// object literals
const JsUser = {
    name: "Ishant",
    "full name": "Ishant kumar",
    [mySym]: "mykey1",
    age: 18,
    location: "Sonipat",
    email: "ishant@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Mon", "Wed", "Sat"]
}
//call object
//console.log(JsUser.name);
//console.log(JsUser.full name]); //don't work

//2nd method
// console.log(JsUser["name"]);
// console.log(JsUser["full name"]);
// console.log(JsUser.lastLoginDays);
//console.log(typeof JsUser.mySy);

//print object with symbol as a key
// console.log(JsUser[mySym]);

//change in name of object
JsUser.name = "Ishu";
// console.log(JsUser.name);
// console.log(JsUser);

//freeze object
//Object.freeze(JsUser);
//JsUser.name = "Ishuboy";
// console.log(JsUser.name);

//add function with object
JsUser.greeting = function(){
    console.log("Hello JS user");
}
//call object value using function
JsUser.greeting2 = function(){
    console.log(`hello JS user ${this.name}`);
    //return this.name;
}
console.log(JsUser.greeting2());


// myArray = ["i", "k"];
// console.log( myArray[1]);    // i
// console.log( myArray.at(1)); // k