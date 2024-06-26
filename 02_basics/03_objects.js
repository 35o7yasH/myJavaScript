// singleton
//Object.create is a constructor and that is how singletons are made

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
// console.log(jsUser["email"]);
// Object.freeze(jsUser)
// jsUser.name = "Donkeykong"
// console.log(jsUser["name"]);


jsUser.greeting = function() {
    console.log("Hello JS User");    
}

jsUser.greetingtwo = function() {
    console.log(`Hello JS User, ${this.location}`); //we use this instead of the object name.
}
console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());