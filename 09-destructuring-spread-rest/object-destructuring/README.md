# Object Destructuring

Code for the lecture *Object Destructuring* (section 9, Destructuring, Spread and Rest) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-basic-syntax.js` - take the properties we need by their names
- `examples/02-missing-property.js` - a property that does not exist gives `undefined`
- `examples/03-renaming.js` - a different variable name with a colon
- `examples/04-default-values.js` - a default value for a missing property
- `examples/05-renaming-with-defaults.js` - renaming and a default value together
- `examples/06-function-parameters.js` - destructuring in the function parameters
- `examples/07-partial-destructuring.js` - take only the properties we need
- `examples/08-existing-variables.js` - destructuring into declared variables, wrapped in parentheses

Run one with `node 09-destructuring-spread-rest/object-destructuring/examples/01-basic-syntax.js` from the repository folder.

## Tasks
1. **The user card** (`tasks/01-user-card.js`) - build a short user card, with a default for a missing email
2. **Users from the API** (`tasks/02-api-user.js`) - rename the properties an API sends to the names our code uses
3. **The cheapest product** (`tasks/03-cheapest-product.js`) - fix a destructuring line that never reaches the variables declared before it

Run the tests with `npm test -- 09-destructuring-spread-rest/object-destructuring`. They fail until the task is solved. Compare with `solutions/` after you try.
