//create promise
const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000);
})

//consume promise
promiseOne
.then(function(){
    console.log('promise is consumed');
})

//directly connectd then to promise
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Aysc task 2 is completed')
        resolve()
    }, 1000)
}).then(function(){
    console.log('promise 2 is consumed')
})

//pass data throught resolve in promise
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        const user = {username:'ishant', email:'ishant10@gmail.com'};
        resolve(user);
    }, 1000) 
})

promiseThree.then(function(data){
    console.log(data);
})

//resolve & reject with finaly based promise consumed
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: 'ishu', password: '123'});
        } else {
            reject('ERROR: Something went wrong');
        }
    }, 1000)
})

promiseFour
.then((user) => {
    //console.log(user);
    return user.username;
})
.then((username) => {
    console.log(username)
})
.catch(function(err){
    console.log(err);
}).finally(() => {
    console.log('The Promise is either resolved or rejected')
})

//promiseFive with async and await 
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: 'javascript', password: '123'});
        } else {
            reject('ERROR: JS went wrong');
        }
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
       console.log(error) 
    }
}

consumePromiseFive()


//using Fetch with async await
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ",error)
//     }
// }

// getAllUsers();


//fetch using .then .catch  
fetch('https://api.github.com/users/ishantji')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data)
})
.catch((err) => console.log(err))