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

    app.get('/', (req, res) => {
        res.json({ name: 'Books API', version: 1 });
    });

    app.get('/books', (req, res) => {
        res.json(books);
    });

    return app;
}
