// The books server, with its settings from config.js. From this folder:
//   cp .env.example .env    (then fill in BOOKS_API_KEY)
//   node --env-file=.env 03-server.js
// Stop it with Ctrl+C.
import express from 'express';
import { readConfig } from './config.js';

let config;
try {
    config = readConfig(process.env);
} catch (error) {
    console.error(error.message);
    process.exit(1);
}

const app = express();

app.get('/books', (req, res) => {
    res.json([{ key: 'dune', title: 'Dune', author: 'Frank Herbert' }]);
});

app.listen(config.port, (error) => {
    if (error) {
        throw error;
    }
    console.log(`Listening on http://localhost:${config.port} (${config.nodeEnv})`);
});
