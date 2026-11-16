# Linters and Formatters

Code for the lecture *Linters and Formatters* (section 20, Tooling) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-shop/` - the shop project of the lecture, with its own `package.json`:
  - `eslint.config.js` - the flat config: `js.configs.recommended`, browser globals, three extra rules and `eslint-config-prettier` last
  - `.prettierrc` and `.prettierignore` - four spaces and single quotes; Prettier skips `dist` and `package-lock.json`
  - `src/cart.js` - the cart function with five problems for ESLint to find
  - `src/books.js` - the file written in a hurry, for Prettier to format
  - `package.json` - the `lint` and `format` scripts, written by npm with two spaces, so Prettier wants to format it too

We install its packages inside its folder; the rest of the repository stays without dependencies.

```bash
cd 20-tooling/linters-and-formatters/examples/01-shop
npm install
npx eslint .               # 5 problems (4 errors, 1 warning), exit code 1
npx eslint . --fix         # changes let item to const item, 4 problems left
npx prettier --check .     # package.json, src/books.js and src/cart.js need formatting
npx prettier --write .     # formats them
npm run lint               # the same as npx eslint .
```

`--fix` and `--write` change the files. To get the lecture's versions back, we run `git checkout -- .` inside the folder. `npm install` writes a `package-lock.json` and a `node_modules` folder; Git ignores `node_modules`, and we can delete both when we are done.

## Tasks
1. **Pass or fail?** (`tasks/01-exit-code.js`) - work out ESLint's exit code from its problems, with an optional `--max-warnings`
2. **Which rules win?** (`tasks/02-final-rules.js`) - merge the rules of a flat config, where later entries override earlier ones
3. **Our own eqeqeq** (`tasks/03-loose-equality.js`) - find every `==` and `!=` in a file, by line and column

Run the tests with `npm test -- 20-tooling/linters-and-formatters`. They fail until the task is solved. Compare with `solutions/` after you try.
