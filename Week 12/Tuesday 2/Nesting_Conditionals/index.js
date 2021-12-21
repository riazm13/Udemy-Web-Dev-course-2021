// Password must be 6+ Characters


const password = prompt("Please enter a new password");

if (password.length >= 6) {
    // Password Cannot Include Spaces
    if (password.indexOf(" ") === -1) {
        console.log("Password is Valid!!");
    } else {
        console.log("you need to make sure that there are no spaces in the actual password");
    }

} else {
    console.log("You need to make your password longer!!!");
}


// ============================ SELF TEST ================================
// Change the value of num, so that "YOU GOT ME!" prints out
const num = 102; // THIS IS THE ONLY LINE YOU SHOULD CHANGE :) 

// DO NOT TOUCH ANYTHING BELOW (please) 

//if the number is smaller than or equal too 100
if (num <= 100) {
    // Run this nested code "Dont want to do that"
    if (num >= 50) {
        console.log("HEY!");
    }
    // Check to see if the number us smaller than 103
} else {
    if (num < 103) {
        // Check to see if the number is even
        if (num % 2 === 0) {
            // Print this 
            console.log("YOU GOT ME!");
        }
    }
}
// added comments in the test to make sure that I can remember what i was doing and the thougt process of working through the nested statements
// ============================ SELF TEST ================================

