class LRUCache {
    constructor(limit) {
        this.limit = limit;
        this.entries = new Map();
    }

    get(key) {
        if (!this.entries.has(key)) {
            return undefined;
        }
        const value = this.entries.get(key);
        this.entries.delete(key);
        this.entries.set(key, value);
        return value;
    }

    set(key, value) {
        this.entries.delete(key);
        this.entries.set(key, value);
        if (this.entries.size > this.limit) {
            const oldest = this.entries.keys().next().value;
            this.entries.delete(oldest);
        }
    }
}

const covers = new LRUCache(2);
covers.set('dune', 'dune.jpg');
covers.set('emma', 'emma.jpg');
covers.get('dune'); // dune is now the most recent
covers.set('ulysses', 'ulysses.jpg'); // the cache is full: emma goes

console.log([...covers.entries.keys()]); // ['dune', 'ulysses']
console.log(covers.get('emma')); // undefined
console.log(covers.get('dune')); // dune.jpg
