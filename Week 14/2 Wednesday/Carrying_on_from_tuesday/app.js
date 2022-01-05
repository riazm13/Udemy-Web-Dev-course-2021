// =============== Self Test ===============
// DO NOT TOUCH!!! (please)
const airplaneSeats = [
    ['Ruth', 'Anthony', 'Stevie'],
    ['Amelia', 'Pedro', 'Maya'],
    ['Xavier', 'Ananya', 'Luis'],
    ['Luke', null, 'Deniz'],
    ['Rin', 'Sakura', 'Francisco']
];

//  YOUR CODE GOES BELOW THIS LINE:
airplaneSeats[3].splice(1, 1, 'Hugo');
// This works because the position is targeted
// then using splice null is removed and replaced with "Hugo"