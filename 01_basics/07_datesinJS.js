//Dates


let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
//console.log(myDate.toJSON()); // 2024-03-25T05:36:21:954Z
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(typeof myDate);



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
