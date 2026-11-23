// Starts the books API of app.js on the port from config.js. From this folder:
//   node --watch 01-server.js
//   NODE_ENV=production CORS_ORIGINS=https://books.example node 01-server.js
// The first restarts the server whenever we save a file it imports. Stop it with Ctrl+C.
import { createApp } from './app.js';
import { readConfig } from './config.js';

let config;
try {
    config = readConfig(process.env);
} catch (error) {
    console.error(error.message);
    process.exit(1);
}

const app = createApp(config);

app.listen(config.port, (error) => {
    if (error) {
        throw error;
    }
    console.log(`Listening on http://localhost:${config.port} (${config.nodeEnv})`);
});
