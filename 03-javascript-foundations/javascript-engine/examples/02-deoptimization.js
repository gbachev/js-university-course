// Many calls with two numbers, then one with a string.
function addToTotal(total, price) {
    return total + price;
}

let total = 0;

for (let i = 0; i < 100000; i++) {
    total = addToTotal(total, 2); // always two numbers: a good candidate for optimization
}

console.log(total); // 200000

console.log(addToTotal('Total: ', total)); // Total: 200000
