# The Fetch API

Code for the lecture *The Fetch API* (section 17, Asynchronous JavaScript) of the JavaScript course at gbachev.com.

## Examples
The examples talk to [JSONPlaceholder](https://jsonplaceholder.typicode.com), a free fake API, so they need an internet connection.

- `examples/01-get-request.js` - a GET request, the status, `ok` and the JSON body
- `examples/02-fetch-rejects-on-network-errors.js` - a 404 fulfills, an unknown host rejects
- `examples/03-http-error.js` - one `getJson()` helper that throws an `HttpError`
- `examples/04-post-json.js` - sending JSON with a POST and its `Content-Type` header
- `examples/05-abort-controller.js` - a search that cancels the previous request with `AbortController`
- `examples/06-abort-signal-timeout.js` - a timeout with `AbortSignal.timeout()`

Run one with `node 17-asynchronous-javascript/fetch-api/examples/01-get-request.js` from the repository folder.

## Tasks
The tests replace `fetch()` with a fake, so they need no network.

1. **Load a product** (`tasks/01-load-a-product.js`) - fetch a product and turn failed statuses into clear errors
2. **Place an order** (`tasks/02-place-an-order.js`) - send an order as JSON with a POST request
3. **Do not wait forever** (`tasks/03-do-not-wait-forever.js`) - give up on a slow request with `AbortSignal.timeout()`

Run the tests with `npm test -- 17-asynchronous-javascript/fetch-api`. They fail until the task is solved. Compare with `solutions/` after you try.
