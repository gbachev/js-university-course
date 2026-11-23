// Starts the app on port 0, so the system picks a free port, calls it once and stops it.
// This is how the tests of this folder run an app. Runs on its own: no second terminal.
import express from 'express';

const app = express();

app.get('/books', (req, res) => {
    res.json([{ title: 'Dune', author: 'Frank Herbert' }]);
});

const server = app.listen(0, async (error) => {
    if (error) {
        throw error;
    }
    const { port } = server.address();
    console.log(port > 0); // true

    const response = await fetch(`http://localhost:${port}/books`);
    console.log(await response.json()); // [ { title: 'Dune', author: 'Frank Herbert' } ]

    server.close(() => {
        console.log('Server closed'); // Server closed
    });
});
