let score = null;

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumbmer = Number(score);

// console.log(typeof valueInNumbmer);
// console.log(valueInNumbmer);

/*
if we try to convert,
"33" => 33,
"33abc" => NaN,
true => 1; false => 2,
null => 0,
undefined => NaN,
*/


let isLoggedIn = "";
let valueInBoolean = Boolean(isLoggedIn);

//console.log(valueInBoolean);

// any number, except "0" is converted as true, only "0" will be converted as false.
// "" incase of empty strings the output was false, and in other cases like "nitin" the output was true.


let someNumber = 33;

let valueInString = String(33);

console.log(valueInString); //33
console.log(typeof valueInString); //string