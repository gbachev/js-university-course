// What fetch() does with each status code: it fulfills on 201, 409, 404 and 500 alike,
// and only response.ok tells them apart. Runs on its own: it starts the books API of
// books-app.js on a free port, calls it and stops it. The 500 also prints the error
// in the terminal, because our error handler logs it there.
import { start } from '../../lib/start.js';
import { app } from './books-app.js';

const server = await start(app);
const url = server.url;
const json = { 'Content-Type': 'application/json' };
const ubik = JSON.stringify({ key: 'ubik', title: 'Ubik', author: 'Philip K. Dick' });

const created = await fetch(`${url}/books`, { method: 'POST', headers: json, body: ubik });
console.log(created.ok, created.status); // true 201
console.log(created.headers.get('location')); // /books/ubik

const again = await fetch(`${url}/books`, { method: 'POST', headers: json, body: ubik });
console.log(again.ok, again.status); // false 409
console.log(await again.json()); // { error: 'A book with the key ubik already exists' }

const removed = await fetch(`${url}/books/ubik`, { method: 'DELETE' });
console.log(removed.status, (await removed.text()).length); // 204 0

const missing = await fetch(`${url}/books/ubik`);
console.log(missing.ok, missing.status); // false 404

const broken = await fetch(`${url}/broken`);
console.log(broken.ok, broken.status); // false 500
console.log(await broken.json()); // { error: 'Something went wrong on our side' }

await server.close();
