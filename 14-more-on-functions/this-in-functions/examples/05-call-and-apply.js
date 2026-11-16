// call() takes the arguments one by one, apply() takes them as one array.
function describe(currency, total) {
    return `${this.id}: ${total} ${currency}`;
}

const order = { id: 'A1' };
const args = ['EUR', 49];

console.log(describe.call(order, 'EUR', 49)); // A1: 49 EUR
console.log(describe.apply(order, args)); // A1: 49 EUR
console.log(describe.call(order, ...args)); // A1: 49 EUR

// Math.max() does not use this, so null is only a placeholder.
const prices = [12, 49, 7];
console.log(Math.max.apply(null, prices)); // 49
console.log(Math.max(...prices)); // 49
