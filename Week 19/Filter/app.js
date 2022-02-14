const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const odds = nums.filter(n => {
    return nums % 2 === 1;
})

const smallNums = nums.filter(n => n < 5);

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2004
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2013
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },

    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999

    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019

    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
];

const highRated = movies.filter(movie => {
    return movie.score > 80;
})

const lowRated = movies.filter(movie => {
    return movie.score < 80;
})

const recentMovies = movies.filter(m => m.year > 2000)

const goodTitles = movies.filter(m => m.score > 80).map(m => m.title);

// ======================= SELF TEST =====================
const  = validUserNames.filter(valid => valid.length < 10).map(valid => valid.usernames);

function validUserNames(usernames) {
    return usernames.filter(usernames => usernames.length < 10)
}
// ======================= SELF TEST =====================