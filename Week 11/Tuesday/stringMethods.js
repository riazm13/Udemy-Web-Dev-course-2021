let string = "hello";

string.length // this will return the value 5
// without the () it will access the properties of the string variable
// witht the () it will be a Method which is a different as its executing a method not accessing a propertie

let msg = "leave me alone";

msg.toUpperCase();// this will return * LEAVE ME ALONE* as it is excuting the uppercase method
// in order for it to run the () have to be there



let userInput = "  this is a string  ";

userInput.trim();// this method will remove all whitespace from the begining and end of the variable

// Chaining Methods
let greeting = "        hello there i am a Robot   ";
greeting.toUpperCase().trim();
// Output:
// "HELLO THERE I AM A ROBOT"

//Indexing

let tvShow = "catdog";

tvShow.indexOf("cat"); // index is 0
tvShow.indexOf("dog"); // index is 3
tvShow.indexOf("z");  // -1 (not found ) this is outside the index so it is invalid so the return will allways be " -1 "

// Slice Method

const sliceDemo = "The quick brown fox jumps over the lazy dog.";

console.log(sliceDemo.slice(31));
// this will return " the lazy dog."
// so everything after index 31

// using begining and endSlice

console.log(sliceDemo.slice(4, 25));
// this will return everything between quick and jumps.
//Output:
// "quick brown fox jumps"

// the slice method will not change the original string it will only output what is asked of it
// in order to make a change the sliced varible needs to be stored in a new one such as "sliceDemo2"

const sliceDemo2 = sliceDemo.slice(4, 25);
// this will make a new variable with the new output that has been sliced.

console.log(sliceDemo2.slice(-3));
// this will start backwards and count from there 
// the output would be
// Output:
// "mps"
// this is because its asking for the last 3 characters in the string "sliceDemo2"

// using the .replace() method

sliceDemo2.replace("quick", "slow");
// Output:
// "slow brown fox jumps"
// it will take what is given from the string and change it to the new work or number within the given variable
// in this case "quick" is being switched with "slow"
// this can also be used to replace patterns in regular expressions
// will only work for the first instance of that variable

// .repeat()

//this will take the string in the variable and repeat it *by the times in the brackets*
let repeatedStr = "lol";
repeatedStr.repeat(15);
//when logged this will print "lol" 15 times in a row

//--------------------- TEST YOUR KNOWLEDGE ============================

// DON'T TOUCH THIS LINE! (please)
const word = "skateboard"; //Don't change this line!

// YOUR CODE BELOW THIS LINE:

let facialHair = word.slice(5, 10).replace("board", "beard");
