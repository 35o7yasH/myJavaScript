// const myNums = [1, 2, 3]
// const initialValues = 0;
// const newNums = myNums.reduce( 
//     (acc, curval) => acc + curval + initialValues
// );
// console.log(newNums);



const myNums = [1, 2, 3];
const myTotal = myNums.reduce( function(acc, curval) {
    console.log(`acc: ${acc}, curval: ${curval}`);
    return acc + curval
}, 0)
console.log(myTotal);





const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceIfBuyCourse = shoppingCart.reduce( (acc, item)=> acc + item.price, 0)
console.log(priceIfBuyCourse);