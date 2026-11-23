# Transforming Arrays

Code for the lecture *Transforming Arrays* (section 8, Arrays and Keyed Collections) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-map.js` - `map()` applies a function to each element
- `examples/02-map-with-functions.js` - a named function, a function expression or an arrow function in `map()`
- `examples/03-map-objects.js` - pick one property from an array of objects
- `examples/04-filter.js` - `filter()` keeps the elements that pass a test
- `examples/05-filter-named-function.js` - a function stored in a variable as the test
- `examples/06-filter-boolean.js` - `filter(Boolean)` drops the falsy values
- `examples/07-reduce-sum.js` - `reduce()` adds up the numbers
- `examples/08-reduce-product.js` - a reducer function stored in a variable
- `examples/09-reduce-to-object.js` - `reduce()` builds an object from pairs
- `examples/10-reduce-flatten.js` - `reduce()` with `concat()` flattens an array
- `examples/11-frequency-map.js` - count how often each item appears
- `examples/12-flat.js` - `flat()` one level deep or deeper
- `examples/13-flat-map.js` - `flatMap()` maps and flattens in one step
- `examples/14-fill.js` - `fill()` changes a range of elements in place
- `examples/15-fill-initialize.js` - `fill()` to start an array with a value
- `examples/16-reverse.js` - reverse a copy so the original stays as it is
- `examples/17-some.js` - `some()` checks if at least one element passes
- `examples/18-every.js` - `every()` checks if all elements pass
- `examples/19-chaining.js` - `filter()`, `map()` and `reduce()` chained

Run one with `node 08-arrays-and-keyed-collections/transforming/examples/01-map.js` from the repository folder.

## Tasks
1. **The names of the active users** (`tasks/01-active-users.js`) - keep the active users with `filter()` and take their names with `map()`
2. **The order total** (`tasks/02-order-total.js`) - add up price times quantity with `reduce()`
3. **Orders by status** (`tasks/03-orders-by-status.js`) - count the orders of each status into an object with `reduce()`
4. **Names on the page** (`tasks/04-render-names.js`, page `tasks/04-render-names.html`) - turn an array of names into list items with `map()`, a first look at the page (browser)

Run the tests of tasks 1-3 with `npm test -- 08-arrays-and-keyed-collections/transforming`. Task 4 runs in the browser: run `npm run serve`, open the task page and read the checks at the bottom of it. The DOM itself comes in section 18; the task file shows the few tools it needs. The tests and checks fail until the task is solved. Compare with `solutions/` after you try, or add `?solutions` to the address of the task page to run its checks against the solution.
