const randomNum = Math.floor(Math.random() * 100);
//let randomNum = "Testing the Else at the end as a Break Point for the statement."
if (randomNum <= 50) {
    console.log("the number is smaller than or equal too 50. Your number is ");
    console.log(randomNum);
} else if (randomNum >= 51) {
    console.log("The number is bigger than or equal too 51. Your number is ");
    console.log(randomNum);
} else {
    console.log("you need to have an acctual number bro whats wrong with you.");
}

// 0 - 5 Free entry
// 6 - 10 Child Fare £10 Entry
// 10 - 50 Adult Fare £25 Entry
// 50+  Senior Entry is Free

let age = 51;

if (age <= 5) {
    console.log("You are a Baby so its Free Entry");
} else if (age <= 6) {
    console.log("You are a Child Entry is £10");
} else if (age <= 50) {
    console.log("You are an adult, Entry is £25");
} else if (age <= 51) {
    console.log("Seniors get in for free. Have a great time at the Theme Park");
} else {
    console.log("You need to Input a valid Age, Thanks for your Co-operation");
}


// ==================== SELF TEST =========================
function getColor(phrase) {
    //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓
    if (phrase == "stop") {
        console.log("red");
    } else if (phrase == "slow") {
        console.log("yellow");
    } else if (phrase == "go") {
        console.log("green");
    } else {
        console.log("purple");
    }

    //AND THIS LINE ↑↑↑↑↑
}

// ======================================================