const accountId = 1236788
let accountEmail = "sam@gmail.com"
var accountPassword = "sam@123456"
accountCity = "buchu"
let accountState;
/*
prefer not to use var
because of issue in block scope and functional scope
 */
 
accountEmail = "masam@gmail.com"
accountPassword = "13456"
//accountId = 1239876  not allowed

console.table( [ accountId, accountEmail, accountPassword, accountCity, accountState
])
