// A rest parameter takes any number of arguments as an array.
function sum(...values) {
    return values.reduce((total, n) => total + n, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(4, 5, 6, 7)); // 22
