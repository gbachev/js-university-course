# Workers

Code for the lecture *Workers* (section 22, Performance and Memory) of the JavaScript course at gbachev.com.

## Examples
Workers do not load from `file://`, so every example runs through the server.

- `examples/01-busy-main-thread.html` - sorting 200,000 books on the main thread makes the Like click wait
- `examples/02-dedicated-worker.html` - the same sort in a module worker, `sort-worker.js`, while the Like click runs
- `examples/03-errors-and-terminate.html` - an error in the worker arrives as an `error` event, and `terminate()` stops it
- `examples/04-messages-are-copies.html` - a function cannot be copied (`DataCloneError`), a transferred `ArrayBuffer` leaves our side empty (with `size-worker.js`)
- `examples/05-shared-worker.html` - one `SharedWorker`, `list-worker.js`, holds one reading list for every open tab

Run `npm run serve` from the repository folder, open a page from the address it prints and look at the console. Each page loads the `.js` file with the same name. In examples 1 and 2 we click Sort and then Like right away; the times differ by machine. Example 3 fails on purpose, so the console also shows the worker's error in red. For example 5 we open the page in a second tab too.

## Tasks
1. **The worker's sort** (`tasks/01-sort-in-the-worker.js`) - write the sort a worker runs, by title or by year, without changing the books it gets
2. **Answer the message** (`tasks/02-answer-the-message.js`) - write the function that answers a worker's search and count messages
3. **Ask the worker** (`tasks/03-ask-the-worker.js`) - turn one message and its answer into a promise (browser)

Tasks 1 and 2 are plain functions, so we run their tests with `npm test -- 22-performance-and-memory/workers`. Task 2 also has a page, `tasks/02-answer-the-message.html`, that runs our function in a real worker. Task 3 runs in the browser: run `npm run serve`, open `tasks/03-ask-the-worker.html` and read the checks at the bottom of it. They fail until the task is solved. Compare with `solutions/` after you try, or add `?solutions` to the address of a page to run the solution.
