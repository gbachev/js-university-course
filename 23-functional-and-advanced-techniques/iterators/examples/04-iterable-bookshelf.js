// A class joins in with a [Symbol.iterator]() method that returns an object with next().
class Bookshelf {
    constructor(...titles) {
        this.titles = titles;
    }

    [Symbol.iterator]() {
        const titles = this.titles;
        let index = 0;

        return {
            next() {
                if (index < titles.length) {
                    return { value: titles[index++], done: false };
                }
                return { value: undefined, done: true };
            }
        };
    }
}

const shelf = new Bookshelf('Dune', 'Emma', 'Ulysses');

for (const title of shelf) {
    console.log(title);
}
// Dune
// Emma
// Ulysses

console.log([...shelf]); // [ 'Dune', 'Emma', 'Ulysses' ]
