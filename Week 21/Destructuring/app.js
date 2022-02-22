const scores = [3465346, 346346, 6589758647, 3465357, 6586574567, 4542567, 68679757, 4575745];

const highScore = scores[0];
const secondHighScore = scores[1];

const [gold, silver, bronze, ...allOtherScores] = scores;

//=======================================

const user = {
    email: 'harvey@gmail.com',
    password: 'HelloWorld123',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'Harvey Bernard Milk was an american politiian ...',
    city: 'Sam Francisco',
    state: 'California'
}

const user2 = {
    email: 'stacey@gmail.com',
    firstName: 'Stacey',
    lastName: 'Gonzalez',
    born: 1987,
    city: 'Tulsa',
    state: 'Oklahoma'
}

// const firstName = user.firstName;
// const lastName = user.lastName;
// const email = user.email;

// const { email, firstName, lastName, city, bio } = user;

// const { born: birthYear, died: yearOfDeath } = user;

const { city, state, died = 'N/A' } = user2;


// function fullName(user) {
//     return `${user.firstName}${user.lastName}`
// }

// function fullName(user) {
//     const { firstName, lastName } = user;
//     return `${firstName} ${lastName}`
// }

function fullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`
}