// Task 1: Creating a book, with the right status codes
// Lecture: REST Conventions and Status Codes
//
// Write createApp(books), which builds an Express app and returns it, without calling
// listen(). The app reads JSON bodies with express.json(), works on the books array it
// was given, and answers:
//
//   POST /books         201 with the new book { key, title, author } (JSON), added to the
//                       end of the books, and a Location header with the path of the new
//                       book: /books/<key>, for example /books/ubik. Other fields of the
//                       body are left out of the book.
//                       400 { error: <any text> } (JSON) when key, title or author is
//                       missing or an empty string, or when there is no JSON body at all.
//                       Check this first: { "key": "dune" } with no title gets 400, even
//                       though the key is taken.
//                       409 { error: <any text> } (JSON) when a book with that key is
//                       already in the books. The books stay as they were.
//
//   GET /books/:key     200 with the book (JSON), so the Location of a new book leads to it
//                       404 { error: <any text> } (JSON) when no book has that key
//
// Examples:
//   POST /books { "key": "ubik", "title": "Ubik", "author": "Philip K. Dick" }
//       201, Location: /books/ubik
//   POST /books { "key": "dune", "title": "Dune", "author": "Frank Herbert" }   409
//   POST /books { "key": "ubik", "title": "" }                                   400
//   GET /books/hobbit                                                            404
//
// Run the tests: npm test -- 24-node-on-the-server/rest-and-status-codes

import express from 'express';

export function createApp(books) {
    const app = express();

    // Your code here

    return app;
}
