// Task 2: Keep the original
// Lecture: Newer Array Methods: at(), findLast(), toSorted() and More
//
// Our reading list keeps its books in the order the user added them. Each book is
// an object like { title: 'Dune' }. The four functions below return the right
// arrays, but each one changes the array it gets, so the user's own order is lost.
// Rewrite them with the copying methods so they return a new array and the array
// we pass in stays exactly as it was. replaceBook() and removeBook() accept
// negative indexes too: -1 is the last book. replaceBook() with an index past
// either end throws a RangeError.
//
// Examples:
//   const books = [{ title: 'Emma' }, { title: 'Dune' }, { title: 'Beloved' }];
//   sortByTitle(books)    // Beloved, Dune, Emma (books is still Emma, Dune, Beloved)
//   newestFirst(books)    // Beloved, Dune, Emma
//   removeBook(books, 0)  // Dune, Beloved
//   replaceBook(books, -1, { title: 'Hyperion' })  // Emma, Dune, Hyperion
//
// Run the tests: npm test -- 08-arrays-and-keyed-collections/newer-array-methods

export function sortByTitle(books) {
    return books.sort((a, b) => a.title.localeCompare(b.title));
}

export function newestFirst(books) {
    return books.reverse();
}

export function removeBook(books, index) {
    books.splice(index, 1);
    return books;
}

export function replaceBook(books, index, book) {
    if (index < 0) {
        index = books.length + index;
    }
    if (index < 0 || index >= books.length) {
        throw new RangeError('Invalid index : ' + index);
    }
    books[index] = book;
    return books;
}
