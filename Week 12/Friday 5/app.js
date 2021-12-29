let age = 76;
// for this to work only one side needs to be true
if (age < 6 || age >= 65) {
    console.log("You get in for free!!");
} else {
    console.log("Entry fee is £10 Please");
}


// Examples of how it can be used
1 != 1 || 10 === 10 // True
10 / 2 === 5 || null // True
0 || undefined // False
// this will allow  the logic to run as long as the numbers are all whole integers so its more accurate

const age1 = -10;

if ((age1 >= 0 && age1 < 5) || age1 >= 65) {
    console.log("FREE");
} else if ((age1 >= 5) && age1 < 10) {
    console.log("£10");
} else if ((age1 >= 10) && age1 < 65) {
    console.log("£20");
} else {
    console.log("You need to enter a Valid age");
}

