// The books API with a live stream of new books at GET /events. 01-server.js and
// 02-read-stream.js import this app and start it.
import express from 'express';

const books = [
    { title: 'Dune', author: 'Frank Herbert' },
    { title: 'Emma', author: 'Jane Austen' },
];
const clients = new Set();

export const app = express();
app.use(express.json());

// One message per book. Its id is the book's place in the list: Dune is 1, Emma is 2.
function sendBook(res, id) {
    res.write(`event: book-added\nid: ${id}\ndata: ${JSON.stringify(books[id - 1])}\n\n`);
}

app.get('/events', (req, res) => {
    res.set('Content-Type', 'text/event-stream');
    res.set('Cache-Control', 'no-cache');
    res.write(`data: ${books.length} books on the server\n\n`);

    const lastId = Number(req.get('Last-Event-ID') ?? 0);
    for (let id = lastId + 1; id <= books.length; id += 1) {
        sendBook(res, id);
    }

    clients.add(res);
    console.log(`A client joined after id ${lastId}, ${clients.size} open`);

    req.on('close', () => {
        clients.delete(res);
        console.log(`A client left, ${clients.size} open`);
    });
});

app.post('/books', (req, res) => {
    const { title, author } = req.body ?? {};
    if (!title || !author) {
        return res.status(400).json({ error: 'A book needs a title and an author' });
    }

    books.push({ title, author });
    for (const client of clients) {
        sendBook(client, books.length);
    }
    res.status(201).json({ title, author });
});
