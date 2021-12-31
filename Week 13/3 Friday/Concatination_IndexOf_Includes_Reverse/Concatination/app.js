const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
let concatArrays = array1.concat(array2);

console.log(concatArrays);

let cats = ["Loki", "Cleio", "Thor"];
let dogs = ["Buster", "Puppy", "Smokey", "Liggy"];

let catsAndDogs = cats.concat(dogs);




//=================== SELF TEST =============
// concatArrays
// (6) ['a', 'b', 'c', 'd', 'e', 'f']
// cats
// (3) ['Loki', 'Cleio', 'Thor']
// dogs
// (4) ['Buster', 'Puppy', 'Smokey', 'Liggy']
// catsAndDogs
// (7) ['Loki', 'Cleio', 'Thor', 'Buster', 'Puppy', 'Smokey', 'Liggy']
// catsAndDogs.push();
// 7
// catsAndDogs.pop();
// 'Liggy'
// catsAndDogs
// (6) ['Loki', 'Cleio', 'Thor', 'Buster', 'Puppy', 'Smokey']
// catsAndDogs.shift();
// 'Loki'
// catsAndDogs
// (5) ['Cleio', 'Thor', 'Buster', 'Puppy', 'Smokey']
//=================== SELF TEST =============


cats.includes("Loki");
//true
cats.includes("Blue");
//false

// Includes is a boolean method that tells you if something is True or False


// Using the indexOf method allows the user to find the place in the array of any if if the items in the array in this case all of them are strings
// Allways Remeber if the index === -1 then its non existent



// catsAndDogs
// (7) ['Loki', 'Cleio', 'Thor', 'Buster', 'Puppy', 'Smokey', 'Liggy']
// catsAndDogs.indexOf(3);
// -1
// catsAndDogs.indexOf("Cleio");
// 1
// catsAndDogs.indexOf("Thor");
// 2
// catsAndDogs.indexOf("Liggy");
// 6
// catsAndDogs.indexOf("");
// -1
// Good to remeber : will only show the first version in the index so if there are multiples of the same thing it won't show the rest


catsAndDogs.reverse();
// this takes the array and reverses it, It makes a permanent change to the actual array
console.log(catsAndDogs);
//Output:
// ['Liggy', 'Smokey', 'Puppy', 'Buster', 'Thor', 'Cleio', 'Loki']

let colors = ["red", "orange", "green", "blue", "indigo", "violet"];
//colors
//(6) ['red', 'orange', 'green', 'blue', 'indigo', 'violet']



let coolColors = colors.slice(3);
//coolColors
//(3) ['blue', 'indigo', 'violet']


// in order to go backwards you have to start with a negative number


// Using Splice Method

// takes 3 variables

// 1st the starting point
// 2nd what to delete / this can be 0
// 3rd what to replace/ add

colors.splice(4, 1);
//Output:
// colors
// (5) ['red', 'orange', 'green', 'blue', 'violet']

colors.splice(4, 0, "indigo");
//Output
// colors
//(6) ['red', 'orange', 'green', 'blue', 'indigo', 'violet']
//As you can see it adds to the location and i placed "indigo" back into the array
