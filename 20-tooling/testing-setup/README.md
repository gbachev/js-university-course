# Testing Setup

Code for the lecture *Testing Setup* (section 20, Tooling) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-reading-list/` - the reading list with Vitest, with its own `package.json`:
  - `src/state.js` - `addBook` and `removeBook`, two pure functions
  - `tests/state.test.js` - `describe`, `test` and `expect`, arrange, act and assert, and the common matchers
  - `src/api.js` - `searchBooks`, which calls `fetch`
  - `tests/api.test.js` - a fake `fetch` with `vi.fn()` and `vi.stubGlobal`, and the test for a failing server we add after the coverage report

We install its packages inside its folder; the rest of the repository stays without dependencies.

```bash
cd 20-tooling/testing-setup/examples/01-reading-list
npm install
npm test                      # 2 test files, 5 tests passed
npx vitest                    # watch mode: q to quit
npx vitest run --coverage     # the coverage report, written to coverage/
```

To see the failure of the lecture, we start `npx vitest`, change the last line of `addBook` to `return [...books, book];` and save. To see the coverage report with line 8 of `api.js` uncovered, we delete the last test of `tests/api.test.js` and run the coverage again.

`npm install` writes a `package-lock.json` and a `node_modules` folder into the example; Git ignores `node_modules` and `coverage`, and we can delete them when we are done.

## Tasks
1. **The coverage column** (`tasks/01-coverage-percent.js`) - work out a coverage percentage, cut off at two decimals as the report does
2. **Our own vi.fn()** (`tasks/02-fake-function.js`) - write a fake function that records its calls
3. **toBe or toEqual?** (`tasks/03-to-equal.js`) - compare arrays and objects by their contents, the check behind `toEqual`

Run the tests with `npm test -- 20-tooling/testing-setup`. They fail until the task is solved. Compare with `solutions/` after you try.
