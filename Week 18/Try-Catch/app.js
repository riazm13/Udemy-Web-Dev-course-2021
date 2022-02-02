// hello.toUpperCase();

try {
    hello.toUpperCase();
} catch {
    console.log('object HELLO dosent exist');
}

function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));

    } catch (error) {
        console.log('You need to enter a string!!!');
    }
}