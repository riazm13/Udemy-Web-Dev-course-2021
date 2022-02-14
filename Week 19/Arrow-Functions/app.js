const square = (x) => {
    return x * x;
}

const sum = (x, y) => {
    return x + y;
}

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1;
// }

const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
)

//=========== SELF TEST ==============

const greet = (name) => {
    return `Hey ${name}!`;
}

//=========== SELF TEST ==============

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

// const newMovies = movies.map(function (movie) {
//     return `${movie.title} - ${movie.score / 10}`;
// })

const newMovies = movies.map(movie => {
    return `${movie.title} - ${movie.score / 10}`
})

// setTimeout(() => {
//     console.log("Hello");
// }, 3000)
// will set a timer before the code is run

// console.log(Math.random());

const id = setInterval(() => {
    console.log(Math.random());
}, 2000);

clearInterval(id);