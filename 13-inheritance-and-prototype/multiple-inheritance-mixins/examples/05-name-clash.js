// Two mixins with the same method name: the last one copied wins.
const loggable = {
    log(message) {
        console.log(`[${this.title}] ${message}`);
    }
};

const auditable = {
    log(message) {
        this.history.push(message);
    }
};

class Note {
    constructor(title) {
        this.title = title;
    }
}

Object.assign(Note.prototype, loggable, auditable);

const note = new Note('Groceries');

console.log(Note.prototype.log === auditable.log); // true

try {
    note.log('created');
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // TypeError: Cannot read properties of undefined (reading 'push')
}
