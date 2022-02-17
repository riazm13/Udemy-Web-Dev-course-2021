const nums = [1, 345, 647, 78, 345, 178, 457, 345, 647, 345, 6785675, 345346657];

maxNum = Math.max(...nums); // output == 345346657

minNum = Math.min(...nums); // output == 1


const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];

const allPets = [...cats, ...dogs];


//========================================

const feline = {
    legs: 4,
    family: 'Felidae'
};

const canine = {
    isFurry: true,
    family: 'Caninae'
};

const both = {
    ...canine,
    ...feline,
    family: 'Riaz'

}

//===================================

const dataFromForm = {
    email: 'blueman@gmail.com',
    password: 'tobais123!',
    username: 'tfunke'
}

const userData = {
    ...dataFromForm,
    id: 123,
    isAdmin: false
}