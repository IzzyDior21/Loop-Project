
// FOR LOOP Something that runs an amount a numbers a certian amount of times.

// kill command crt + c

// 0 counts as one
// to get to number 5 yu can put = 5 or <6 add the number you're trying to get to.

// let index = 0; starts at 0

// index < 5 is going to run until we meet a condition: the entire code is going to execute until we meet our goal.

// index++ after code  executes increase index as one

//for (let index = 0; index < 5; index++) {
//    console.log("Number:" + index);
//        
//}


//ARRAY
const colors = ["Red", "Blue", "Green"]

 //WHAT IS THIS ARRAY CALLED? colors from above string.
for (let i = 0; i < colors.length; i++) {
    console.log("The current color is:" + colors[i]);
    
    // you have to acknowledge that the array is a list of colors so you need to  + colors brackets [ add i]
}




// FOR LOOP is use for when you know something is ending
// WHILE LOOP is use when you don't know when something is ending

//WHILE LOOPS

while (condition) {
  // CODE EXECUTE
}


let count = 5;

while (count > 0) {
    console.log("Countdown: " + count);
    count ++;
}