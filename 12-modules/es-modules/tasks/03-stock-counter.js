// Task 3: A stock counter that stays current
// Lecture: ES Modules
//
// This module keeps the stock of one product. Other files import itemsInStock to show
// it, but right now they always see 3: the export is a copy, made once. Make
// itemsInStock a live binding, so every importer sees the current stock. Only this
// module may change it: sellOne() lowers it by 1 and returns true, or returns false
// and changes nothing when the stock is 0. restock(amount) adds amount to it.
// The tests check the stock after each call, and that assigning to the import throws.
//
// Examples:
//   itemsInStock    // 3
//   sellOne()       // true, itemsInStock is now 2
//   restock(5)      // itemsInStock is now 7
//
// Run the tests: npm test -- 12-modules/es-modules

let stock = 3;

export const itemsInStock = stock;

export function sellOne() {
    stock -= 1;
    return true;
}

export function restock(amount) {
    // Your code here
}
