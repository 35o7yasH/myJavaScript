// if

// if (true) {
    
// }
// if (false) {
    
// }
// if (2==2) {
    
// }

// const isUserLoggedIn = true
// if (isUserLoggedIn) {
    
// }

// if (2 !== "2") {
//     console.log('execute');
// }

// <, >, <=, >=, ==, !=, ===

// const temp = 41;
// if (temp === 41) {
//     console.log("temperature is lower than 50");
// }else{
//     console.log("Temperature is greater than 50");
// }


// const score = 200
// if (score > 100) {
//     const power = "fly"
//     console.log(`Users power is: ${power}`);
// }
// console.log(`Users power is: ${power}`);

// In output, there is an error cause we are using power out of the scope, the power was defined by const

// const score = 200
// if (score > 100) {
//     var power = "fly"
//     console.log(`Users power is: ${power}`);
// }
// console.log(`Users power is: ${power}`);

// but in this case the power variable is defined by var which can work outside to scopes

// const balance = 1000;
// // if (balance > 500) console.log("test");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750){
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900")
// } else{
//     console.log("less than 1200");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log('Allow to buy course');
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log('User logged in.');
}
