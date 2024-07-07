const user = {
    username: "Yash",
    loginCount: 8,
    signedInfo: true,




    getUserDetails: function(){
        // console.log("Got user details from the database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this);






function User(username, loginInfo, isLoggedIn){
    this.username = username;
    this.loginInfo = loginInfo;
    this.isLoggedIn = isLoggedIn;
    // return this;



    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
}


const userOne = new User("Yash", 12, true)
const userTwo = new User("Mahesh", 10, false)
console.log(userOne.constructor);