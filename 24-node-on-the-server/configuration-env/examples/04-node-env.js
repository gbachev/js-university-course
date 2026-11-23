// What Express's own error handler sends for a bug, depending on NODE_ENV.
// The terminal shows the error with its stack in both runs; only NODE_ENV=test hides it.
// Runs on its own: it starts on port 0, calls itself once and stops. Run it twice:
//   node 04-node-env.js
//   NODE_ENV=production node 04-node-env.js
import express from 'express';

const app = express();
console.log('env:', app.get('env'));

app.get('/broken', async () => {
    throw new Error('Connection to db.internal:5432 refused');
});

const server = app.listen(0, async (error) => {
    if (error) {
        throw error;
    }
    const response = await fetch(`http://localhost:${server.address().port}/broken`);
    const page = await response.text();

    // The first line of the page the client gets.
    console.log(response.status, page.match(/<pre>([^<]*)/)[1]);
    server.close();
});
