// Task 1: One book and a filtered list
// Lecture: Routing and JSON APIs
//
// Write createApp(books), which builds an Express app and returns it, without calling
// listen() (the tests start it). Every book has a key, a title and an author:
//   { key: 'dune', title: 'Dune', author: 'Frank Herbert' }
// The app answers two routes, always with JSON:
//
//   GET /books/:key  200 with the book whose key matches
//                    404 { error: <any text> } when no book has that key
//
//   GET /books       200 with the books, filtered by two optional query parameters:
//                    ?author=  only the books by exactly this author
//                    ?limit=   at most this many books, the first ones
//                    Both together: filter by author first, then take the first ones.
//                    400 { error: <any text> } when limit is not a whole number from 1
//                    (abc, 0, 1.5, -2, or empty as in ?limit=) or when author appears
//                    more than once (?author=a&author=b gives an array).
//                    A limit above the number of books gives all of them.
//
// Examples, with the three books of the tests:
//   GET /books/emma                          200 { "key": "emma", "title": "Emma", ... }
//   GET /books/hobbit                        404 { "error": "No book with the key hobbit" }
//   GET /books?author=Jane%20Austen&limit=1  200 [{ "key": "emma", ... }]
//   GET /books?limit=0                       400 { "error": "..." }
//
// Run the tests: npm test -- 24-node-on-the-server/routing-and-json

import express from 'express';

export function createApp(books) {
    const app = express();

    // Your code here

    return app;
}
