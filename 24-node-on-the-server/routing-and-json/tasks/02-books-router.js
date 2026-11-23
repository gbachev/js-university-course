// Task 2: A books router
// Lecture: Routing and JSON APIs
//
// Write createApp(books), which builds an Express app and returns it, without calling
// listen(). Put the books routes in an express.Router() and mount it with
// app.use('/books', router). The app reads JSON bodies with express.json().
// The routes change the books array the app was given, and answer:
//
//   GET /books          200 with the books array (JSON)
//
//   POST /books         201 with the new book { key, title, author } (JSON), added to the
//                       end of the books. Other fields of the body are left out of it.
//                       400 { error: <any text> } (JSON) when key, title or author is
//                       missing or an empty string, or when there is no JSON body at all
//                       (a POST without Content-Type: application/json leaves req.body
//                       undefined: answer 400 there too, not 500).
//                       A body that is broken JSON gets 400 from Express itself, which
//                       also prints a SyntaxError in the test output: that is expected.
//
//   DELETE /books/:key  204 with an empty body, and the book is gone from the books
//                       404 { error: <any text> } (JSON) when no book has that key
//
// The tests check the answers and the books array. They cannot see whether we used a
// router, so that part is up to us. They never send a key that is already taken.
//
// Examples:
//   POST /books { "key": "ubik", "title": "Ubik", "author": "Philip K. Dick" }  201
//   POST /books { "key": "ubik", "title": "" }                                   400
//   DELETE /books/dune                                                           204
//   DELETE /books/hobbit                                                         404
//
// Run the tests: npm test -- 24-node-on-the-server/routing-and-json

import express from 'express';

export function createApp(books) {
    const app = express();

    // Your code here

    return app;
}
