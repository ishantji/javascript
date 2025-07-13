//Array

const myArr = [0, 1, 2, 3, 4, 5];
// const myHeros = ["Shaktiman", "Krissh"];
// const myArr2 = new Array(1,2,3,4)

// console.log(myArr[0]);//get 1st array element

//Array methods

// myArr.push(6); // add element at the end
// myArr.push(7);
// myArr.pop(); // remove last element

// myArr.unshift(9) //insert at the start
// myArr.shift(); //remove from start

//check element in array
// console.log(myArr.includes(3)); //true
// console.log(myArr.includes(9)); //false

//index of element
// console.log(myArr.indexOf(5)); //5
// console.log(myArr.indexOf(9)); //-1

//make a string from array with seperator
// const newArr = myArr.join();

// console.log(myArr);
// console.log(newArr);

//slice, splice
//splice manipluate original array
console.log("A ", myArr);

const myn1 = myArr.slice(1,3);
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3);
console.log("C ", myArr);
console.log(myn2);