const notesByBook = new WeakMap();

export function addNote(book, text) {
    if (!notesByBook.has(book)) {
        notesByBook.set(book, []);
    }
    const notes = notesByBook.get(book);
    notes.push(text);
    return notes.length;
}

export function getNotes(book) {
    return notesByBook.get(book) ?? [];
}
