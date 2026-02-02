 let myName = "Ishant     "

// console.log(myName.truelength);


//array
let myHeroes = ["thor", "spiderman"]

//object
let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`Spidy pwer is ${this.spiderman}`);
    }   
}

//object get power to array, object, string by using prototype
Object.prototype.ishant = function(){
    console.log(`Ishant is present everywhere`);
}

//heroPower.ishant();  // work
//myHeroes.ishant();   // work

//array get power to array only by using prototype
Array.prototype.newOne = function(){
    console.log(`New one is different`);
}

// myHeroes.newOne();   // work
// heroPower.newOne();  // not work


// inheritence

const User  = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignmnet',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "ChaiAurCode     "

String.prototype.truelength = function(){
    console.log(`${this}`)
    //console.log(`${this.name}`)
    console.log(`True Length is: ${this.trim().length}`);
}
anotherUsername.truelength();
"ishu".truelength();
"kumar   ".truelength();
