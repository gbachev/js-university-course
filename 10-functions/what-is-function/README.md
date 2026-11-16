# What Is a Function?

Code for the lecture *What Is a Function?* (section 10, Functions) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-greet.js` - a function with a parameter that returns a greeting
- `examples/02-no-parameters.js` - a function without parameters that returns a fixed value
- `examples/03-more-examples.js` - `calculateTax()` and `isEven()`
- `examples/04-function-as-value.js` - a function assigned to a variable and called through it

Run one with `node 10-functions/what-is-function/examples/01-greet.js` from the repository folder.

## Tasks
1. **Price with VAT** (`tasks/01-price-with-vat.js`) - add 20% VAT to a price, rounded to cents
2. **Greet the customer** (`tasks/02-greet-the-customer.js`) - greet a customer by a name typed in any case
3. **Total with VAT** (`tasks/03-total-with-vat.js`) - add up the prices of a cart and reuse `addVat()` for the VAT

Run the tests with `npm test -- 10-functions/what-is-function`. They fail until the task is solved. Compare with `solutions/` after you try.
