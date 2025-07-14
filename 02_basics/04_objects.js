//singleton object
//const tinderUser = new Object()

//non singleton object or literal
const tinderUser = {}

tinderUser.id = "123abcd";
tinderUser.name = "Anil";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

//object within object
const regularuser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Ishant",
            lastname: "kumar"
        }
    }
}

// console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj4 = {5: "a", 6: "v"}
//combine objects in 

//not use
//const obj3 = {obj1,obj2};

//by using assign
//const obj3 = Object.assign(obj1,obj2);
// const obj3 = Object.assign({},obj1,obj2,obj4);
// console.log(obj3);
//by using spread operator
// const obj3 = {...obj1, ...obj2};
// console.log(obj3);

