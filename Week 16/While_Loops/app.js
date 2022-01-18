// let count = 0;

// while (count <= 10) {
//     console.log(count)
//     count++;
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(i)
// }

//Both will Loop from 0 - 10

// const secretCode = 'BabyHippo';

// let guess = prompt('Enter the secret code');

// while (guess !== secretCode) {
//     guess = prompt('Enter the secret code');
// }

// console.log('The Code is Correct You May Enter');

// This is an example of how the while loop can be used traditionally

let input = prompt("Hay Say Something");
while (true) {
    input = prompt(input);
    if (input.toLowerCase() === "stop") {
        break;
    }
}

console.log('Ill Stop Now');