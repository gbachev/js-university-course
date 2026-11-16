// forEach, map and sort call the functions we give them.
const prices = [45, 9, 25];

prices.forEach((price) => console.log(`Item: $${price}`));
// Item: $45
// Item: $9
// Item: $25

const withShipping = prices.map((price) => price + 5);
console.log(withShipping); // [ 50, 14, 30 ]

prices.sort((a, b) => a - b);
console.log(prices); // [ 9, 25, 45 ]
