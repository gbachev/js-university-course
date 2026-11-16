// [Symbol.iterator] as a generator method: no counter, no { value, done } objects.
class Bookshelf {
    constructor(...titles) {
        this.titles = titles;
    }

    *[Symbol.iterator]() {
        for (const title of this.titles) {
            yield title;
        }
    }
}

const shelf = new Bookshelf('Dune', 'Emma', 'Ulysses');

console.log([...shelf]); // [ 'Dune', 'Emma', 'Ulysses' ]
console.log([...shelf].length); // 3
