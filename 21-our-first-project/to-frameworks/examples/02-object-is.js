// How React decides to skip a render: Object.is() on the old and the new state.
const hasBook = (books, key) => books.some((book) => book.key === key);

function addBook(books, book) {
    if (hasBook(books, book.key)) {
        return books;
    }
    return [...books, { ...book, read: false }];
}

let books = [];

function setBooks(next) {
    if (Object.is(next, books)) {
        console.log('same array, nothing to draw');
        return;
    }
    books = next;
    console.log(`drawing ${books.length} book(s)`);
}

const dune = { key: 'dune', title: 'Dune', author: 'Frank Herbert' };
setBooks(addBook(books, dune)); // drawing 1 book(s)
setBooks(addBook(books, dune)); // same array, nothing to draw

// push() changes the same array, so the check sees no change.
books.push({ key: 'emma', title: 'Emma', author: 'Jane Austen' });
setBooks(books); // same array, nothing to draw
console.log(books.length); // 2
