// we generally write functions like this,

// function chai() {
//     console.log(`DB CONNECTED`);
// }
// chai()
//but for iife, we write like
(function chai() {
    console.log(`DB CONNECTED`);
})(); // named iife


// Thats how to write it in a arrow function
// ( () => {
//     console.log(`DB CONNECTED TWO`)
// })();

// If we want to pass arguments and parameter on arrow function
( (name) => {
    console.log(`DB CONNECTED ${name}`);
} )("Yash"); //unnamed iife