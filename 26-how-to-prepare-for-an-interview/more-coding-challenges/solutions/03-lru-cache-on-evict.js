export class LRUCache {
    constructor(limit, onEvict) {
        this.limit = limit;
        this.onEvict = onEvict;
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
            const [oldestKey, oldestValue] = this.entries.entries().next().value;
            this.entries.delete(oldestKey);
            this.onEvict?.(oldestKey, oldestValue);
        }
    }

    get size() {
        return this.entries.size;
    }
}
