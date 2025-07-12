let myDate = new Date();
// console.log(myDate); // 
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);

//let myCreatedDate = new Date(2025, 0, 11);
// let myCreatedDate = new Date(2025, 6, 12, 3, 38);
let myCreatedDate = new Date("2025-06-12");
//let myCreatedDate = new Date("07-12-2025");
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

//get time in second
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate.getFullYear()); //2025
// console.log(newDate.getMonth() + 1); //06
// console.log(newDate.getDate()); //12
// console.log(newDate.getDay()); //2025


// console.log(`${newDate.getDay()} and the time is ${newDate.getTime()}`);

console.log(newDate.toLocaleString('default',{
    weekday:"long",
}));
