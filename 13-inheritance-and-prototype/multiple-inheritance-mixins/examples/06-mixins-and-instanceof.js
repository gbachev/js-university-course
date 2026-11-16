// An object mixin is not in the prototype chain, so we check for the method instead.
const serializable = {
    serialize() {
        return JSON.stringify(this);
    }
};

class Note {}

Object.assign(Note.prototype, serializable);

const note = new Note();

console.log(serializable.isPrototypeOf(note)); // false
console.log(typeof note.serialize === 'function'); // true
