# Best Practices

Code for the lecture *Best Practices* (section 24, Node.js on the Server) of the JavaScript course at gbachev.com.

Express and the `cors` package are installed once for the whole section: run `npm install` inside `24-node-on-the-server` first (see the section's README).

## Examples
- `examples/app.js` - the books API with the habits of the section, in order: `createApp(config)` never listens; `X-Powered-By` off; `cors()` with a named allow-list, then `express.json()` with a 10 KB limit, then the routes, the JSON 404 and the error handler last; every body value checked; 201 with a `Location`, 400 and 409; `Cache-Control` chosen per route; one `{ error }` shape and no stack trace to the client
- `examples/config.js` - `readConfig(env)` checks every setting once and throws one error that lists every problem; in production a missing `CORS_ORIGINS` stops the start instead of falling back to the development origins
- `examples/01-server.js` - reads the config, stops with exit code 1 when it is wrong, and starts the app on its port
- `examples/02-check-the-app.js` - calls the app once for each habit and prints what comes back, then shows the production config error

We run the examples from this folder. Example 01 keeps running until we press Ctrl+C; example 02 starts the app on a free port and stops by itself:

```bash
cd 24-node-on-the-server/best-practices/examples

node --watch 01-server.js
# Listening on http://localhost:3000 (development)

node 02-check-the-app.js

NODE_ENV=production node 01-server.js
# Cannot start the server:
# - CORS_ORIGINS is missing

NODE_ENV=production CORS_ORIGINS=https://books.example node 01-server.js
# Listening on http://localhost:3000 (production)
```

With `--watch`, Node restarts the server whenever we save `app.js`, `config.js` or `01-server.js`.
