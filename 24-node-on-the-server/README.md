# 24. Node.js on the Server

We write the server side ourselves: a small JSON API for books with Express 5, called from `curl`, the browser and tests in Node.

This section needs one install, because Express and the `cors` package are not part of Node. We run it once inside this folder; the tasks then run from the repository folder as usual:

```bash
cd 24-node-on-the-server
npm install
cd ..
npm test -- 24-node-on-the-server
```

1. Section Overview (no code)
2. [An HTTP Server with Express](express-server) - from `http.createServer()` to Express 5: `app.get()`, `res.json()` and `app.listen()`
3. [Routing and JSON APIs](routing-and-json) - route parameters, the query string, `express.json()`, routers and the order of middleware
4. [REST Conventions and Status Codes](rest-and-status-codes) - resources and methods, the common status codes, JSON error bodies and an error handler
5. [Configuration with process.env](configuration-env) - `process.env`, `node --env-file` and keeping secrets out of the repository
6. [CORS from the Server Side](cors-on-the-server) - the CORS headers by hand, then the `cors` package
7. [HTTP Caching: Cache-Control, ETag and 304](http-caching) - `Cache-Control` per route, `ETag`, `If-None-Match` and 304 Not Modified, hashed files with `express.static()`
8. [Real-Time: WebSockets and Server-Sent Events](real-time) - Server-Sent Events with Express, WebSockets in brief (optional)
9. Best Practices (no code)
10. Section Review (no code)
