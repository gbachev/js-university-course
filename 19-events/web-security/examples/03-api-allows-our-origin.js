// The same API, now with an Access-Control-Allow-Origin header that lets the page from
// npm run serve read its answer. Start it with
// node 19-events/web-security/examples/03-api-allows-our-origin.js
// (stop 01-api.js first, both use port 3001). If npm run serve uses another port,
// change the origin below to the address it prints.
import { createServer } from "node:http";

const server = createServer((request, response) => {
    console.log(request.method, request.url, request.headers.origin);
    response.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify([{ title: "Dune" }]));
});

server.listen(3001);
// After the page asks for the books:
// GET /books http://localhost:8080
