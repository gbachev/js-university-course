// server.cjs from the lecture. It uses require(), so it is saved as a .cjs file:
// the repository's package.json switches .js files to ES modules.
// Start it with node, send it a request from a second terminal with
// curl -i http://localhost:4000, and stop it with Ctrl+C.
const http = require('node:http');

const server = http.createServer((request, response) => {
    console.log(request.method, request.url);

    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain; charset=utf-8');
    response.setHeader('Cache-Control', 'no-store');
    response.setHeader('Set-Cookie', 'theme=dark');
    response.end('Hello from Node.js!');
});

server.listen(4000);
console.log('Listening on http://localhost:4000');
