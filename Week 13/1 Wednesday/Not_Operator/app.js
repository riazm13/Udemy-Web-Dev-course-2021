!null // True

!(0 === 0); // False

!(3 <= 4); // False

const firstName = prompt("Enter your Name");

if (!firstName) {
    console.log("you need to enter a name");
} else {
    console.log(firstName);
}

const age = 45;
if (!(age >= 0 && age < 5 || age >= 65)) {
    console.log("You are not a baby or a senior, Pay the Fee for Entry!!!");
} else {
    console.log("You get in for free");
}