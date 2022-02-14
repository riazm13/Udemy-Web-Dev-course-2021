const words = ['dog', 'jello', 'log', 'cupcake', 'bag', 'wag'];

words.some(word => {
    return word.length > 4;
})

words.some(word => word[0] === 'z');

words.some(w => w.includes('cake'))


//=========================================================

const exams = [80, 98, 78, 77, 90, 89, 84, 81, 77];

exams.every(score => score >= 75);


//============== SELF TEST =======================

function allEvens(arr) {
    let newArray = arr.every(num => num % 2 === 0);
    return newArray;
}

// Using arrow function
const allEvens = arr => {
    let newArray = arr.every(num => num % 2 === 0);
    return newArray;
}

// Using implicit return
const allEvens = arr => arr.every(num => num % 2 === 0);

//================================================


