# An HTTP Server with Express

Code for the lecture *An HTTP Server with Express* (section 24, Node.js on the Server) of the JavaScript course at gbachev.com.

Express is installed once for the whole section: run `npm install` inside `24-node-on-the-server` first (see the section's README).

## Examples
- `examples/01-http-server.js` - the tiny books server with Node's `http` module: routing by method and URL, the JSON header and the 404 all by hand
- `examples/02-express-server.js` - the same server in Express 5, with `app.get()`, `res.send()`, `res.json()` and `app.listen()`
- `examples/03-req-and-res.js` - `req.method`, `req.path` and `req.url`, a header with `res.set()` and a status code with `res.status()`
- `examples/04-client.js` - calls the server of example 02 with `fetch()` from Node
- `examples/05-port-zero-and-close.js` - starts an app on port 0, reads the port from `server.address()`, calls it once and stops it with `server.close()`
- `examples/06-async-error.js` - an async handler that throws: Express 5 answers 500 and the server keeps running

Examples 01-03 are servers. Start one from the repository folder; it keeps running until we press Ctrl+C. With `node --watch` it restarts every time we save the file:

```bash
node --watch 24-node-on-the-server/express-server/examples/02-express-server.js
# Listening on http://localhost:3000
```

In a second terminal, we call it with curl (`-i` prints the status line and the headers), open http://localhost:3000/books in the browser, or run the client of example 04:

```bash
curl -i http://localhost:3000/books
curl -i http://localhost:3000/authors
node 24-node-on-the-server/express-server/examples/04-client.js
```

The three servers all use port 3000, so we run one at a time: a second one stops with `EADDRINUSE`. Examples 05 and 06 run on their own and stop by themselves.

## Tasks
1. **The books list** (`tasks/01-books-list.js`) - answer `GET /books` and `GET /books/count` with JSON
2. **A health route** (`tasks/02-health-route.js`) - answer `GET /health` with 200 or 503, set `Cache-Control: no-store` and drop the `X-Powered-By` header
3. **From http to Express** (`tasks/03-from-http-to-express.js`) - rewrite a given `http.createServer()` server in Express, with the same answers

Every task exports a `createApp()` function that returns the app without calling `listen()`. The tests start it on a free port with `lib/start.js`, call it with `fetch()` and stop it again. Run them with `npm test -- 24-node-on-the-server/express-server`. They fail until the task is solved. Compare with `solutions/` after you try.
