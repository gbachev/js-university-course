# Take-Home Tasks and Your Project

Code for the lecture *Take-Home Tasks and Your Project* (section 24, How to Prepare for an Interview) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-orders/` - the core of the orders take-home task with Vitest, with its own `package.json`:
  - `src/orders.js` - `filterOrders` and `totalCents`, two pure functions kept apart from the DOM
  - `tests/orders.test.js` - four tests for the normal case and the edges: no match and no orders
- `examples/02-readme-outline.md` - the README outline of the orders task: how to run it, decisions, what is not done and next steps

We install the packages of `01-orders` inside its folder; the rest of the repository stays without dependencies.

```bash
cd 26-how-to-prepare-for-an-interview/take-home-tasks/examples/01-orders
npm install
npm test                      # 1 test file, 4 tests passed
```

`npm install` writes a `package-lock.json` and a `node_modules` folder into the example; Git ignores `node_modules`, and we can delete them when we are done.

## Tasks
1. **Finish filterOrders** (`tasks/01-filter-orders.js`) - make `filterOrders` throw for an unknown status and give `[]` for an empty or missing list

Run the tests with `npm test -- 26-how-to-prepare-for-an-interview/take-home-tasks`. They fail until the task is solved. Compare with `solutions/` after you try.
