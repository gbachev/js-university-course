// The tiny books server with Node's own http module, routing by hand.
// Start it from the repository folder, call it from a second terminal with
// curl -i http://localhost:3000/books, and stop it with Ctrl+C.
import http from 'node:http';

const books = [
    { title: 'Dune', author: 'Frank Herbert' },
    { title: 'Emma', author: 'Jane Austen' },
];

const server = http.createServer((request, response) => {
    if (request.method === 'GET' && request.url === '/') {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain; charset=utf-8');
        response.end('Welcome to the books API');
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

server.listen(3000, () => {
    console.log('Listening on http://localhost:3000');
});
