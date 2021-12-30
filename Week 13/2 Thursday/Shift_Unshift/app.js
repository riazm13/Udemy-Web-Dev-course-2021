let movieLine = ["Tom", "Hank", "Arthour", "Finn", "Ada", "Freddy", "Polly"];

movieLine.shift();
// Removes something from the start of the array


movieLine.unshift();
// this will add something to the start of the array

let firstInLine = movieLine.shift();
// this will remove tom from the array and set his name to first in line variable

movieLine.unshift("VIP");

// this will change the index of "0" to VIP and move all the other string up by 1


//=================== SELF TEST ============================

const planets = ['The Moon', 'Venus', 'Earth', 'Mars', 'Jupiter']; //DO NOT TOUCH THIS LINE!

// YOUR CODE GOES BELOW THIS LINE:

planets.shift();
planets.push("Saturn");
planets.unshift("Mercury");

//==========================================================