// Key Concepts:

// Collection of values
// Its an Orderd Collection of Values that starts from *0*

// Creating Arrays

// Empty Array
let students = [];

// Array of strings
let colors = ["red", "green", "blue", "orange"];

// Array of Numbers

let numbers = [1, 2, 12, 7];

// Mixed array of numbers and strings

let mixedValues = [true, "String", 123, null];

//typeof.[];
// This will output that the array is an Object

const daysOfTheWeek = ["Monday", "Tuesday", "Wednesday"];
daysOfTheWeek[0];
//This will output "Monday" because its at index "0"

// you can also access specific letters
daysOfTheWeek[1][0];
//this will output the first letter of index "1"
// Output: "T"

//arrays can be changed completly depending on the usecase

daysOfTheWeek[3] = "Thursday";
daysOfTheWeek[4] = "Friday";
// Here i have added two new strings to the array
// This means that when its logged it will include mon - Friday
console.log(daysOfTheWeek);

// I can also specify a letter to change and turn the fourth index into an integer or different type of variable
// depemding on the specificity required.

// ========================  SELF TEST ===================

const leaderboard = ['Harry', 'Lua', 'Hermione', 'Bellatrix']; //DON'T TOUCH THIS LINE!

// YOUR CODE BELOW HERE:

leaderboard[1] = "Luna";
leaderboard[3] = "Draco";

//=========================================================