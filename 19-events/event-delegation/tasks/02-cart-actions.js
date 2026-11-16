// Task 2: The cart buttons
// Lecture: Event Delegation
//
// Every row of our shop cart has three buttons, told apart by data-action: "increase"
// adds one to the quantity, "decrease" takes one away but never goes below 1, and
// "remove" removes the row. After each action, updateTotal(list, total) shows the new
// total. Finish the one listener in setUpCart(list, total): find the button with
// closest() and route on its action. A click on the cart's own padding finds no
// button and does nothing.
//
// Examples:
//   "+" on the mug       quantity 2, total 33.40
//   "Remove" on the mug  the mug is gone, total 8.40
//
// Open the page: npm run serve, then 19-events/event-delegation/tasks/02-cart-actions.html

export function updateTotal(list, total) {
    let sum = 0;
    for (const row of list.children) {
        const quantity = Number(row.querySelector('.quantity').textContent);
        sum += Number(row.dataset.price) * quantity;
    }
    total.textContent = sum.toFixed(2);
}

export function setUpCart(list, total) {
    list.addEventListener('click', (event) => {
        // Your code here
    });
}
