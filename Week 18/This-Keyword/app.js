const person = {
    first: 'Robert',
    Last: 'Pearson',
    fullName() {
        return `${this.first} ${this.Last}`
    }
}

person.fullName(); // Robert Pearson
person.Last = 'Plant';
person.fullName(); // Robert Plant

const cat = {
    name: 'Cleo',
    color: 'White and Gold',
    breed: 'Unkown',
    meow() {
        console.log('MEOW MEOW MEOW');
    }
}

// =========== SELF TEST ===========

const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg() {
        const EGG = this.eggCount++;
        return 'EGG'
    }
}


// =========== SELF TEST ===========