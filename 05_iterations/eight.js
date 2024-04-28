const myNums = [1, 2, 3]
const initialValues = 0;
const newNums = myNums.reduce( 
    (acc, curval) => acc + curval + initialValues
);
console.log(newNums);