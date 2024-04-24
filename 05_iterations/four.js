const myObject = {
    js: "javaScript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple",
    py: "python"
}

// for (const key in myObject) {
//     console.log(`${key}, is the shortcut of ${myObject[key]}`);
// }



const programming = ['js', 'python', 'java', 'cpp',]
for (const key in programming) {
    //console.log(key);
}







const map = new Map()                   // Maps are not iterables
map.set("IN", "India")
map.set("Fr", "France")
map.set("Ne", "Nepal")              


for (const key in map) {
    console.log(key);
}