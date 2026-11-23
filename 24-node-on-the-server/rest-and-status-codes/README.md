# REST Conventions and Status Codes

Code for the lecture *REST Conventions and Status Codes* (section 24, Node.js on the Server) of the JavaScript course at gbachev.com.

Express is installed once for the whole section: run `npm install` inside `24-node-on-the-server` first (see the section's README).

## Examples
- `examples/books-app.js` - the books API with the status codes of the lecture: 201 with a `Location` header, 204, 400, 404 and 409 for a key that is taken, a JSON 404, and an error handler that answers broken JSON with 400 and our bugs with 500, without the stack trace; a module, used by examples 01 and 02
- `examples/01-server.js` - starts the books API on port 3000, for curl
- `examples/02-fetch-and-status.js` - what `fetch()` does with 201, 409, 204, 404 and 500: it fulfills on all of them, and `response.ok` tells them apart
- `examples/03-error-handler-arguments.js` - Express finds an error handler by its four parameters; with three, it skips it for errors and calls it for ordinary requests

Example 01 is a server. Start it from the repository folder; it keeps running until we press Ctrl+C:

```bash
node --watch 24-node-on-the-server/rest-and-status-codes/examples/01-server.js
# Listening on http://localhost:3000
```

In a second terminal, we call it with curl:

```bash
# 201 with a Location header, then 409 for the same key
curl -i http://localhost:3000/books -H "Content-Type: application/json" \
    -d '{"key":"ubik","title":"Ubik","author":"Philip K. Dick"}'

# broken JSON: 400 with our JSON error
curl -i http://localhost:3000/books -H "Content-Type: application/json" -d '{"key":"ubik",'

# a bug: 500 with our JSON error; the stack trace goes to the server's terminal only
curl -i http://localhost:3000/broken

# 204 with no body
curl -i -X DELETE http://localhost:3000/books/ubik
```

The books live in an array, so a restart brings back the first three. Examples 02 and 03 run on their own and stop by themselves; 02 prints the error of the 500 in the terminal, because our error handler logs it there.

## Tasks
1. **Creating a book, with the right status codes** (`tasks/01-create-with-status.js`) - `POST /books` with 201 and a `Location` header, 400 for a bad body and 409 for a key that is taken, and `GET /books/:key` that the `Location` leads to
2. **A JSON error handler** (`tasks/02-json-error-handler.js`) - add an error handler to a given app: errors of `express.json()` keep their 400 or 413, anything else is 500, all as JSON and without the stack trace
3. **Resources, not verbs** (`tasks/03-resources-not-verbs.js`) - rewrite `/getBook`, `/updateBook` and `/removeBook` as `GET`, `PUT`, `PATCH` and `DELETE` on `/books/:key`, with 200, 204, 400 and 404

Every task exports a `createApp()` function that returns the app without calling `listen()`. The tests start it on a free port with `lib/start.js`, call it with `fetch()` and stop it again. Run them with `npm test -- 24-node-on-the-server/rest-and-status-codes`. They fail until the task is solved. Compare with `solutions/` after you try.
