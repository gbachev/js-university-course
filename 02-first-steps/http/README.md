# HTTP: How the Web Works

Code for the lecture *HTTP: How the Web Works* (section 2, First Steps) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-server.cjs` - the tiny Node.js server from the lecture, which answers every request with three headers and a line of text

The lecture saves the server as `server.js`. Here it is a `.cjs` file because it loads the `http` module with `require()`, and the `package.json` of this repository makes Node treat `.js` files as ES modules (we meet both kinds of module in the Modules section).

Start it from the repository folder. It keeps running until we press Ctrl+C:

```bash
node 02-first-steps/http/examples/01-server.cjs
# Listening on http://localhost:4000
```

In a second terminal, we send it requests with curl. `-i` prints the response headers before the body, and the first terminal prints the method and the URL of each request:

```bash
curl -i http://localhost:4000
curl -i -X POST http://localhost:4000/orders
```

Opening http://localhost:4000 in the browser works too: the Network tab of DevTools shows the same status code and headers.
