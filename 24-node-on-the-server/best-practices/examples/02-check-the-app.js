// Calls the app of app.js once for each habit and prints what comes back. Runs on its own:
// it starts the app on a free port with the development config, calls it and stops it.
import { start } from '../../lib/start.js';
import { createApp } from './app.js';
import { readConfig } from './config.js';

const server = await start(createApp(readConfig({})));
const url = `${server.url}/books`;
const json = { 'Content-Type': 'application/json' };

// No X-Powered-By, and a Cache-Control chosen for this route.
const list = await fetch(url);
console.log(list.status, list.headers.get('x-powered-by')); // 200 null
console.log(list.headers.get('cache-control')); // public, max-age=60

const health = await fetch(`${server.url}/health`);
console.log(health.headers.get('cache-control')); // no-store

// The allow-list: our page gets the header, another origin does not.
const ours = await fetch(url, { headers: { Origin: 'http://localhost:8080' } });
console.log(ours.headers.get('access-control-allow-origin')); // http://localhost:8080
const other = await fetch(url, { headers: { Origin: 'https://evil.example' } });
console.log(other.headers.get('access-control-allow-origin')); // null

// 201 with a Location, 409 for a taken key, 400 for a value that is not text.
const ubik = JSON.stringify({ key: 'ubik', title: 'Ubik', author: 'Philip K. Dick' });
const created = await fetch(url, { method: 'POST', headers: json, body: ubik });
console.log(created.status, created.headers.get('location')); // 201 /books/ubik
const again = await fetch(url, { method: 'POST', headers: json, body: ubik });
console.log(again.status, await again.json()); // 409 { error: 'A book with the key ubik already exists' }
const numbers = JSON.stringify({ key: 'emma', title: 42, author: 'Jane Austen' });
const wrong = await fetch(url, { method: 'POST', headers: json, body: numbers });
console.log(wrong.status, await wrong.json()); // 400 { error: 'key, title and author must be non-empty strings' }

// Broken JSON, a body over our 10 KB limit and an unknown path, all in the same shape.
const broken = await fetch(url, { method: 'POST', headers: json, body: '{"key":"ubik",' });
console.log(broken.status, await broken.json()); // 400 { error: 'The body is not valid JSON' }
const big = JSON.stringify({ key: 'big', title: 'x'.repeat(20_000), author: 'Jane Austen' });
const tooLarge = await fetch(url, { method: 'POST', headers: json, body: big });
console.log(tooLarge.status, await tooLarge.json()); // 413 { error: 'request entity too large' }
const missing = await fetch(`${server.url}/authors`);
console.log(missing.status, await missing.json()); // 404 { error: 'No route for GET /authors' }

await server.close();

// In production, a missing CORS_ORIGINS stops the start instead of falling back.
try {
    readConfig({ NODE_ENV: 'production', PORT: 'abc' });
} catch (error) {
    console.log(error.message);
}
// Cannot start the server:
// - PORT must be a whole number from 0 to 65535, not "abc"
// - CORS_ORIGINS is missing
