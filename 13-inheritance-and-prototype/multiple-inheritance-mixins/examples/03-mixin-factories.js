// Mixin factories: functions that take a base class and return a class extending it.
const Serializable = (Base) => class extends Base {
    serialize() {
        return JSON.stringify(this);
    }
};

const Emitter = (Base) => class extends Base {
    #listeners = {};

    on(event, listener) {
        this.#listeners[event] ??= [];
        this.#listeners[event].push(listener);
    }

    emit(event, data) {
        for (const listener of this.#listeners[event] ?? []) {
            listener(data);
        }
    }
};

class Entity {
    constructor(id) {
        this.id = id;
    }
}

class Note extends Serializable(Emitter(Entity)) {
    constructor(id, title) {
        super(id);
        this.title = title;
    }

    rename(title) {
        this.title = title;
        this.emit('change', title);
    }
}

const note = new Note(1, 'Groceries');

note.on('change', (title) => console.log(`Renamed to ${title}`));
note.rename('Weekly groceries'); // Renamed to Weekly groceries

console.log(note.serialize()); // {"id":1,"title":"Weekly groceries"}
console.log(note instanceof Entity); // true
