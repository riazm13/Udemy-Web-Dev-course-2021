function callTwice(funky) {
    funky();
    funky();
}

function rollDie() {
    const roll = Math.floor(Math.random() * 5) + 1
    console.log(roll);
}

// callTwice(rollDie);

function callTenTimes(f) {
    for (let i = 0; i < 10; i++) {
        f();
    }
}

callTenTimes(rollDie);