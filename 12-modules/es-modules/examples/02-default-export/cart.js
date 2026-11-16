import { addVat } from './prices.js';

export default function cartTotal(items) {
    let total = 0;
    for (const item of items) {
        total += addVat(item.price);
    }
    return total;
}
