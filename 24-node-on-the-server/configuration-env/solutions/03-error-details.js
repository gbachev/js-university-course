import express from 'express';

export function createApp(config) {
    const app = express();

    // express() read process.env.NODE_ENV when it created the app; config has the last word.
    app.set('env', config.nodeEnv);

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

    // Four parameters, so Express knows it handles errors. Last, after everything else.
    app.use((err, req, res, next) => {
        if (res.headersSent) {
            return next(err);
        }
        const body = { error: 'Something went wrong on our side' };
        if (config.nodeEnv !== 'production') {
            body.detail = err.message;
        }
        res.status(500).json(body);
    });

    return app;
}
