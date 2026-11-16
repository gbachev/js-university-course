// Task 2: Load the saved cart
// Lecture: JSON
//
// Our shop saves the cart as JSON text. Write loadCart(text), which parses the text
// and returns the cart object. When the text is broken JSON or an empty string,
// return a fresh empty cart: { items: [] }. When nothing was saved, we get null
// instead of text, and JSON.parse(null) quietly returns null: return the empty
// cart for that too. Use try...catch, as in the lecture.
//
// Examples:
//   loadCart('{"items":["pen"]}')   // { items: ['pen'] }
//   loadCart('{items: [pen]}')      // { items: [] }
//   loadCart(null)                  // { items: [] }
//
// Run the tests: npm test -- 15-built-in-objects/json

export function loadCart(text) {
    // Your code here
}
