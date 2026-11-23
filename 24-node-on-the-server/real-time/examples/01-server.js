// The books API with its event stream, and the page in ../public. From this folder:
//   node 01-server.js
// Then open http://localhost:3000 in two tabs, or call it with curl. Stop it with Ctrl+C.
import { join } from 'node:path';
import express from 'express';
import { app } from './books-app.js';

app.use(express.static(join(import.meta.dirname, '..', 'public')));

app.listen(3000, (error) => {
    if (error) {
        throw error;
    }
    console.log('Listening on http://localhost:3000');
});
