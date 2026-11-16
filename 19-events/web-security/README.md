# Web Security Basics

Code for the lecture *Web Security Basics* (section 19, Events) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-api.js` - the lecture's `api.mjs`, a tiny API on port 3001 that sends no CORS header
- `examples/02-fetch-books.html` - a page on another origin fetches the books: the server answers, the browser keeps the response from our code
- `examples/03-api-allows-our-origin.js` - the same API with an `Access-Control-Allow-Origin` header, so the page reads `Dune`
- `examples/04-csp-blocks-inline-code.html` - with `script-src 'self'` the `onerror` code of an injected image never runs

The CORS examples need two terminals. In the first one we start the API from the repository folder:

```bash
node 19-events/web-security/examples/01-api.js
```

In the second one we run `npm run serve` and open `19-events/web-security/examples/02-fetch-books.html` from the address it prints. The console shows `TypeError Failed to fetch`, and the API's terminal shows the request it answered. Then we stop the API with Ctrl+C, start `03-api-allows-our-origin.js` the same way and reload the page: now it logs `Dune`. This API allows `http://localhost:8080`, the address `npm run serve` prints by default; if it prints another port, we change the origin in the file.

Example 4 runs in the browser too: open it through `npm run serve` and look at the console, which reports the blocked inline code.

The hidden CSRF form from the lecture is not here: it posts to a shop that does not exist.

## Tasks
1. **Titles stay text** (`tasks/01-safe-titles.js`) - fix a row built with `innerHTML` so a title like `<img onerror>` shows as plain text
2. **Is the session cookie safe?** (`tasks/02-session-cookie.js`) - find which of `HttpOnly`, `Secure` and `SameSite` a `Set-Cookie` header lacks
3. **Build the CSP header** (`tasks/03-csp-header.js`) - turn a policy object into a `Content-Security-Policy` value, quoting the keywords
4. **Does this fetch need a preflight?** (`tasks/04-needs-preflight.js`) - decide from the method and headers whether the browser asks first with `OPTIONS`

Task 1 runs in the browser: run `npm run serve`, open `tasks/01-safe-titles.html` and read the checks at the bottom of it. Tasks 2, 3 and 4 run in Node: run the tests with `npm test -- 19-events/web-security`. They fail until the task is solved. Compare with `solutions/` after you try, or add `?solutions` to the address of the task page to run the checks against the solution.
