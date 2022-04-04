function getCookie(cookieName) {
    // Returns cookie value if it exists,
    // or returns null if it does not
}

// Use a value from a cookie for the page
var cookieValue = getCookie('history'),
    cookieArray = cookieValue.split(',');

// Log the first item in the history
console.log(cookieArray[0]);

// What could go wrong here?