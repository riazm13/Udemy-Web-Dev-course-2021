function returnDay(day) {
    if (day < 1 || day > 7) {
        return null;
    } else if (day === 1) {
        return ("Monday");
    } else if (day === 2) {
        return ("Tuesday");
    } else if (day === 3) {
        return ("Wednesday");
    } else if (day === 4) {
        return ("Thursday");
    } else if (day === 5) {
        return ("Friday");
    } else if (day === 6) {
        return ("Saturday");
    } else if (day === 7) {
        return ("Sunday");
    } else
        return null;
}