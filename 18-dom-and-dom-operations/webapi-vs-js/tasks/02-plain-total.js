// Task 2: A plain total
// Lecture: Web APIs vs JavaScript
//
// renderTotal(cart) works out the total of a cart and writes it to the tab title, all in
// one function, so we cannot test the math in Node.js. Write formatTotal(cart), a plain
// function that returns the text "Total: 88.50 EUR" for a cart of { title, price,
// quantity } items, and make renderTotal() use it. An empty cart gives "Total: 0.00 EUR".
//
// Examples:
//   formatTotal([{ title: 'Clean Code', price: 32.5, quantity: 1 }])   // 'Total: 32.50 EUR'
//   formatTotal([])                                                    // 'Total: 0.00 EUR'
//
// Run the tests: npm test -- 18-dom-and-dom-operations/webapi-vs-js

export function formatTotal(cart) {
    // Your code here
}

export function renderTotal(cart) {
    let total = 0;
    for (const item of cart) {
        total += item.price * item.quantity;
    }
    document.title = `Total: ${total.toFixed(2)} EUR`;
}
