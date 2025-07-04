const name = "Ishant";
const repoCount = 8

//avoid such used in previous
//console.log(name + repoCount + " Value");

//string Interpolation
//modern string uses backticks
//console.log(`Hello my name is ${name} & my repo count is ${repoCount}`);

const gameName = new String('ishant-ik')
//console.log(gameName);

//console.log(gameName[0]);
//console.log(gameName.__proto__);
//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,6);
//console.log(newString);

const anotherString = gameName.slice(-7,4);
//console.log(anotherString);

const newStringOne = "    Ishant  ";
//console.log(newStringOne);
//console.log(newStringOne.trim());

const url = "https://abc.com/ishant%20kumar";
console.log(url.replace('%20','-'));

console.log(url.includes('sundar'));

console.log(gameName.split('-'));
