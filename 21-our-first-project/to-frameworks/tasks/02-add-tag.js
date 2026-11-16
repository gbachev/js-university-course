// Task 2: A tag the framework notices
// Lecture: From Vanilla JavaScript to Frameworks
//
// addTag(books, key, tag) adds a tag, like 'classic', to the tags array of the book
// with that key. This version returns a new outer array, so Object.is() sees a change,
// but it still changes the old book and its tags array in place: a framework that
// compares the old book with the new one sees the same object. Fix it: return a new
// array with a new book object and a new tags array for that book, keep the other
// books as the same objects, and change nothing it receives. When no book has that
// key, or the book already has that tag, return the same array: nothing changed.
//
// Examples:
//   const books = [{ key: 'dune', title: 'Dune', tags: ['sci-fi'] }];
//   const next = addTag(books, 'dune', 'classic');
//   next[0].tags                                    // ['sci-fi', 'classic']
//   books[0].tags                                   // ['sci-fi']
//   next[0] === books[0]                            // false
//   addTag(books, 'dune', 'sci-fi') === books       // true
//   addTag(books, 'emma', 'classic') === books      // true
//
// Run the tests: npm test -- 21-our-first-project/to-frameworks

export function addTag(books, key, tag) {
    const book = books.find((item) => item.key === key);
    if (book) {
        book.tags.push(tag);
    }
    return [...books];
}
