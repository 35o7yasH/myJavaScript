//Dates

// Dates in javascript is beginnings from 01/01/1970 & and generally it is calculated in miliseconds

let myDate = new Date();
// console.log(myDate); //2024-04-14T08:16:48.849Z
// console.log(myDate.toString()); //Sun Apr 14 2024 08:17:14 GMT+0000 (Coordinated Universal Time)
//console.log(myDate.toJSON()); // 2024-03-25T05:36:21:954Z
// console.log(myDate.toLocaleString()); // 4/14/2024, 8:18:00 AM
// console.log(myDate.toDateString()); // Sun Apr 14 2024
// console.log(typeof myDate); // object



//Lets try to print a specific date now.


// let myCreatedDate = new Date(2023, 0, 26);// taking an random date
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());


// to print the time of an random date 
// let myNewCreatedDate = new Date (2023, 0, 26, 5, 3);
// let myNewCreatedDate = new Date ("2023-01-26");
let myNewCreatedDate = new Date ("01-26-2023");
// console.log(myNewCreatedDate.toLocaleString());



// let myTimeStamp = new Date().getTime() // the other way
let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myNewCreatedDate.getTime());

// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getMonth() + 1);


newDate.toLocaleString('default', {
    weekday: "long",
})
