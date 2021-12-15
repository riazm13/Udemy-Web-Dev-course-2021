// Math is built into JS and contains properties and methods for const's and functions
Math // This is the object that the section is about
// It has many built in functions that are very useful when working 
// this is because they remove the need to manually input and work out the logic behind whats happening

// in order to access the objects you need to write
Math.PI();//this will return 3.14...

Math.floor(123.34); //takes the input and removes everything after the decimal
//this is not rounding it will simply remove anything thats not a Whole Integer
// Output: 123

Math.ceil(34.3431)// This will allways round up no matter what
// Output: 35


// Generation of Random Numbers
Math.random();
// Will output a random number between "0" and "1" but "1" is not included

const randomNum = Math.random();
//creates a random number that is less than 1
const step2 = (randomNum * 10);
//times the decimal by 10 to make a whole Int
const step3 = Math.floor(step2);
// removes the decimal numbers so the Whole number is left
const finalNum = step3 + 1;
// takes the whole number and adds 1 to make sure that it does not end up being 0
const shorterRandomNum = Math.floor(Math.random() * 10) + 1;



// =============== Self Test ================

// NO TOUCHING! (please)
const die1 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
const die2 = Math.floor(Math.random() * 6) + 1; //random number from 1-6

// YOUR CODE BELOW THIS LINE:
const roll = `You rolled a ${die1} and a ${die2}. They sum to ${die1 + die2}`