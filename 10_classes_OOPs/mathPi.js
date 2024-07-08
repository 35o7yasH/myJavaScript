// const descriptor = Object.getOwnPropertyDescriptors(Math, 'PI')

// console.log(descriptor);


// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);


const chai = {
    name: "ginger tea",
    price: 345,
    isAvailable: true,

    orderChai: function(){
        console.log("Chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptors(chai, "name"));

// Object.defineProperty(chai, 'name', {
//     writable: false,
//     enumerable: true,
// })

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key}, ${value}`);
    }
}