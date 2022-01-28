// function makeMysteryFunc() {
//     const rand = Math.random();
//     if (rand > 0.5) {
//         return function () {
//             console.log("CONGRATS, I AM A GOOD FUNCTION!")
//             console.log("YOU WIN A MILLION DOLLARS!!")
//         }
//     } else {
//         return function () {
//             alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS!")
//             alert("STOP TRYING TO CLOSE THIS WINDOW!")
//             alert("STOP TRYING TO CLOSE THIS WINDOW!")
//             alert("STOP TRYING TO CLOSE THIS WINDOW!")
//             alert("STOP TRYING TO CLOSE THIS WINDOW!")
//             alert("STOP TRYING TO CLOSE THIS WINDOW!")
//         }
//     }
// }

// function makeMysteryFunc() {
//     const rand = Math.random();
//     if (rand > 0.5) {
//         return function () {
//             console.log('Congrats You have a Good Function');
//         }

//     } else {
//         return function () {
//             alert('You have been given a computer Virus!!!');
//         }
//     }
// }

// console.log(makeMysteryFunc());


// makeBetweenFunc(50, 100) => 

// function makeBetweenFunc(num) {
//     return num >= 50 && num <= 100;
// }

// function makeBetweenFunc2(num) {
//     return num >= 1 && num <= 10;
// }

// console.log(makeBetweenFunc());
// console.log(makeBetweenFunc2());

function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}

const isUnderAge = makeBetweenFunc(0, 17);
const isAdult = makeBetweenFunc(18, 55);

const isAdult = makeBetweenFunc(56, 999999999);