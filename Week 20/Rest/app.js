// function sum() {
//     console.log(arguments);
// }

function sum(...nums) {
    return nums.reduce((total, el) => total + el)

}
