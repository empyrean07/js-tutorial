const accountId = 123456
let accountEmail = "akash@gmail.com"
var accountPassword = "123456"
accountCity = "Raipur"//this is possible but not a good practice.
let accountStatus

// accountId = 2 : this is not allowed because the data type is const and we cannot perform changes to it.

console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId, accountEmail, accountPassword, accountCity, accountStatus);
console.table([accountId, accountEmail, accountPassword, accountPassword, accountStatus]);