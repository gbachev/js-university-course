export class LruCache {
    #capacity;
    #entries = new Map();

    constructor(capacity) {
        this.#capacity = capacity;
    }

    get(key) {
        if (!this.#entries.has(key)) {
            return undefined;
        }
        const value = this.#entries.get(key);
        // Delete and add again, so the key moves to the end: the most recent.
        this.#entries.delete(key);
        this.#entries.set(key, value);
        return value;
    }

    set(key, value) {
        this.#entries.delete(key);
        this.#entries.set(key, value);
        if (this.#entries.size > this.#capacity) {
            // The first key in the Map is the one used longest ago.
            const oldest = this.#entries.keys().next().value;
            this.#entries.delete(oldest);
        }
    }

    get size() {
        return this.#entries.size;
    }
}
