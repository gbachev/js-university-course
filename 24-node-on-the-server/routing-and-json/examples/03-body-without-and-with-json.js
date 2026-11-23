// What req.body holds without express.json(), with it, with a body that is not JSON,
// and with broken JSON. Runs on its own: it starts on port 0, calls itself and stops.
// The broken JSON also prints a SyntaxError in the terminal; the server keeps running.
import express from 'express';

const app = express();

app.post('/before', (req, res) => {
    res.json({ body: String(req.body) });
});

app.use(express.json());

app.post('/after', (req, res) => {
    res.json({ body: req.body ?? 'undefined' });
});

const server = app.listen(0, async (error) => {
    if (error) {
        throw error;
    }
    const url = `http://localhost:${server.address().port}`;
    const json = { 'Content-Type': 'application/json' };

    const before = await fetch(`${url}/before`, { method: 'POST', headers: json, body: '{"key":"ubik"}' });
    console.log(await before.json()); // { body: 'undefined' }

    const after = await fetch(`${url}/after`, { method: 'POST', headers: json, body: '{"key":"ubik"}' });
    console.log(await after.json()); // { body: { key: 'ubik' } }

    // curl -d without a Content-Type header sends application/x-www-form-urlencoded
    const form = await fetch(`${url}/after`, { method: 'POST', body: new URLSearchParams({ key: 'ubik' }) });
    console.log(await form.json()); // { body: 'undefined' }

    const broken = await fetch(`${url}/after`, { method: 'POST', headers: json, body: '{"key":' });
    console.log(broken.status, broken.headers.get('content-type')); // 400 text/html; charset=utf-8

    server.close();
});
