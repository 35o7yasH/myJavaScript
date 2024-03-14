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
true => 1; false => 0;
"" => false, "value" => true;
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

// console.log(valueInString); //33
// console.log(typeof valueInString); //string

//******************************************  Operation  *********************************************** */


let value = 3;
let negValue = -value;

// console.log(negValue);


// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**3);
// console.log(2%2);




let str1 = "Hello"
let str2 = " Nitin"
let newStr = str1 + str2;
console.log(newStr);


// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);



// console.log(+true);
// console.log(+"");


let num1, num2, num3

num1 = num2 = num3 = 2+2;

//this all are bad code, 



let gameCounter = 100;
gameCounter++;
console.log(gameCounter);