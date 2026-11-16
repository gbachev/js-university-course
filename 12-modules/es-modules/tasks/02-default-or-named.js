// Task 2: Default or named?
// Lecture: ES Modules
//
// cartSummary(items) returns a line like '3 items, €15.00' for the cart page. It uses
// the cart module in 02-default-or-named/cart.js, whose default export is cartTotal and
// whose named export is itemCount, and formatPrice from 02-default-or-named/prices.js.
// The function body is right, but the imports are wrong: the count is a total, and
// the total throws a TypeError. Fix only the import lines (and the names they bring
// in), not the two modules. A cart with one item says '1 item', an empty cart says
// '0 items, €0.00'.
//
// Examples:
//   cartSummary([{ price: 5, quantity: 3 }])     // '3 items, €15.00'
//   cartSummary([{ price: 19.99, quantity: 1 }]) // '1 item, €19.99'
//   cartSummary([])                              // '0 items, €0.00'
//
// Run the tests: npm test -- 12-modules/es-modules

import itemCount from './02-default-or-named/cart.js';
import * as cart from './02-default-or-named/cart.js';
import { formatPrice } from './02-default-or-named/prices.js';

export function cartSummary(items) {
    const count = itemCount(items);
    const label = count === 1 ? 'item' : 'items';
    return `${count} ${label}, ${formatPrice(cart.cartTotal(items))}`;
}
