const coding = ["js", "cpp", "python", "ruby", "java", "php"];

// coding.forEach( function (item) {
// } )

//simple
// coding.forEach(function (item) {
//     console.log(item);
// })

//using arow function
// coding.forEach((item)=>{
//     console.log(item);
// })

//condition
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe);

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

//array of objects
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "phyton",
        languageFileName: "py"
    },
]

//print with foreach
myCoding.forEach( (item) => {
    console.log(item.languageName);
} )