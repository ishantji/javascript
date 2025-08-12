const language = {
    'js' : 'Javascript',
    'cpp' : 'c++'
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
    console.log(languagep[key]);
}