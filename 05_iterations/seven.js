const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//adding 10 to each number by using map
// const result = myNumbers.map( (num) => num + 10 )
// console.log(result);

//adding 10 to each number by using foreach
// newNumbers = [];
// myNumbers.forEach( (num) => {
//      newNumbers.push(num+10);
// } )
 
//mutiply each number with 10.add 1, number >= 40 using map & filter method
// chaining map, filter
const newNums = myNumbers
                .map((num) => num * 10)
                .map((num) => num + 1)
                .filter( (num) => num>=40)

console.log(newNums);