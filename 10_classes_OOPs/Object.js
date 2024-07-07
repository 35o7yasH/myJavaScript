function multipleBy5(num){
    return num*5;
}


multipleBy5.power = 2;


console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);





function createuser( userName, score){
    this.userName = userName;
    this.score = score;
}




createuser.prototype.increment = function(){
    this.score++;
}

createuser.prototype.printMe = function(){
    console.log(`Price is: ${this.score}`);
}


const chai = new createuser("chai", 25)
const tea = new createuser("tea", 200)

chai.printMe()