// Better: a private Set and a generator [Symbol.iterator]() instead of a public array.
class Bookshelf {
    #titles = new Set();

    add(title) {
        this.#titles.add(title);
        return this;
    }

    *[Symbol.iterator]() {
        yield* this.#titles;
    }
}

const shelf = new Bookshelf().add('Dune').add('Emma');

for (const title of shelf) {
    console.log(title);
}
// Dune
// Emma

console.log([...shelf]); // [ 'Dune', 'Emma' ]
const [first] = shelf;
console.log(first); // Dune
