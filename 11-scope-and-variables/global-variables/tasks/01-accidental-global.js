// Task 1: The accidental global
// Lecture: Global Variables
//
// countItems(cart) returns how many items are in a cart: the sum of the quantity of
// every line. Its counter was never declared, so in sloppy mode it would quietly become
// a global variable. Our file is a module and runs in strict mode, so the call throws a
// ReferenceError instead. Fix it: the counter is a local variable, and after a call
// there is no count property on globalThis.
//
// Examples:
//   countItems([{ name: 'Pen', quantity: 3 }, { name: 'Notebook', quantity: 2 }])   // 5
//   countItems([])   // 0
//
// Run the tests: npm test -- 11-scope-and-variables/global-variables

export function countItems(cart) {
    count = 0;

    for (const line of cart) {
        count = count + line.quantity;
    }

    return count;
}
