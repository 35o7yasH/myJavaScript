const accountId = 144553
let accountEmail = "yashukik@gmail.com"
var accountPassword = "12345"
accountCity = "Pune"
let accountState; //creating an variable and not assigning it with any value makes the state of the variable "undefined".

//accountId = 5 //not allowed cause this variable is created with const

accountEmail = "uk@uk.com"
accountPassword = "98765"
accountCity = "Jaipur"

/*
prefer not to use var
for its issues with the block & functional scopes
*/
console.table([accountEmail, accountId, accountPassword, accountCity, accountState])