// const math = {
//     multiply: function (x, y) {
//         return x * y;
//     },
//     divide: function (x, y) {
//         return x / y;
//     },
//     square: function (x) {
//         return x * x;
//     }
// };

const myMath = {
    PI: 3.1459,
    square: function (num) {
        num * num;
    },
    cubed: function (num) {
        num ** 3;
    }
}
// Shorter/ New way of writing the above method.
const myMathShorthand = {
    PI: 3.1459,
    square(num) {
        num * num;
    },
    cubed(num) {
        num ** 3;
    }
}

const square = {
    area(side) {
        return side * side;
    },
    perimeter(side) {
        return side * 4;
    }
}