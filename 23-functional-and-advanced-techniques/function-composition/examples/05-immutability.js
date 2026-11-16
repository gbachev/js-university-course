// A step returns a new value instead of changing its input.
const books = [
    { title: 'Dune', read: false },
    { title: 'The Hobbit', read: false },
];

const markAllReadInPlace = list => {
    list.forEach(book => {
        book.read = true;
    });
    return list;
};

const markAllRead = list =>
    list.map(book => ({ ...book, read: true }));

const updated = markAllRead(books);
console.log(books[0].read); // false
console.log(updated[0].read); // true

markAllReadInPlace(books);
console.log(books[0].read); // true
