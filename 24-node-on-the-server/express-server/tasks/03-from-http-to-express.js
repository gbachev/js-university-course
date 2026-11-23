// Task 3: From http to Express
// Lecture: An HTTP Server with Express
//
// createHttpServer() below is a working server written with Node's http module. Write
// createApp(), an Express app that gives the same answers, and return it without calling
// listen(). Leave createHttpServer() as it is: the tests run their checks on both.
//   GET /        200 { "name": "Books API", "version": 1 }
//   GET /books   200 the books array below
//   anything else  404
// The http version compares request.url, so GET /books?sort=title gets a 404 there.
// The Express app answers it with the books, because Express routes on the path only.
//
// Run the tests: npm test -- 24-node-on-the-server/express-server

import http from 'node:http';
import express from 'express';

const books = [
    { title: 'Dune', author: 'Frank Herbert' },
    { title: 'Emma', author: 'Jane Austen' },
];

export function createHttpServer() {
    return http.createServer((request, response) => {
        if (request.method === 'GET' && request.url === '/') {
            response.statusCode = 200;
            response.setHeader('Content-Type', 'application/json; charset=utf-8');
            response.end(JSON.stringify({ name: 'Books API', version: 1 }));
        } else if (request.method === 'GET' && request.url === '/books') {
            response.statusCode = 200;
            response.setHeader('Content-Type', 'application/json; charset=utf-8');
            response.end(JSON.stringify(books));
        } else {
            response.statusCode = 404;
            response.setHeader('Content-Type', 'text/plain; charset=utf-8');
            response.end(`Cannot ${request.method} ${request.url}`);
        }
    });
}

export function createApp() {
    const app = express();

    // Your code here

    return app;
}
