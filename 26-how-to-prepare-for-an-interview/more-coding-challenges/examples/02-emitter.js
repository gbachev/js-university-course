class Emitter {
    #listeners = new Map();

    on(type, listener) {
        if (!this.#listeners.has(type)) {
            this.#listeners.set(type, new Set());
        }
        this.#listeners.get(type).add(listener);
        return () => this.off(type, listener);
    }

    off(type, listener) {
        this.#listeners.get(type)?.delete(listener);
    }

    emit(type, ...args) {
        const listeners = this.#listeners.get(type) ?? [];
        for (const listener of [...listeners]) {
            listener(...args);
        }
    }
}

const cart = new Emitter();
const stop = cart.on('add', (title) => console.log(`Added ${title}`));
cart.on('add', (title, price) => console.log(`+${price} EUR`));

cart.emit('add', 'Dune', 12);
// Added Dune
// +12 EUR
stop();
cart.emit('add', 'Emma', 9); // +9 EUR
cart.emit('remove', 'Dune'); // no listeners, nothing happens
