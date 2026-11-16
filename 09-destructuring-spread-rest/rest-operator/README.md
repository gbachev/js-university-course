# The Rest Operator

Code for the lecture *The Rest Operator* (section 9, Destructuring, Spread, Rest) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-rest-with-arrays.js` - the first values, then the rest of the array
- `examples/02-rest-with-objects.js` - the remaining properties in a new object
- `examples/03-rest-parameters.js` - a function that takes any number of arguments
- `examples/04-mixed-parameters.js` - a named parameter first, then the rest

Run one with `node 09-destructuring-spread-rest/rest-operator/examples/01-rest-with-arrays.js` from the repository folder.

## Tasks
1. **The next customer** (`tasks/01-next-customer.js`) - split a queue into the customer we serve and the ones still waiting
2. **Hide the password** (`tasks/02-public-user.js`) - copy a user without the password property
3. **The order total** (`tasks/03-order-total.js`) - add up any number of item prices plus the shipping

Run the tests with `npm test -- 09-destructuring-spread-rest/rest-operator`. They fail until the task is solved. Compare with `solutions/` after you try.
