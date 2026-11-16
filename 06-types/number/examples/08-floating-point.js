// A rounding error of floating-point arithmetic.
console.log(0.1 + 0.2); // 0.30000000000000004

// toFixed() rounds, but it returns a string.
const total = (0.1 + 0.2).toFixed(2);
console.log(total); // 0.30
console.log(typeof total); // string
console.log(total + 1); // 0.301, concatenation, not addition
