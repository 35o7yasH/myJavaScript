
// Foreach loop syntax

// array.forEach(element => {
    
// });



const coding = ["javaScript", "python", "rust", "golang", "java", "cpp"];

// coding.forEach( function(val) {
//     console.log(val);
// })

// coding.forEach( (val)=>{
//     console.log(val);
// } )


// coding.forEach(val => {
//     console.log(val);
// });

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)


// coding.forEach( (item, index, arr)=>{
//     console.log(item, index, arr);
// } )


const myCoding = [
    {
        languageName: "javaScript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item)=>{
    console.log(item.languageFileName, item.languageName);
} )