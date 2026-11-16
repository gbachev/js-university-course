// Task 3: Which product?
// Lecture: How to Select Elements
//
// When a shopper presses an Add button, we need the id of its product. productIdOf(button)
// returns the data-product-id of the product the button belongs to, as a string. It works
// for the first two products, but Refactoring keeps its button inside a div, and there it
// gives undefined. A button that belongs to no product, like the newsletter button, should
// give null. Fix it so it finds the product however deep the button sits.
//
// Examples:
//   productIdOf(document.querySelector('[data-product-id="102"] button'))   // '102'
//   productIdOf(document.querySelector('[data-product-id="103"] button'))   // '103'
//   productIdOf(document.querySelector('[data-action="subscribe"]'))        // null
//
// Open the page: run npm run serve, then open
//   18-dom-and-dom-operations/selecting-elements/tasks/03-which-product.html

export function productIdOf(button) {
    return button.parentElement.dataset.productId;
}
