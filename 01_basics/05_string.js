const name = "nitin"
const repoCount = 6

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name}, and my repo count is ${repoCount}.`);

const gameName = new String ('nitin-hc-fcb');

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());


// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));



// const newString = gameName.substring(0, 5);
// console.log(newString);


// const anotherString = gameName.slice(-10, 4);
// console.log(anotherString);


// const trimmedString = "      yash      ";
// console.log(trimmedString);
// console.log(trimmedString.trim());


const url = "https://nitin@hcfcb%20karmakar";

console.log(url.replace('%20', '-')); // https://nitin@hcfcb-karmakar

console.log(url.includes('yash')); // false

console.log(gameName.split('-')); // [nitin, hc, fcb]