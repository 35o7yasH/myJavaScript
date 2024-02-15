// Primitive
// 7 types to dataTypes : String, Numbers, Boolean, null, undefined, symbols, bigInt

//JS is a dynamically language, cause we don't have to mention a datatype will creating it, eg. const n = 100; Over here we didn't had to mention, whether it's a mumber or a string.
const score = 100;
const scoreValue = 3.14;


const isLoggedIn = false;
const outsideTemp = null;

let userName;


const id = Symbol('123')
// console.log(typeof id);
const anotherID = Symbol('123')

console.log(id === anotherID); //false

// const bigNumber = 1234567890123456789012345678901234567890; //the only difference between this is for bigInt we need to put an n at the end of the number.
//  const bigNumber = 1234567890123456789012345678901234567890n;
// console.log(typeof bigNumber);

// Reference(non-primitive)
// Arrays, Objects, Functions

const heroes = ["shaaktiman", "krish", "hatim"]
let myObject ={
    name: "Nitin",
    age: 25,
    city: "Pune",
}

const myFunc = function(){
    console.log("Hello Buddy.");
}


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// Stack memory (primitive) & Heap memory (non-primitive/ reference)

let myGitHubRepoName = "35oyash"

let anotherName = myGitHubRepoName;


anotherName = "Nitin"

console.log(anotherName);

//So, what happend here is that we changed the copied value, not the original value, for that anotherName is now nitin.



let userOne = {
    userEmail: "gmail@uk.com",
    upiID: "upi@hdfcbank",
}

let userTwo = userOne;
// console.log(userTwo);

userTwo.userEmail = "google@uk.com"//to access something in an object, this is the method we use.

console.log(userOne.userEmail);
console.log(userTwo.userEmail);