for (let i = 100; i >= 0; i -= 10) {
    console.log(i);
};


//======== SELF TEST ===================

for (let i = 25; i >= 0; i -= 5) {
    console.log(i);
}

//======== SELF TEST ===================#

// Looping Over Arrays
// const animals = ['lions', 'bears', 'tigers']
// for (let i = 0; i < animals.length; i++) {
//     console.log(i, animals[i]);
// }

//Decrementing through the Loop
const animals = ['lions', 'bears', 'tigers']

for (let i = animals.length - 1; i >= 0; i--) {
    console.log(i, animals[i].toUpperCase());
}

//======== SELF TEST ===================#
const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// WRITE YOUR LOOP BELOW THIS LINE:

for (let i = 0; i < people.length; i++) {
    console.log(people[i].toUpperCase());
}
//======== SELF TEST ===================#