//Defines a String
let username = "Mohaammed Riaz";
// If I call "username" it us now set to str "Mohammed Riaz"

// str are all indexed, they have corresponding numbers starting from "0" onwards

let animal = "Dumbo Octopus";

animal[0]//this will call index 0 which is "D"
animal[1]//this will call index 1 which is "u" and so on and so forth

animal.length() // This will give me the length of the str automatically *USING THIS WILL START FROM 1 NOT 0*


// Concatination

let firstName = "River";
let lastName = "Nile";
firstName + lastName // this will add the two names but there wont be any spaces

// to add a space between the two you need to manually add one

firstName + " " + lastName // this will return 'River Nile'

// you cant auto change a string but you can set it under a new variable name

let fullName = firstName + " " + lastName;

//when calling fullname the output will be 'River Nile' 