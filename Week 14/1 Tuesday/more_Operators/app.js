"hi" === "hi";
//Output: True

["hi", "bye"] === ["hi", "bye"];
// Output: False

// when making comparisons JS wont look at whats in the array but will look at how its stored in memory

let luckyNum = 87;

// The number has a certain amount of space allocated to it in memory.


let nums = [1, 2, 3];
// creates an array in the memory

let numsCopy = nums;
// points to the same area in memory that nums is stored in

nums.push(4);
// This will output 
// [1, 2, 3, 4]

numsCopy.pop();
// This will Output:
// [1, 2, 3]
// This is because they are both pointed to the same area in Memory

num === numsCopy;
// Output: True
// This is because they are both pointing to the same area in memory where the array is stored

const eggs = ["Brown", "Brown"];
// this creats a new area in memory for eggs to be stored
// The "shell / Array" allways stays in the same place
// But since its a container what is inside can allways be changed
eggs.push("White");
// Output ["Brown", "Brown", "White"];
// as you can see the area in memory hasnt been touched so it wont change
// But what is inside is updated and can also be canged depending on what it is being used for

//eggs = [1, 2, 3];
// This will throw an error as the new array is trying to point the variable to a new place in memory
// So it will NOT work
