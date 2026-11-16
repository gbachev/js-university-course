// api.mjs from the lecture, a tiny API on port 3001 that does not send any CORS header.
// Start it from the repository folder with
// node 19-events/web-security/examples/01-api.js and stop it with Ctrl+C.
// Then open 02-fetch-books.html through npm run serve: another origin.
import { createServer } from "node:http";

const server = createServer((request, response) => {
    console.log(request.method, request.url, request.headers.origin);
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify([{ title: "Dune" }]));
});

server.listen(3001);
// After the page asks for the books:
// GET /books http://localhost:8080
