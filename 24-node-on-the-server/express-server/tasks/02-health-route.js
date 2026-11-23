// Task 2: A health route
// Lecture: An HTTP Server with Express
//
// A hosting platform calls GET /health every few seconds and sends traffic to our app
// only while it answers 200. Write createApp({ ready }), which builds an Express app and
// returns it, without calling listen(). GET /health answers:
//   200 { "status": "ok" }        when ready is true
//   503 { "status": "starting" }  when ready is false
// Both answers carry the header Cache-Control: no-store, so nobody keeps an old answer.
// The app also stops sending the X-Powered-By header, which tells everyone that the
// server runs Express.
//
// Examples:
//   createApp({ ready: true })   GET /health  200 { "status": "ok" }
//   createApp({ ready: false })  GET /health  503 { "status": "starting" }
//
// Run the tests: npm test -- 24-node-on-the-server/express-server

import express from 'express';

export function createApp({ ready }) {
    const app = express();

    // Your code here

    return app;
}
