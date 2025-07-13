const marvelHeores = ["spiderman", "thor", "ironman"];
const dcHeores = ["batman", "superman", "flash"];

//merge two aur more array with new array
// const allHeroes = marvelHeores.concat(dcHeores);
// console.log(allHeroes);

//spread operator ...
// const all_new_heroes = [...marvelHeores, ...dcHeores];
// console.log(all_new_heroes);

//flat smooths array depths
const another_array = [1, 2, 3, [4, 5], 6, [7, 6, [8, 2]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

//check array is array or not?
console.log(Array.isArray(real_another_array));

//convert string to array
console.log(Array.from("Ishant"));

//interesting
console.log(Array.from({name: "ishant"}));

//array from varaible
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));




