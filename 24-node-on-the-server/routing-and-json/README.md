# Routing and JSON APIs

Code for the lecture *Routing and JSON APIs* (section 24, Node.js on the Server) of the JavaScript course at gbachev.com.

Express is installed once for the whole section: run `npm install` inside `24-node-on-the-server` first (see the section's README).

## Examples
- `examples/01-params-and-query.js` - one book by its key with `/books/:key` and `req.params`, and a list filtered by `?author=` and `?limit=` from `req.query`, with the values converted and checked
- `examples/02-json-body.js` - `express.json()` and the routes that change the books: `POST` (201), `PUT`, `PATCH` and `DELETE` (204), with a 404 for a missing book
- `examples/03-body-without-and-with-json.js` - what `req.body` holds without `express.json()`, with it, for a body that is not JSON, and for broken JSON (400)
- `examples/books-router.js` - the books routes grouped in an `express.Router()`; a module, used by example 04
- `examples/04-middleware-order.js` - the whole app in the order that works: a logger, `express.json()`, the router at `/books` and a JSON 404 last
- `examples/05-express-5-paths.js` - Express 5 path syntax: `/books/*` and `/books/:key?` throw, `/files/*rest` and `/shelves{/:key}` work

Examples 01, 02 and 04 are servers. Start one from the repository folder; it keeps running until we press Ctrl+C:

```bash
node --watch 24-node-on-the-server/routing-and-json/examples/02-json-body.js
# Listening on http://localhost:3000
```

In a second terminal, we call it with curl:

```bash
# example 01
curl http://localhost:3000/books/dune
curl "http://localhost:3000/books?author=Jane%20Austen&limit=1"

# example 02
curl -i http://localhost:3000/books -H "Content-Type: application/json" \
    -d '{"key":"ubik","title":"Ubik","author":"Philip K. Dick"}'
curl -i -X DELETE http://localhost:3000/books/dune

# example 04: each request prints a line in the server's terminal
curl http://localhost:3000/books/dune
curl http://localhost:3000/authors
```

The servers all use port 3000, so we run one at a time. The books live in an array, so a restart brings back the first three. Examples 03 and 05 run on their own and stop by themselves.

## Tasks
1. **One book and a filtered list** (`tasks/01-one-book-and-filters.js`) - answer `GET /books/:key` with the book or a 404, and `GET /books` filtered by `?author=` and `?limit=`, with a 400 for a bad value
2. **A books router** (`tasks/02-books-router.js`) - `GET`, `POST` and `DELETE` on an `express.Router()` mounted at `/books`, with `express.json()`, 201, 204, 400 and 404
3. **A logger and a JSON 404** (`tasks/03-logger-and-404.js`) - add a request logger and a JSON 404 handler to a given app, each in the right place

Every task exports a `createApp()` function that returns the app without calling `listen()`. The tests start it on a free port with `lib/start.js`, call it with `fetch()` and stop it again. Run them with `npm test -- 24-node-on-the-server/routing-and-json`. They fail until the task is solved. Compare with `solutions/` after you try.
