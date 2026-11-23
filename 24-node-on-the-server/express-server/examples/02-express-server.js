// The same server in Express 5. Start it from the repository folder and call it with
// curl -i http://localhost:3000/books, or open the address in the browser.
// node --watch restarts it on every save. Stop it with Ctrl+C.
import express from 'express';

const books = [
    { title: 'Dune', author: 'Frank Herbert' },
    { title: 'Emma', author: 'Jane Austen' },
];

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the books API');
});

app.get('/books', (req, res) => {
    res.json(books);
});

app.listen(3000, (error) => {
    if (error) {
        throw error;
    }
    console.log('Listening on http://localhost:3000');
});
