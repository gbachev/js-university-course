// Starts the Job Tracker API. From the server folder:
//   npm start      (node --env-file-if-exists=.env src/server.js)
//   npm run dev    (the same, and restarts when we save a file)
// Stop it with Ctrl+C.
import { createApp } from './app.js';
import { readConfig } from './config.js';
import { migrate, openDatabase } from './db.js';

let config;
try {
    config = readConfig(process.env);
} catch (error) {
    console.error(error.message);
    process.exit(1);
}

const db = openDatabase(config.databasePath);
migrate(db);

const app = createApp({ db, config });

const server = app.listen(config.port, (error) => {
    if (error) {
        throw error;
    }
    console.log(
        `Listening on http://localhost:${config.port} (${config.nodeEnv})`,
    );
});

// The host stops a service with SIGTERM, Ctrl+C sends SIGINT. Either way we stop
// taking new requests, let the open ones finish, then close the database so
// SQLite can tidy up its -wal file.
function shutDown(signal) {
    console.log(`${signal}: shutting down`);
    server.close(() => {
        db.close();
    });
}

process.once('SIGTERM', shutDown);
process.once('SIGINT', shutDown);
