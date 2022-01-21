// let input = prompt("What would you like to do?");
// const todos = ["Collect Chicken Eggs", "Clean cats litter tray"];
// while (input.toLowerCase() !== "quit" && input.toLowerCase() !== "q") {
//     input = prompt(input);
//     if (input.toLowerCase() === "new") {

//     } else if (input.toLowerCase() === "list") {
//         console.log("********************");
//         for (let i = 0; i < todos.length; i++) {
//             console.log(`${i}: ${todos[i]}`);
//         }
//         console.log("********************");
//     } else if (input.toLowerCase() === "delete") {

//     } else (input.toLowerCase() === "quit")
//     break;
// }
let input = prompt("What would you like to do?");
const todos = ["Collect Chicken Eggs", "Clean cats litter tray"];
while (input !== "quit" && input !== "q") {
    if (input === "list") {
        console.log("********************");
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("********************");
    }
    else if (input === "new") {
        const newTodo = prompt("What would you like to add?");
        todos.push(newTodo);
        console.log(`${newTodo} was added to the list`);
    }
    else if (input === "delete") {
        const index = parseInt(prompt("enter an index to remove"));
        const deleted = todos.splice(index, 1);
        console.log(`You deleted ${deleted[0]}`);
    }
    else {
        console.log("Unknown Index");
    }
    input = prompt("What would you like to do?");

}
console.log('You Quit the App');