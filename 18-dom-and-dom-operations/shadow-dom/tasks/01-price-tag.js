// Task 1: A price tag
// Lecture: Shadow DOM
//
// Our price tag must look the same on every page, whatever the page styles say about p
// or .price. Write addPriceTag(host, price): attach an open shadow root to host, and put
// in it a style element that makes .price bold and a p with the class price. The text of
// the p is the price with two decimals and EUR, like "32.50 EUR".
//
// Examples:
//   addPriceTag(document.querySelector('#tag'), 32.5);
//   // the page shows a bold, black "32.50 EUR", though the page makes every p red
//
// Open the page: run npm run serve, then open
//   18-dom-and-dom-operations/shadow-dom/tasks/01-price-tag.html

export function addPriceTag(host, price) {
    // Your code here
}
