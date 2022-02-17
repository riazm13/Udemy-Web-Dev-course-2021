function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1

}

function greet(name, msg = "Hey there", punc = "!") {
    console.log(`${msg}, ${name}${punc}`);
}