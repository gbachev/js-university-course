// Reads our event stream with Node's fetch(), the way the tests of this lecture do, and
// asks again with a Last-Event-ID. Runs on its own on a free port.
import { start } from '../../lib/start.js';
import { app } from './books-app.js';

const server = await start(app);
const decoder = new TextDecoder();

// Collects the text of the stream until it holds `count` messages. The break stops the
// loop, cancels the body and closes the connection, so the server sees the client leave.
async function readMessages(response, count) {
    let text = '';
    for await (const chunk of response.body) {
        text += decoder.decode(chunk, { stream: true });
        if (text.split('\n\n').length > count) {
            break;
        }
    }
    return text;
}

const first = await fetch(`${server.url}/events`);
console.log(first.status, first.headers.get('content-type')); // 200 text/event-stream; charset=utf-8
console.log(first.headers.get('content-length')); // null
console.log(await readMessages(first, 3));
// data: 2 books on the server
//
// event: book-added
// id: 1
// data: {"title":"Dune","author":"Frank Herbert"}
//
// event: book-added
// id: 2
// data: {"title":"Emma","author":"Jane Austen"}

const again = await fetch(`${server.url}/events`, { headers: { 'Last-Event-ID': '1' } });
console.log(await readMessages(again, 2));
// data: 2 books on the server
//
// event: book-added
// id: 2
// data: {"title":"Emma","author":"Jane Austen"}

await server.close();
console.log('Server closed');
