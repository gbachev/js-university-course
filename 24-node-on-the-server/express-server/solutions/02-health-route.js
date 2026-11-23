import express from 'express';

export function createApp({ ready }) {
    const app = express();
    app.disable('x-powered-by');

    app.get('/health', (req, res) => {
        res.set('Cache-Control', 'no-store');

        if (ready) {
            res.json({ status: 'ok' });
        } else {
            res.status(503).json({ status: 'starting' });
        }
    });

    return app;
}
