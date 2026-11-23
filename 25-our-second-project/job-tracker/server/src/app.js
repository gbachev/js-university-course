import { existsSync } from 'node:fs';
import { join } from 'node:path';
import express from 'express';
import {
    checkOrigin,
    errorHandler,
    notFound,
    requireJsonBody,
} from './middleware.js';
import { authRoutes } from './routes/auth.js';

// The front end after `npm run build` in client/.
const CLIENT_DIST = join(import.meta.dirname, '..', '..', 'client', 'dist');

// Builds the app without starting it: server.js listens on the configured port,
// the tests on a free one, each with its own database.
export function createApp({ db, config }) {
    const app = express();
    app.disable('x-powered-by');

    // In production a proxy of the host takes the https request and passes it to
    // us over plain http, adding X-Forwarded-Proto: https. Trusting that one hop
    // makes req.protocol say https, so checkOrigin compares the same origin the
    // browser sees.
    if (config.nodeEnv === 'production') {
        app.set('trust proxy', 1);
    }

    app.use(checkOrigin);
    app.use(requireJsonBody);
    // Notes can be 5,000 characters; 32 KB leaves room for them and no more.
    app.use(express.json({ limit: '32kb' }));

    app.use('/api/auth', authRoutes({ db, config }));

    // In production, the same server sends the built front end, so the whole app
    // is one Node service on one origin. In development, Vite serves it instead.
    if (existsSync(CLIENT_DIST)) {
        // Vite puts a hash in these file names, so they can be cached for a year.
        app.use(
            '/assets',
            express.static(join(CLIENT_DIST, 'assets'), {
                maxAge: '1y',
                immutable: true,
            }),
        );
        app.use(express.static(CLIENT_DIST));
    }

    app.use(notFound);
    app.use(errorHandler(config));

    return app;
}
