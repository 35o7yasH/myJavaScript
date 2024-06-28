// fetch('https://something.com').then().catch().finally()


const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task one done");
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise completed");
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async 2 completed");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Promise part 2 done");
})



const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 3 completed");
        resolve({userName: "Yash", email: "Yash@google.com", password: 123})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user.userName);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){

        }
    }, 1000)
})