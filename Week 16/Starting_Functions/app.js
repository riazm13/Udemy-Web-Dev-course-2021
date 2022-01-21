function grumpus() {
    console.log("Ugh...you Again...");
    console.log("for the last time");
    console.log("LEAVE ME ALONE!!!");
}

function sing() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
}
sing();

//======= SELF TEST ===========

// Write your function here:

function printHeart() {
    console.log("<3");
}
printHeart();


//======= SELF TEST ===========


// Function that accepts an arg:

function greet(person) {
    console.log(`hi ${person}`);
}
greet('Riaz');

//======= SELF TEST ===========

// function rant(message) {
//     console.log(`${message.toUpperCase()}`);
//     console.log(`${message.toUpperCase()}`);
//     console.log(`${message.toUpperCase()}`);
// }
// rant('I hate beets');
//======= SELF TEST ===========

// this will do the same thing but it uses a for loop within the function

function rant(message) {
    for (let i = 0; i <= 2; i++) {
        // Runs 3 times, with values of step 0 through 2.
        console.log(`${message.toUpperCase()}`);
    }
}
rant('I hate beets');

