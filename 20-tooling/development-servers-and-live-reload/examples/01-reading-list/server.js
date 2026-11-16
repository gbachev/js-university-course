import { createServer } from 'node:http';

const books = [
    { title: 'Dune', author: 'Frank Herbert' },
    { title: 'Emma', author: 'Jane Austen' },
];

createServer((request, response) => {
    if (request.url === '/api/books') {
        response.setHeader('Content-Type', 'application/json');
        response.end(JSON.stringify(books));
        return;
    }
    response.statusCode = 404;
    response.end();
}).listen(3000);
