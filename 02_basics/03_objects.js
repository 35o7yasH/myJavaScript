// singleton: something i don't understand;
//Object.create

//object literals

const symbole = Symbol("mykey1")
const jsUser = {
    name: "nitin",
    [symbole]: "mykey1",
    age: 18,
    location: "pune",
    email: "nitin@google.com",
    isLoggedIn: false,
    lastLoggedInDays: [5, 8, 9, 11, 12, 17, 24, 29]
}
// console.log(typeof jsUser);
// console.log(jsUser.name);
// console.log(jsUser["name"]);
// console.log(jsUser[symbole]);


// console.log(jsUser);


// to change the valuesm we use:
jsUser.email = "nitin@chatgpt.com"
console.log(jsUser["email"]);
Object.freeze(jsUser)
jsUser.name = "Donkeykong"
console.log(jsUser["name"]);