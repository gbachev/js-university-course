// Task 2: cors() for one origin, with cookies
// Lecture: CORS from the Server Side
//
// Our reading-list page runs on its own origin, config.pageOrigin, such as
// 'http://localhost:5173', and calls this API with credentials: 'include', so the browser
// sends its cookies. The app mounts cors() with its defaults, which answer
// Access-Control-Allow-Origin: *, and the browser does not accept '*' together with cookies.
// Give cors() three options, so that:
//
//   - Access-Control-Allow-Origin is config.pageOrigin, on every answer, never '*';
//   - Access-Control-Allow-Credentials is 'true', on every answer;
//   - a preflight (OPTIONS) gets 204 with Access-Control-Max-Age: 600, and its
//     Access-Control-Allow-Methods still includes DELETE.
//
// Read the origin from the config you were given; the tests try more than one.
// The rest must keep working: GET /books answers 200 with the books.
//
// Examples (config: { pageOrigin: 'http://localhost:5173' }):
//   GET /books      Origin: http://localhost:5173   200, Allow-Origin: http://localhost:5173,
//                                                    Allow-Credentials: true
//   OPTIONS /books  Origin: http://localhost:5173   204, the same two headers, Max-Age: 600
//
// Run the tests: npm test -- 24-node-on-the-server/cors-on-the-server

import express from 'express';
import cors from 'cors';

export function createApp(config) {
    const app = express();

    // Your code here: the options of cors()
    app.use(cors());

    app.get('/books', (req, res) => {
        res.json([{ key: 'dune', title: 'Dune', author: 'Frank Herbert' }]);
    });

    return app;
}
