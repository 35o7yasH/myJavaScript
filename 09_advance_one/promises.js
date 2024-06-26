const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("wanna be async task is done.");
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed.");
})




new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async part 2 done.");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 printed.");
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Yash", email: "yash@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user.username);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if (!error){
            resolve({username: "yash", emailID: "yash.k@google.come"})
        } else{
            reject('ERROR: Something went wrong.')
        }
    }, 1000)
})

const chipi = promiseFour.then((user) =>{
    console.log(user);
    return user.username
})

console.log(chipi);