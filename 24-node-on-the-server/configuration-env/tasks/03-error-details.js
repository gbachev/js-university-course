// Task 3: Error details outside production
// Lecture: Configuration with process.env
//
// createApp(config) below gets the object that readConfig() returns, such as
// { port: 3000, nodeEnv: 'development', apiKey: 'dev-key' }. Its routes and its JSON 404
// are done. A bug still gets Express's own HTML page: try GET /books/stats. Express also
// prints those errors in the test output until our handler answers them.
// Make two changes:
//
// 1. The app's 'env' setting comes from config.nodeEnv, not from process.env:
//    app.get('env') returns config.nodeEnv, even when process.env.NODE_ENV says something
//    else.
//
// 2. Add an error-handling middleware, in the right place. It answers every error with
//    500 and JSON (Content-Type: application/json):
//      - when config.nodeEnv is 'production': { "error": <any text> } and nothing else.
//        The answer must not show the error's message or its stack trace: the client
//        gets neither "prices.internal" nor a line of the stack.
//      - for any other nodeEnv ('development', 'test'): { "error": <any text>,
//        "detail": <the error's message> }, so we see the bug while we work on it.
//    Logging is left out of this task.
//
// Read only the config you were given, never process.env.
// The rest must keep working: GET /books answers 200 with the books, and an unknown path
// still gets the JSON 404 of the app.
//
// Examples (GET /books/stats):
//   nodeEnv 'development'   500 { "error": "...", "detail": "Connection to prices.internal:5432 refused" }
//   nodeEnv 'production'    500 { "error": "..." }
//
// Run the tests: npm test -- 24-node-on-the-server/configuration-env

import express from 'express';

export function createApp(config) {
    const app = express();

    // Your code here: the 'env' setting

    app.get('/books', (req, res) => {
        res.json([{ key: 'dune', title: 'Dune', author: 'Frank Herbert' }]);
    });

    // A bug on purpose: the prices server is not there.
    app.get('/books/stats', async () => {
        throw new Error('Connection to prices.internal:5432 refused');
    });

    app.use((req, res) => {
        res.status(404).json({ error: `No route for ${req.method} ${req.path}` });
    });

    // Your code here: the error handler

    return app;
}
