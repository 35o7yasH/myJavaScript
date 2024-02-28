//arrays

const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ['ironMan', 'hulk', 'thor', 'hatim'];

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[2]);



// array methods

// myArr.push(6);
// myArr.push(7);
// myArr.pop()

// myArr.unshift(9);
// myArr.shift();

// console.log(myArr.includes(5));
// console.log(myArr.indexOf(0));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);


//slice & splice


console.log("A ", myArr);
const myn1 = myArr.slice(1, 3);
console.log(myn1); 

console.log("B ", myArr);
const myn2 = myArr.splice(1, 3);
console.log(myArr);
console.log(myn2);