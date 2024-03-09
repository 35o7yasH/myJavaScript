const user = { 
    username: "Yash",
    price: 999,

    welcomemessage: function(){
        console.log(`${this.username}, welcome to website.`);
        console.log(this);
    }
}
// user.welcomemessage()
// user.username = "sam"
// user.welcomemessage()

// console.log(this);



// function chai(){
//     let username = "yash"
//     console.log(this)
// }
// chai()



// function chai(){
//     let username = "Yash"
//     console.log(this.username);
// }
// chai()

// const chai = function() {
//     let username = "Yash"
//     console.log(this.username);
// }
// chai ()

// const chai = () => {
//     let username = "Yash"
//     console.log(this.username);
// }
// chai()

// const chai = () => {
//     let username = "Yash"
//     console.log(this);
// }
// chai()


// const addtwo = (num1, num2) => {
//     return num1 + num2
// }
// Implicit return

// const addTwo = (num1, num2) => num1 + num2
//or
// const addTwo = (num1, num2) => ( num1 + num2 )
// console.log(addTwo(3, 15));


const object = () => ({userName: "Yash"})
console.log(object());

// const myArray = [2, 4, 5, 9, 7]
// myArray.forEach()