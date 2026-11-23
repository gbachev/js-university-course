// Task 3: Hashed files kept for a year
// Lecture: HTTP Caching: Cache-Control, ETag and 304
//
// createApp() serves the folder http-caching/public with express.static(): index.html,
// and in public/assets the file books-C4f9xQ2a.js, whose name holds a hash of its content,
// the way vite build names its files. Right now every file gets Express's default,
// Cache-Control: public, max-age=0. Change createApp() so that:
//
//   - the files under /assets get  Cache-Control: public, max-age=31536000, immutable
//     (one year, in seconds), so a browser does not ask for them again for up to a year;
//   - / and /index.html keep  Cache-Control: public, max-age=0,  with no immutable,
//     because the next deploy changes index.html under the same name;
//   - a file that is not there, such as /assets/books-B0ld0ld0.js, still gets 404;
//   - the ETag stays on: asking for /assets/books-C4f9xQ2a.js again with its ETag in
//     If-None-Match gets 304 Not Modified, with no body.
//
// The tests split each Cache-Control at the commas and compare the directives in any
// order, so each answer must have exactly the directives above.
//
// Run the tests: npm test -- 24-node-on-the-server/http-caching

import { join } from 'node:path';
import express from 'express';

export function createApp() {
    const publicDir = join(import.meta.dirname, '..', 'public');
    const app = express();

    app.use(express.static(publicDir));

    return app;
}
