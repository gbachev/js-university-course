# Try/Catch/Finally

Code for the lecture *Try/Catch/Finally* (section 16, Error Handling and Debugging) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-the-syntax.js` - broken JSON in `try`, a message in `catch`, and the app keeps going
- `examples/02-the-error-object.js` - the `name` and `message` of a caught `TypeError`
- `examples/03-optional-catch-binding.js` - `catch` without a variable in `isValidJson()`
- `examples/04-finally.js` - `finally` resets the loading flag even when `try` and `catch` return
- `examples/05-try-finally.js` - `try...finally` with no `catch`: the cleanup runs, the error goes on
- `examples/06-return-in-finally.js` - a `return` in `finally` replaces the result and swallows the error
- `examples/07-rethrow.js` - handle a `SyntaxError`, rethrow anything else
- `examples/08-timer-callback.js` - an error in a timer callback escapes the outer `try`, so the `try...catch` goes inside the callback
- `examples/09-no-try-needed.js` - optional chaining and `??` instead of a `try` for a missing nested value

Run one with `node 16-error-handling-and-debugging/try-catch-finally/examples/01-the-syntax.js` from the repository folder.

## Tasks
1. **Saved preferences** (`tasks/01-saved-preferences.js`) - read saved JSON preferences, with defaults when the text is broken
2. **Stop the spinner** (`tasks/02-stop-the-spinner.js`) - fix a spinner that never stops after a broken address, with `finally`
3. **Only what we expect** (`tasks/03-only-what-we-expect.js`) - give 0 for broken JSON and rethrow every other error

Run the tests with `npm test -- 16-error-handling-and-debugging/try-catch-finally`. They fail until the task is solved. Compare with `solutions/` after you try.
