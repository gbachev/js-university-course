// sort() sorts in place, so cheapestFirst changes the caller's array.
const prices = [45, 9, 25];

function cheapestFirst(list) {
    return list.sort((a, b) => a - b);
}

console.log(cheapestFirst(prices)); // [ 9, 25, 45 ]
console.log(prices); // [ 9, 25, 45 ]
