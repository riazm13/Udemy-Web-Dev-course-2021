// function sum() {
//     console.log(arguments);
// }

function sum(...nums) {
    return nums.reduce((total, el) => total + el)

}


function raceResults(gold, silver, ...everyOneElse) {
    console.log(`First place is ${gold}!`);
    console.log(`Second place is ${silver}`);
    console.log(`Participation trophies go to ${everyOneElse}`);
}

raceResults('Tyrone', 'Lucy', 'Sam', 'Gibby', 'Wraith', 'Alex');