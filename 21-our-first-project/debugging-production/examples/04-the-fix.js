// src/state.js (version 1.1.1, the fix of our imagined release)
function addedText(book) {
    // Books saved by version 1.0.0 have no addedAt.
    if (book.addedAt === undefined) {
        return '';
    }
    const day = new Date(book.addedAt).toISOString().slice(0, 10);
    return `Added ${day}`;
}

const dune = { key: '/works/OL893414W', title: 'Dune', read: true };

console.log(addedText({ ...dune, addedAt: Date.UTC(2026, 10, 14) })); // Added 2026-11-14
console.log(JSON.stringify(addedText(dune))); // ""
