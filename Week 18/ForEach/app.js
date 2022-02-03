// const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

// nums.forEach(function (n) {
//     console.log(n * n);
// });

// nums.forEach(function (el) {
//     if (el % 2 === 0) {
//         console.log(el);
//     }
// });

// const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 11, 12, 13, 14, 15];

// numbers.forEach(function (element) {
//     if (element % 2 === 0) {
//         console.log(element);
//     }

// });

// for (let element of numbers) {
//     console.log(element);
// }

const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }

];


movies.forEach(function (movie) {
    console.log(`${movie.title} - ${movie.score}/100`);
});