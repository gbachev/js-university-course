# JavaScript course: examples and tasks

The code for the JavaScript course at [gbachev.com](https://gbachev.com). Every lecture that teaches code has a folder here with:

- `examples/` - the code from the lecture, ready to run
- `tasks/` - tasks to solve, each with tests that tell us when it works
- `solutions/` - one solution for each task, to compare with after we try

The folders follow the course: one folder per section (`04-operators`), one per lecture inside it (`04-operators/comparison`). Every section folder has a README with its lectures in order.

## Getting the code

You need [Node.js](https://nodejs.org/) 22.12 or newer (the lecture *Environment setup* shows how to install it, and *A few words on NPM and NVM* how to switch versions). Nothing else: the examples and tasks use only what Node and the browser give us.

```bash
git clone https://github.com/gbachev/js-university-course.git
cd js-university-course
```

No Git yet? Use **Code > Download ZIP** on GitHub and unzip it.

## Running the examples

Most examples run in Node:

```bash
node 04-operators/comparison/examples/01-strict-equality.js
```

The DOM and Events lectures run in the browser. Pages that load modules do not work from `file://`, so we start the small server that comes with the repo and open the page it lists:

```bash
npm run serve
# Serving the course folder at http://localhost:8080/
```

## Solving the tasks

Every task file starts with a comment that explains the task, followed by a function for us to finish:

```js
export function addToCart(total, price, quantity) {
    // Your code here
}
```

The tests call the function with some values and check what it gives back, so we write our code between the curly braces and give the answer back with `return`. The word `export` only lets the test file use our function: functions get their own section (10) and `export` its lecture in the Modules section (12). Then we run the tests:

```bash
npm test -- 04-operators/comparison      # the tasks of one lecture
npm test -- 04-operators                 # a whole section
npm test                                 # everything
```

The tests fail until the task is solved. Browser tasks show their checks at the bottom of the page.

Try each task before opening `solutions/`. A solution is one way to solve it, not the only one: if our tests pass, our answer is right. `npm run test:solutions` runs the same tests against the solutions.

## The project

`21-our-first-project/reading-list` is the Reading List app the *Our First Project* section builds, lecture by lecture. It has its own README and its own `npm install`.

## License

All rights reserved. You may download and run this code to follow the course and practice. Copying, publishing or reusing it anywhere else needs written permission. See [LICENSE](LICENSE).
