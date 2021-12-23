const userInput = prompt("Enter Something");
// Depending on the input from the user this will come up as truth or false
if (userInput) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}
// This will output Truth as a negative number still has a value
if (-1) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}


//=======================================================================
// REMEMBER: Everything is true except the below values

// the below examples are all going to output false.
if (0) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

if (false) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

if (null) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

if (undefined) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

if (NaN) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

//=======================================================================