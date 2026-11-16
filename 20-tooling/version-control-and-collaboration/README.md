# Version Control and Collaboration

Code for the lecture *Version Control and Collaboration* (section 20, Tooling) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-reading-list/` - the reading list project of the lecture, with its own `package.json`:
  - `.gitignore` - `node_modules/`, `dist/`, `coverage/`, `.env` and `.DS_Store`
  - `.husky/pre-commit` - the hook that runs `npx lint-staged`
  - `package.json` - the `prepare`, `lint` and `format` scripts and the `lint-staged` config
  - `eslint.config.js` and `.prettierrc` - the setup from *Linters and Formatters*
  - `src/books.js` - the book list, and `src/stats.js` with the `book.read == true` the hook stops
- `examples/02-merge-conflict/books.js.txt` - `src/books.js` during the conflict, with Git's marker lines. It ends in `.txt` because the markers are not valid JavaScript.

The hooks need a repository of their own, so we copy the first example out of the course folder before we try it (inside the course folder, Husky only prints `.git can't be found` and sets up no hooks):

```bash
cp -R 20-tooling/version-control-and-collaboration/examples/01-reading-list ~/reading-list
cd ~/reading-list
git init -b main
npm install                    # the prepare script sets up the Husky hooks
git add .gitignore .husky .prettierrc eslint.config.js package.json src/books.js
git commit -m "Add the book list"
git add src/stats.js
git commit -m "Count the read books"
# ✖ eslint --fix: ... 3:45  error  Expected '===' and instead saw '=='  eqeqeq
# husky - pre-commit script failed (code 1)
```

`git status` then shows `src/stats.js` still staged. We fix the line to `book.read === true` (or just `book.read`), and the commit goes through.

## Tasks
1. **Resolve a merge conflict** (`tasks/01-resolve-conflict.js`) - remove Git's marker lines and keep our version or the incoming one
2. **Does Git ignore it?** (`tasks/02-gitignore.js`) - check a path against the lines of a `.gitignore`
3. **What lint-staged runs** (`tasks/03-lint-staged.js`) - match the staged files to the patterns of a lint-staged config

Run the tests with `npm test -- 20-tooling/version-control-and-collaboration`. They fail until the task is solved. Compare with `solutions/` after you try.
