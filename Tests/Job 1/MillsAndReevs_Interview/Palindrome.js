const palindrome = str => {
    str.toLowerCase();
    console.log(str === str.split('').reverse().join());
}

palindrome("Kayak");