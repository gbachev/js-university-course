# CORS from the Server Side

Code for the lecture *CORS from the Server Side* (section 24, Node.js on the Server) of the JavaScript course at gbachev.com.

Express and the `cors` package are installed once for the whole section: run `npm install` inside `24-node-on-the-server` first (see the section's README).

## Examples
- `examples/config.js` - `readConfig(env)` reads the port and the allowed origins from `CORS_ORIGINS`, a list separated by commas; a module, used by examples 01 and 02
- `examples/allow-origins.js` - `allowOrigins(origins)`, the CORS headers by hand: an allow-list, `Vary: Origin`, and a preflight answered with 204; a module, used by example 01
- `examples/01-server-by-hand.js` - the books API with `allowOrigins()` mounted before `express.json()` and the routes
- `examples/02-server-with-cors.js` - the same API with the `cors` package: `cors({ origin: config.origins, maxAge: 600 })`
- `examples/03-cors-options.js` - what `cors()` sends with each kind of `origin` option (none, a string, an array, a function) and with `credentials: true`
- `examples/04-cors-after-routes.js` - `cors()` mounted after a route: the preflight still passes, but the `POST` answer has no `Access-Control-Allow-Origin`, although the book was added
- `examples/05-fetch-books.html` - a page on port 8080 that reads the books from the API on port 3000 and adds one with a JSON `POST`, which needs a preflight

We run the examples from this folder. The servers keep running until we press Ctrl+C; examples 03 and 04 start their own app on a free port and stop by themselves:

```bash
cd 24-node-on-the-server/cors-on-the-server/examples

node 01-server-by-hand.js
# Listening on http://localhost:3000 for http://localhost:8080, http://127.0.0.1:8080

node 02-server-with-cors.js
node 03-cors-options.js
node 04-cors-after-routes.js
```

With a server running, we can send what a browser sends, from a second terminal:

```bash
curl -i http://localhost:3000/books -H "Origin: http://localhost:8080"

curl -i -X OPTIONS http://localhost:3000/books -H "Origin: http://localhost:8080" \
    -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type"
```

### The page on another origin

Example 05 needs two terminals. In the first one we start one of the two servers on port 3000, from the repository folder:

```bash
node 24-node-on-the-server/cors-on-the-server/examples/01-server-by-hand.js
```

In the second one we run `npm run serve` and open `24-node-on-the-server/cors-on-the-server/examples/05-fetch-books.html` from the address it prints. Port 8080 and port 3000 are two origins, so this is a cross-origin call. The page lists `GET /books: 200, 1 books` and `POST /books: 201, Emma`, and the Network panel shows the `OPTIONS` request before the `POST`.

The default allow-list holds both `http://localhost:8080` and `http://127.0.0.1:8080`: they are two different origins, and the page's origin is the address we typed. To see the block, we stop the server and start it again with an allow-list that leaves our page out:

```bash
CORS_ORIGINS=http://localhost:5173 node 24-node-on-the-server/cors-on-the-server/examples/01-server-by-hand.js
```

After a reload, both lines end in `TypeError Failed to fetch` (Chrome's wording), and the console explains the block. The `GET` reached the server; the `POST` never left the browser, because its preflight got no `Access-Control-Allow-Origin`.

## Tasks
1. **CORS by hand, with an allow-list** (`tasks/01-allow-list.js`) - `allowOrigins(origins)` echoes an origin on the list, adds `Vary: Origin`, and answers a preflight with 204, the allowed methods and headers and `Max-Age: 600`
2. **`cors()` for one origin, with cookies** (`tasks/02-cors-with-credentials.js`) - give `cors()` the page's origin from the config, `credentials: true` and `maxAge: 600`, so no answer says `*`
3. **`cors()` in the right place** (`tasks/03-cors-first.js`) - move `cors()` from the end of a given app to the start, so the routes, the preflight and the JSON 404 all carry `Access-Control-Allow-Origin`

Each task exports a `createApp()` function; its tests start it on a free port with `lib/start.js` and send the `Origin` header and the `OPTIONS` request from Node, the way a browser would. Run them with `npm test -- 24-node-on-the-server/cors-on-the-server`. They fail until the task is solved. Compare with `solutions/` after you try.
