# Continuous Integration Basics

Code for the lecture *Continuous Integration Basics* (section 20, Tooling) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-ci-workflow/.github/workflows/ci.yml` - the reading list's first workflow: on a push to `main` and on pull requests, read-only token, checkout, Node from `.nvmrc` (in the same folder, 26) with the npm cache, then `npm ci`, lint, test and build
- `examples/02-node-matrix/.github/workflows/ci.yml` - the same job with a matrix that runs it on Node 24 and 26

GitHub runs only the workflows in the `.github/workflows` folder at the root of a repository, so these two never run here. To try one, we copy its `.github` folder (and `.nvmrc` for the first one) into the root of our own project on GitHub, next to a `package.json` with `lint`, `test` and `build` scripts and a committed `package-lock.json`, for example the Reading List of the next section, and push. The run shows up in the **Actions** tab of the repository.

## Tasks
1. **Fix the workflow** (`tasks/01-fix-the-workflow.js`) - correct the events, the token permissions, the Node version and the steps of a workflow written as an object
2. **Which steps run?** (`tasks/02-run-the-steps.js`) - run a job's commands in order and stop at the first non-zero exit code
3. **The checks of a matrix** (`tasks/03-matrix.js`) - list the checks a pull request shows for a matrix, such as `check (24)` and `check (26)`

Run the tests with `npm test -- 20-tooling/continuous-integration`. They fail until the task is solved. Compare with `solutions/` after you try.
