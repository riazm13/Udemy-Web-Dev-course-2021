const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

// let total = 0;

// for (let price of prices) {
//     total += price
// }
// console.log(total);


const total = prices.reduce((total, price) => {
    return total + price;
})


const minPrice = prices.reduce((min, current) => {
    if (current < min) {
        return current;
    }
    return min;
})

const maxPrice = prices.reduce((max, current) => {
    if (current > max) {
        return current;
    }
    return max;
}) 