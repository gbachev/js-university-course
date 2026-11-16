// Composition: the note holds an event bus and calls it, without a parent class.
class EventBus {
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
}

class Note {
    #events;

    constructor(title, events) {
        this.title = title;
        this.#events = events;
    }

    rename(title) {
        this.title = title;
        this.#events.emit('note:renamed', title);
    }
}

const bus = new EventBus();

bus.on('note:renamed', (title) => console.log(`Saving draft: ${title}`));

const groceries = new Note('Groceries', bus);
const todo = new Note('Todo', bus);

groceries.rename('Weekly groceries'); // Saving draft: Weekly groceries
todo.rename('Todo today'); // Saving draft: Todo today
console.log(JSON.stringify(groceries)); // {"title":"Weekly groceries"}
