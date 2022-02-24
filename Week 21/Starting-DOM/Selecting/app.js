const allImages = document.getElementsByTagName('img');

for (let img of allImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
}


const squareImages = document.getElementsByClassName('square');

for (let img of squareImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
}

const links = document.querySelectorAll('p a');

for (let link of links) {
    console.log(link.href)
}

// ================= SELF TEST ================

// const image = document.getElementById('unicorn');
// const heading = document.getElementById('mainheading');

// ================= SELF TEST ================

// Your code goes in here!

// const doneTodos = document.querySelectorAll('.done');

// let checkbox = document.querySelector("input[type='checkbox']");
// ================= SELF TEST ================