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

//1. by using assign
//const obj3 = Object.assign(obj1,obj2);
// const obj3 = Object.assign({},obj1,obj2,obj4);
// console.log(obj3);

//2. by using spread operator
// const obj3 = {...obj1, ...obj2};
// console.log(obj3);

//3. 
const users = [
    {
        id: 1,
        email: "i@gmail.com"
    },
    {
        id: 1,
        email: "i@gmail.com"
    },
    {
        id: 1,
        email: "i@gmail.com"
    },
    {
        id: 1,
        email: "i@gmail.com"
    }
]

// console.log(users[1].email);

// console.log(tinderUser);

//get object keys in array
// console.log(Object.keys(tinderUser));

//get object values in array
// console.log(Object.values(tinderUser));

//separate array in pair (obj key:pair)
// console.log(Object.entries(tinderUser));

//check key exist in object return in boolean
// console.log(tinderUser.hasOwnProperty('isLogged'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//console.log(course.courseInstructor);

//object destructure
const {courseInstructor: instructor} = course

//console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "Ishant",
//     "coursename": "js in hindi",
//     "price": "free"
// }

//https://api.github.com/users/ishantji
