// push and pop add or remove from the END of the array

let movieLine = ["Tom", "Nancy"];

movieLine[2] = "Pablo";

// Output: Tom, Nancy, Pablo

movieLine.push("Anthony");

//Output: (4) ['Tom', 'Nancy', 'Pablo', 'Anthony']

movieLine.push("Eve", "Harry", "Hermioeny");
// Output: (7) ['Tom', 'Nancy', 'Pablo', 'Anthony', 'Eve', 'Harry', 'Hermioeny']
// Not common but push can be used to add multiple things to the end of the array


movieLine.pop();

// will remove "Hermioeny" from the end of the array
// Can also be used to capture the last item in the array

let lastPersonInLine = movieLine.pop();

