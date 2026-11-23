import { join } from 'node:path';
import express from 'express';

export function createApp() {
    const publicDir = join(import.meta.dirname, '..', 'public');
    const app = express();

    // First, so the hashed files get their year before the general express.static() sees them.
    app.use('/assets', express.static(join(publicDir, 'assets'), { maxAge: '1y', immutable: true }));
    app.use(express.static(publicDir));

    return app;
}
