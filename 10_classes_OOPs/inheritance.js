class User{
    constructor(userName){
        this.userName = userName;
    }
    logMe(){
        console.log(`USERNAME is: ${this.userName}`);
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password
    }

    addCourse(){
        console.log(`A new course is added by ${this.userName}`);
    }
}

const chai = new Teacher("Hitesh, sir", "chai@netflix.com", 123)

// chai.logMe()
// chai.addCourse()

const masalaChai = new User("masalaChai")

// masalaChai.logMe()

console.log(chai instanceof Teacher);

