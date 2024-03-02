// const tinderUser = new Object() //this is a singleton object
const tinderUser = {} // and this is an non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "nitin"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: " my@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Nitin",
            lastName: "Choudary"
        }
    }
}

// console.log(regularUser.fullName.userFullName["lastName"]);
// console.log(regularUser);
// console.log(regularUser["fullName"]);



const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
// const obj3 = {obj1 , obj2};

// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2) //although both of the methods are correct but this method is better.


const obj3 = {...obj1, ...obj2}

// console.log(obj3);




const user = [
    {
        id: "1",
        email: "n@google.com"
    },
    {
        id: 2,
        email: "i@gmail.com"
    },
    {
        id: "3",
        email: "t@gmail.com"
    },
]

// console.log(user[2]["id"]);


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

// console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty("isLoggedIn"));