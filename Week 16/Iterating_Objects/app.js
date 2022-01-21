const testScores = {
    Keenan: 80,
    dameon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayn: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60
}
// This wont work as Objects are not itterables 
// for (let person of testScores) {
//     console.log(person);
// }

for (let person in testScores) {
    console.log(`${person} scored: ${testScores[person]}`);
}

let total = 0;
let scores = Object.values(testScores);
for (score of scores) {
    total += score;

}

console.log(total);
console.log(total / scores.length);