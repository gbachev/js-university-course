// In Express 5, an async handler that throws (a rejected promise) goes to the error handler:
// the client gets a 500, the terminal shows the error, and the server keeps running.
// Runs on its own: it starts on port 0, calls itself twice and stops.
import express from 'express';

const app = express();

app.get('/broken', async () => {
    throw new Error('The database is down');
});

app.get('/books', (req, res) => {
    res.json([{ title: 'Dune', author: 'Frank Herbert' }]);
});

const server = app.listen(0, async (error) => {
    if (error) {
        throw error;
    }
    const url = `http://localhost:${server.address().port}`;

    const broken = await fetch(`${url}/broken`);
    console.log(broken.status, broken.statusText); // 500 Internal Server Error

    const books = await fetch(`${url}/books`);
    console.log(books.status); // 200

    server.close();
});
