function greet(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName}`);
}

greet('Harry', 'Potter');



// function called repeat
// takes 2 params
//  one is str the second is number of times it will be repeated

function repeat(message, num) {
    let result = '';
    for (i = 0; i < num; i++) {
        result += message;
    }
    console.log(result);
}

repeat('This is a message', 12);

//====== SELF TEST ==============

function isSnakeEyes(num1, num2) {
    const one = 1;
    if (num1 === one && num2 === one) {
        console.log(`Snake Eyes! (${num1, num2})`);
    } else
        console.log(`Not Snake Eyes! (${num1, num2})`);
}
isSnakeEyes(1, 1);
isSnakeEyes(3, 5);

//====== SELF TEST ==============


function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    let sum = x + y;
    return sum;
    console.log(x + y);
}


//====== SELF TEST ==============

function multiply(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    let sum = x * y;
    return sum;
}

//====== SELF TEST ==============