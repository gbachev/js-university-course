# TypeScript for JavaScript Developers

Code for the lecture *TypeScript for JavaScript Developers* (section 20, Tooling) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-reading-list/` - the reading list in TypeScript, with its own `package.json` and `tsconfig.json`:
  - `src/books.ts` - `withShipping(price: number)`, called with the string `'10'`: the one error `npm run typecheck` reports
  - `src/inference.ts` - an inferred `number` and an annotated parameter
  - `src/types.ts` - the `Book` type alias and the `ReadingList` interface
  - `src/reading-list.ts` - a book without its `read` property, the error kept quiet with `@ts-expect-error`
  - `src/narrowing.ts` - union types narrowed with `===`, `in`, `typeof` and `instanceof`
  - `src/any-vs-unknown.ts` - `JSON.parse()` read as `any` and as `unknown`
  - `src/generics.ts` - `first<T>()` and `Array<Book>`
  - `src/count-read.js` - plain JavaScript with JSDoc types and `// @ts-check`
  - `tsconfig.json` - the lecture's settings, plus `"checkJs": true` so `tsc` checks `count-read.js` too

We install its packages inside its folder; the rest of the repository stays without dependencies.

```bash
cd 20-tooling/typescript/examples/01-reading-list
npm install
npm run typecheck             # 1 error in src/books.ts:6, exit code 1
node src/narrowing.ts         # Node strips the types and runs the file
node src/books.ts             # 15, then 105: Node never checks the types
node src/count-read.js        # 1
```

Running `.ts` files needs Node 22.18 or newer, where type stripping is on by default. To see the errors the lecture talks about, we delete an `@ts-expect-error` line and run `npm run typecheck` again. `npm install` writes a `package-lock.json` and a `node_modules` folder into the example; Git ignores `node_modules`, and we can delete both when we are done.

## Tasks
The tasks are plain JavaScript with JSDoc types and `// @ts-check`, so they run in Node with nothing installed. The tests check what the code does at run time; an editor such as VS Code shows the type errors as we type.

1. **Possibly null** (`tasks/01-year-text.js`) - fix a function that crashes on a book with no year, by narrowing `number | null`
2. **Is it a book?** (`tasks/02-is-book.js`) - write a type guard that checks unknown JSON before we treat it as a book
3. **Saved settings** (`tasks/03-load-settings.js`) - read settings saved as JSON, checking each `unknown` value and falling back to defaults

Run the tests with `npm test -- 20-tooling/typescript`. They fail until the task is solved. Compare with `solutions/` after you try.
