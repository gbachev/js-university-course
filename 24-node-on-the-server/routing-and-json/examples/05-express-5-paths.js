// Express 5 path syntax: which paths it accepts and which ones throw when the route is added.
// Runs on its own: it adds the routes, calls two of them on port 0 and stops.
import express from 'express';

const app = express();

for (const path of ['/books/*', '/books/:key?']) {
    try {
        app.get(path, (req, res) => res.json(req.params));
    } catch (error) {
        console.log(`${error.name}: ${error.message.split(';')[0]}`);
    }
}
// TypeError: Missing parameter name at index 8: /books/*
// TypeError: Unexpected ? at index 11: /books/:key?

// A wildcard needs a name, and gives an array of the path segments.
app.get('/files/*rest', (req, res) => {
    res.json(req.params);
});

// An optional part goes in braces.
app.get('/shelves{/:key}', (req, res) => {
    res.json(req.params);
});

const server = app.listen(0, async (error) => {
    if (error) {
        throw error;
    }
    const url = `http://localhost:${server.address().port}`;

    console.log(await (await fetch(`${url}/files/covers/dune.jpg`)).json()); // { rest: [ 'covers', 'dune.jpg' ] }
    console.log(await (await fetch(`${url}/shelves`)).json()); // {}
    console.log(await (await fetch(`${url}/shelves/classics`)).json()); // { key: 'classics' }

    server.close();
});
