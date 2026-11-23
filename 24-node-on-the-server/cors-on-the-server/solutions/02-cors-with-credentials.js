import express from 'express';
import cors from 'cors';

export function createApp(config) {
    const app = express();

    // One named origin: the browser rejects '*' when the request carries cookies.
    app.use(cors({ origin: config.pageOrigin, credentials: true, maxAge: 600 }));

    app.get('/books', (req, res) => {
        res.json([{ key: 'dune', title: 'Dune', author: 'Frank Herbert' }]);
    });

    return app;
}
