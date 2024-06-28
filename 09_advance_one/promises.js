// fetch('https://something.com').then().catch().finally()


// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task one done");
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function(){
//     console.log("Promise completed");
// })


// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async 2 completed");
//         resolve()
//     }, 1000)
// }).then(function(){
//     console.log("Promise part 2 done");
// })



// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 3 completed");
//         resolve({userName: "Yash", email: "Yash@google.com", password: 123})
//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user.userName);
// })


// const promiseFour = new Promise(function(resolve, reject){
    // setTimeout(function(){
    //     let error = false;
    //     if(!error){
    //         resolve({userName: "Yash", email:"yash@example.com", })
    //     } else {
    //         console.log("ERROR: SOmthing went wrong");
    //     }
    // }, 1000)
// })


// promiseFour.then(function(user){
//     console.log(user);
//     return user.userName;
// }).then((userName) =>{
//     console.log(userName);
// }).catch((error) =>{
//     console.log(error);
// }).finally(()=>{
//     console.log("The promise either resolved or rejected.");
// })




const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({userName: "JavaScript", email:"yash@example.com", })
        } else {
            console.log("ERROR: JS went wrong");
        }
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

// consumePromiseFive()



// async function getAllUser(){
//    try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json();
//     console.log(data);
//    } catch (error) {
//         console.log("ERROR: ", error);
//    }
// }
// getAllUser()





fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})

