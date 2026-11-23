# HTTP Caching: Cache-Control, ETag and 304

Code for the lecture *HTTP Caching: Cache-Control, ETag and 304* (section 24, Node.js on the Server) of the JavaScript course at gbachev.com.

Express is installed once for the whole section: run `npm install` inside `24-node-on-the-server` first (see the section's README).

## Examples
- `examples/01-server.js` - the books API with its own `Cache-Control` per route (`public, max-age=60`, `private, no-cache`, `no-store`), and the files of `public/` with `express.static()`: the hashed files in `public/assets` for a year with `immutable`, `index.html` with the default `max-age=0`
- `examples/02-conditional-requests.js` - Node's `fetch()` sends the `ETag` back in `If-None-Match` and gets the 304 with no body; without `cache: 'no-cache'` it adds `Cache-Control: no-cache` and gets 200; all four requests reach the server despite `max-age=60`
- `examples/03-own-etag.js` - a strong `ETag` from a version number, checked with `req.fresh` before the body is built; a `POST` raises the version
- `examples/04-etag-setting.js` - the `ETag` of `res.json()` with `app.set('etag', ...)` set to `'weak'` (the default), `'strong'` and `false`
- `public/index.html` and `public/assets/books-C4f9xQ2a.js` - a page, served by example 01, whose script fetches `/me/books` twice

We run the examples from this folder. Example 01 keeps running until we press Ctrl+C; examples 02 to 04 start their own app on a free port and stop by themselves:

```bash
cd 24-node-on-the-server/http-caching/examples

node 01-server.js
# Listening on http://localhost:3000

node 02-conditional-requests.js
node 03-own-etag.js
node 04-etag-setting.js
```

With example 01 running, from a second terminal:

```bash
curl -i http://localhost:3000/books
curl -i http://localhost:3000/books -H 'If-None-Match: W/"53-dUin9zkXsYn5hm1vRrPZ7w1uHKc"'
curl -i http://localhost:3000/books -H 'If-None-Match: W/"53-dUin9zkXsYn5hm1vRrPZ7w1uHKc"' -H "Cache-Control: no-cache"
curl -I http://localhost:3000/assets/books-C4f9xQ2a.js
```

The second call gets `304 Not Modified` with no body, the third the full 200.

### The page and the browser cache

With example 01 running, we open `http://localhost:3000` and the Network panel. The page lists `Round 1: 200, 1 books` and `Round 2: 200, 1 books`. In the panel, and in the server's terminal, the second `GET /me/books` carries `If-None-Match` and our server answers 304: the browser hands the stored copy to `fetch()` with the status 200. When we open the address again in a new tab, the server's terminal shows `GET /` with an `If-None-Match` (its `max-age=0`) and no request at all for the hashed script.

## Tasks
1. **The right `Cache-Control` for each route** (`tasks/01-cache-per-route.js`) - `public, max-age=300` for `GET /books`, `private, no-cache` for `GET /me/books` and `no-store` for `GET /health`, while the `ETag` and its 304 keep working
2. **Our own `ETag` from a version number** (`tasks/02-version-etag.js`) - `GET /books/:key` sends the strong `ETag` `"v1"`, `"v2"`, ... and answers 304 with no body when `If-None-Match` matches it, alone, in a list or with `W/`
3. **Hashed files kept for a year** (`tasks/03-hashed-assets.js`) - `/assets` gets `public, max-age=31536000, immutable`, while `/` and `/index.html` keep `public, max-age=0`

Each task exports a `createApp()` function; its tests start it on a free port with `lib/start.js` and call it with Node's `fetch()`, which has no HTTP cache, so the tests see each 304 itself. They pass `cache: 'no-cache'` with their `If-None-Match`, so Node does not add `Cache-Control: no-cache`. Run them with `npm test -- 24-node-on-the-server/http-caching`. They fail until the task is solved. Compare with `solutions/` after you try.
