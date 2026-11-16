// Object mixins: Object.assign() copies their methods onto the class prototype.
const serializable = {
    serialize() {
        return JSON.stringify(this);
    }
};

const loggable = {
    log(message) {
        console.log(`[${this.constructor.name}] ${message}`);
    }
};

class Note {
    constructor(title, body) {
        this.title = title;
        this.body = body;
    }
}

Object.assign(Note.prototype, serializable, loggable);

const note = new Note('Groceries', 'Milk, eggs');

note.log('created'); // [Note] created
console.log(note.serialize()); // {"title":"Groceries","body":"Milk, eggs"}
console.log(Object.keys(Note.prototype)); // [ 'serialize', 'log' ]
