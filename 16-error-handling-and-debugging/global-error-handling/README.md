# Global Error Handling

Code for the lecture *Global Error Handling* (section 16, Error Handling and Debugging) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-error-event.html` with `examples/01-error-event.js` - the `error` event on `window` and what its `ErrorEvent` tells us
- `examples/02-window-onerror.html` with `examples/02-window-onerror.js` - the older `window.onerror` with its five arguments
- `examples/03-unhandled-rejection.html` with `examples/03-unhandled-rejection.js` - `unhandledrejection` and `event.reason`
- `examples/04-global-handler.html` with `examples/04-global-handler.js` - a handler that reports every error with `sendBeacon()` and shows one message, with two buttons that break the page
- `examples/05-uncaught-exception.js` - `uncaughtException` in Node: log, then exit with code 1
- `examples/06-unhandled-rejection.js` - `unhandledRejection` in Node

The pages run in the browser: we start `npm run serve` from the repository folder, open a page from the list it prints and open the console. The Node examples run with `node 16-error-handling-and-debugging/global-error-handling/examples/05-uncaught-exception.js` and end with exit code 1 on purpose.

## Tasks
1. **The error report** (`tasks/01-the-error-report.js`) - build the report a global handler sends, also for a `null` error or a string reason
2. **One message only** (`tasks/02-one-message-only.js`) - a handler that reports every error but shows the user one message

Run the tests with `npm test -- 16-error-handling-and-debugging/global-error-handling`. They fail until the task is solved. Compare with `solutions/` after you try.
