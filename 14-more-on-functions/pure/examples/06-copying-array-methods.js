// toSorted, toReversed, toSpliced and with return a new array (ES2023).
const prices = [45, 9, 25];

function cheapestFirst(list) {
    return list.toSorted((a, b) => a - b);
}

console.log(cheapestFirst(prices)); // [ 9, 25, 45 ]
console.log(prices); // [ 45, 9, 25 ]

console.log(prices.toReversed()); // [ 25, 9, 45 ]
console.log(prices.toSpliced(1, 1)); // [ 45, 25 ]
console.log(prices.with(0, 40)); // [ 40, 9, 25 ]
console.log(prices); // [ 45, 9, 25 ]
