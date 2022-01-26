function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(capitalizeFirstLetter('foo')); // Foo

// This will take the first letter of any input and capitalise it

// Then add that back to the rest of the string