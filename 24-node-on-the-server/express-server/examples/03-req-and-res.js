// What a handler reads from req and sets on res. Start it, then call
// curl -i "http://localhost:3000/status?verbose=1" from a second terminal.
import express from 'express';

const app = express();

app.get('/status', (req, res) => {
    console.log(req.method, req.path, req.url); // GET /status /status?verbose=1

    res.set('Cache-Control', 'no-store');
    res.status(503).json({ status: 'starting' });
});

app.listen(3000, (error) => {
    if (error) {
        throw error;
    }
    console.log('Listening on http://localhost:3000');
});
