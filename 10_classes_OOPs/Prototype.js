// let myName = "Yash    ";
// let myChannel = "Chai aur code"

// console.log(myName.trim().length);


let myHeros = ["thor", "spiderMan"];

let heroPower = {
    thor: "hammer",
    spiderMan: "swing",


    getSpiduPower: function(){
        console.log(`Spidy power is: ${this.spiderMan}`);
    }
}

Object.prototype.yash = function(){
    console.log(`yash is present in all objects.`);
}

Array.prototype.heyYash = function(){
    console.log(`Yash is in all objects, n particals.`);
}

// heroPower.heyYash()

// heroPower.yash()

// myHeros.heyYash()

// heroPower.heyYash()




// inheritance

const user ={
    name: "chai",
    email: "chai@google.com"
} 

const Teacher = {
    nameVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TAsupport = {
    makeAssignment: "JS assignments",
    fullTime: false,
    
}

// Teacher.__proto__ = user


// Modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)






let anotherUserName = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True lenght is: ${this.trim().length}`);
}

anotherUserName.trueLength()
"yash".trueLength()
"iceTea".trueLength()