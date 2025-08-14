// for of

// ["", "", ""]
// [{}, {}, {}]

//array
const arr = [1, 2, 3, 4, 5]

//array values
for (const num of arr) {
    //console.log(num);
}

//string
const greetings = "Hello World!";
for (const greet of greetings) {
    // console.log(`Each Value is: ${greet}`);
}

//array keys
for (const num in arr) {
    //console.log(num);
}

//maps
const map = new Map();
map.set('IN', "India")
map.set('FR', "France")
map.set('FR', "France")
map.set('USA', "United States of America")
map.set('FR', "France")

//console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObject = {
    "game1": "NFS",
    "game2": "Spiderman"
}
// console.log(myObject);

//not working, object is not iterable
// for (const [key,value] of myObject) {
//     //console.log(key, ':-', value);
// }

