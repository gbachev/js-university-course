// cartTotal is the default export, so it has no braces; itemCount is named.
import cartTotal from './02-default-or-named/cart.js';
import { itemCount } from './02-default-or-named/cart.js';
import { formatPrice } from './02-default-or-named/prices.js';

export function cartSummary(items) {
    const count = itemCount(items);
    const label = count === 1 ? 'item' : 'items';
    return `${count} ${label}, ${formatPrice(cartTotal(items))}`;
}
