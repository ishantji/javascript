const accountId = 158874
let accountEmail = "ishant@zyz.com"
var accountPassword = "12345"
accountCity = "Sonipat"
let accountState;

// accountId = 7 // not allowed


accountEmail = "sharma45@gmail.com"
accountPassword = "8919010"
accountCity = "Noida"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);
