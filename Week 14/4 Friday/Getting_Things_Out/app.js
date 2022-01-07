const kitchenSink = {
    favNum: 92319023,
    isFunny: true,
    colors: ["red", "green", "blue"]
};

const years = { 1997: "Good", 1911: "Bad" };
//how to call objects
// years
// {1911: 'Bad', 1997: 'Good'}
// years[1997]
// 'Good'
// years[1911]
// 'Bad'
// years[1911];
// 'Bad'

//========== SELF TEST =================

//PLEASE DON'T TOUCH THIS LINE!
const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

//YOUR CODE GOES DOWN HERE:

let fullAddress = {
    restaurant.address,
    restaurant.city,
    restaurant.state,
    restaurant.zipcode

};


//========== SELF TEST =================

