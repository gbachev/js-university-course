# Real-Time: WebSockets and Server-Sent Events

Code for the lecture *Real-Time: WebSockets and Server-Sent Events* (section 24, Node.js on the Server) of the JavaScript course at gbachev.com. The lecture is optional.

Express is installed once for the whole section: run `npm install` inside `24-node-on-the-server` first (see the section's README). Server-Sent Events need no other package.

## Examples
- `examples/books-app.js` - the books API with `GET /events`, an event stream: the headers `Content-Type: text/event-stream` and `Cache-Control: no-cache`, a first unnamed message, one `book-added` message with an `id` per book after the `Last-Event-ID` the client sends, and a set of open clients that `req.on('close')` cleans up. `POST /books` sends the new book to every open client
- `examples/01-server.js` - starts that app on port 3000 and serves the page in `public/`
- `examples/02-read-stream.js` - reads the stream with Node's `fetch()` and `for await...of` over `response.body`, the way the tests do, then asks again with `Last-Event-ID: 1` and gets only Emma
- `examples/03-websocket-sketch.js` - WebSockets in brief: a server that needs the `ws` package, and Node's built-in `WebSocket` client. The course does not install `ws`, so without it the file only prints how to try it
- `public/index.html` and `public/live.js` - a page, served by example 01, that listens with `EventSource` and adds every new book to its list

We run the examples from this folder. Example 01 keeps running until we press Ctrl+C; example 02 starts the app on a free port and stops by itself:

```bash
cd 24-node-on-the-server/real-time/examples

node 01-server.js
# Listening on http://localhost:3000

node 02-read-stream.js
node 03-websocket-sketch.js
```

With example 01 running, we watch the stream in a second terminal (`-N` prints each message as it arrives) and add a book from a third:

```bash
curl -i -N http://localhost:3000/events

curl -X POST http://localhost:3000/books -H "Content-Type: application/json" -d '{"title":"Ubik","author":"Philip K. Dick"}'
```

The first terminal prints `event: book-added`, `id: 3` and the book, and the stream stays open until we press Ctrl+C.

### The page

With example 01 running, we open `http://localhost:3000` in two tabs. Each lists Dune and Emma. When we add a book with the `curl -X POST` above, both tabs show it at once. When we stop the server, the status line says `Connection lost, readyState 0`: the browser keeps trying. When we start the server again, the page reconnects by itself a few seconds later, and the server's terminal prints `A client joined after id 3`: the browser sent the last id it saw in `Last-Event-ID`.

To try the WebSocket sketch, from `24-node-on-the-server`:

```bash
npm install --no-save ws
node real-time/examples/03-websocket-sketch.js
# Someone says: Who has read Dune?
# Socket closed
```

`--no-save` keeps `ws` out of `package.json`, and the next plain `npm install` removes it again.

## Tasks
1. **An event stream of the book count** (`tasks/01-event-stream.js`) - `GET /events` answers 200 with `text/event-stream; charset=utf-8` and `no-cache`, no `Content-Length`, the first message `data: 2 books`, and stays open
2. **Broadcast a new book** (`tasks/02-broadcast.js`) - after `POST /books`, every open client gets `event: book-added`, `id: 3` and the book as JSON; a refused POST sends nothing
3. **Forget a client that left** (`tasks/03-remove-client.js`) - `req.on('close')` removes the client, so `GET /stats` counts 2, then 1, then 0

Each task exports a `createApp()` function; its tests start it on a free port with `lib/start.js` and read the stream with `lib/event-stream.js`, which uses Node's `fetch()` and closes every stream at the end. Run them with `npm test -- 24-node-on-the-server/real-time`. They fail until the task is solved. Compare with `solutions/` after you try.
