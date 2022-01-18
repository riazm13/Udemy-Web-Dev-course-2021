let maxNum = parseInt(prompt("Enter your Max Number"));
while (!maxNum) {
    maxNum = parseInt(prompt("Enter an Actual Number"));
}
const targetNum = Math.floor(Math.random() * maxNum) + 1;
let attempts = 1;
console.log(targetNum);

let guess = parseInt(prompt("Enter your First guess"));
while (parseInt(guess) !== targetNum) {
    if (guess === "q") {
        console.log("You Quit the GAME!!");
        break;
    }
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too High! Enter a New Guess:");
    } else {
        guess = prompt("Too Low! Enter a New Guess:");
    }
}

console.log(`You got it after ${attempts} guesses!!`);