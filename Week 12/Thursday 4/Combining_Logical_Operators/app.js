// the three operators to help with combiningh expressions

// &&,  ||, !

// this is the AND Operator: &&
//Output: True
if (true && true) {
    console.log("The statement is true");
} else {
    console.log("The statement is false");
}
// Output: False
if (true && false) {
    console.log("The statement is true");
} else {
    console.log("The statement is false");
}

//Output: True
if (1 === 1 && 2 <= 7) {
    console.log("The statement is true");
} else {
    console.log("The statement is false");
}

// Both sides have to output true logic for it to output as TRUE or it will be FALSE
//pass needs to be 6+ chars
// Pass must not contain spaces

const userPassword = prompt("Please Enter a Password");

if (userPassword.length >= 6 && userPassword.indexOf(" ") === -1) {
    alert("you have a strong password and may enter!!");
    console.log("Valid Password!");
} else {
    alert("You need to make your password longer and get rid of any spaces!!!");
    console.log("Invalid Password!");
}
console.log(userPassword);

// ================= SELF TEST ========================

const mystery = 'Pimples7'; //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE



// LEAVE THIS CODE ALONE! (pretty please)
if (mystery[0] === 'P' && mystery.length > 5 && mystery.indexOf('7') !== -1) {
    console.log("YOU GOT IT!!!");
}

//======================================================