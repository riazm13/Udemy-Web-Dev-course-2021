if (1 + 1 === 2) {
    console.log("Math is correct");
}
// if the contition is false then only the code within the curly braces will not run the rest is self explanitory

if (1 + 1 === 3) {
    console.log("Math is Incorrect");
}

// using conditions to find if a number is larger than "0.5"
let randomNum = Math.random();

if (randomNum <= 0.5) {
    console.log("The number is less than or equal too 0.5");
    console.log(randomNum)
} else {
    console.log("The number is larger than 0.5");
    console.log(randomNum);
}


//================= Self Test ===================

function isEven(num) {
    //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓ 
    if ((num % 2) === 0) {
        console.log("even");
    }

    //AND THIS LINE ↑↑↑↑↑

//================================================
