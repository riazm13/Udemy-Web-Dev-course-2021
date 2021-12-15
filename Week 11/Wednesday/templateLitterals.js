let product = "Artichokes";
let price = 3.99;
price = 2.25;

let quantity = 5;

let total = "You bought" + quantity + " " + product + ". " + "your total is:" + price * quantity;
// Output:
// You bought 5 Artichokes. your  total is: 11.25

// Using the Backtick to auto-create a str " ` ".

let creatingStrUsingBacktick = `Hello ${1 + 2 + 9}`

// the variable creatingStrUsingBacktick is going to output:
// "Hello 12"
// as you can see it treats everything within the backticks as js so the math is complete and output as a str

// if you do the same thing but with "" it will Output:
// "Hello ${1 + 2 + 9}"
// so the output will be a normal string not actual JS

// Using Backticks to recreate the above total variable
total = `You brought ${quantity} ${product.toLocaleUpperCase()}. So your Total will be: £${price * quantity}`;
// Output:
// You bought 5 ARTICHOCKES. So your  Total is: £11.25
