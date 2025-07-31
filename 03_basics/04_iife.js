// Immediately Invoked Function Expresssion (IIFE)
//global scope pollution can be removed by using IIFE
(function one(){
    console.log(`DB CONNECTED`);
})();

(function two(){
    //named IIFE
    console.log(`second function execute`);
})();

( (name) => {
    //unnamed IIFE with parameters paas
    console.log(`DB Connected Three ${name}`);
} )('ishu')

function three(name) {

    console.log(`DB Connected Three ${name}`);
}
//one();
//two();
three('ishu');