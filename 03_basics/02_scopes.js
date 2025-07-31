//global scope available globally
//var c = 300;
let a = 300;
//block scope only inside scope
if (true) {
    let a = 10;
    const b = 20;
    //c = 30;
    //console.log(`Inner: ${a}`);
}


//console.log(a);
//console.log(b);
//console.log(c);

//scope inside browser console is different from scope inside termial
//global can be access anywhere inside scope also
//but local can not access out side the scope

function one(){
    const username = "Ishant";

    function two(){
        const website = "youtube";
        console.log(username);
    }

    //console.log(website);
    two();    
}

//one();

if (true) {
    const username = "Ishu";
    if(username === "Ishu") {
        const website = " youtube";
        //console.log(username + website);
    }
    //console.log(website);
}

//console.log(username);


// +++++++++++++++ interesting +++++++++++++++++++

//works properly because it is function
console.log(addone(5));
function addone(num){
    return num + 1
}

//hoisting
//can not access because it is used in const
console.log(addtwo(5));
const addtwo = function(num){
    return num + 2
}