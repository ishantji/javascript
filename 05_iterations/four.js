const language = {
    js: 'Javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in language) {
   // console.log(`${key} shortcut is for ${language[key]}`);
}

//console.log(language);
for (const [key,value] of Object.entries(language)) {
    //console.log(key, ':-', value);
}

for (const key of Object.keys(language)) {
   // console.log(key);
}

for (const value of Object.values(language)) {
    //console.log(value);
}

for (const key of Object.keys(language)) {
   // console.log(language[key]);
}

const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
   // console.log(programming[key]);
}

//map is not iteratable
// const map = new Map();
// map.set('IN', "India")
// map.set('FR', "France")
// map.set('FR', "France")
// map.set('USA', "United States of America")
// map.set('FR', "France")

// for (const key in map) {
//     console.log(key);
// }