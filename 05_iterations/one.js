 // for loop

for (let index = 0; index <= 10; index++) {
    const element = index;
    if (element == 5) {
        //console.log(`5 is the best number.`);
    }
    //console.log(element);
    
}



for (let i = 0; i <= 10; i++) {
    //console.log(`Outer loop value is ${i}`);
    for (let j = 0; j <= 10; j++) {
        //console.log(`Inner loop value is ${j}, and outer loop value is ${i}`);
        
    }
    
}

const myArray = ["hulk", "thor", "wonda", "captain marvel", "ant-man"]
for (let index = 0; index < myArray.length; index++) {
    const me = myArray[index];
    //console.log(me);
    
}



// break and continue


for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`We got ${index}`);
        break;
    }
    console.log(`Value of ${index}`);
    
}
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`We got ${index}`);
        continue;
    }
    console.log(`Value of ${index}`);
    
}