// const nitin = function(){
//     console.log("Hello world!");

// }
// console.log(typeof nitin);

function sayMyName() {
    console.log('N');
console.log('i');
console.log('t');
console.log('i');
console.log('n');

}
//sayMyName()

// function addTwoNums(number1, number2){
//     console.log(number1 + number2);
// }
// addTwoNums(3, 9)

function addTwoNums(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}
const result = addTwoNums(8, 9)
// console.log(result);


// function loginUserMessage(userName){
//     return `${userName} just logged in.`
// }
// console.log(loginUserMessage("Nitin"));

// function loginUserMessage(userName){
//     return `${userName} just logged in.`
// }
// console.log(loginUserMessage());


function loginUserMessage(userName = "dsa"){
    if(!userName){
        console.log("Please, enter an valid data.");
        return
    }
    return `${userName} just logged in.`
}
// console.log(loginUserMessage());




function calculateCartPrice(va1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 4800) );

const user = {
    userName: "Nitin",
    price: 349
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName}, and the price will be ${anyObject.price}.`);
}
// handleObject(user)
// handleObject({
//     userName: "Yash",
//     price: 399
// })

const myNewArray = [200, 400, 100, 600]
function handleArray(anyArray){
    return anyArray[1]
}
// console.log(handleArray(myNewArray));
console.log(handleArray([200, 400, 800, 1000]));
