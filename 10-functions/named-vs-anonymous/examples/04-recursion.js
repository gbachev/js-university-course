// The name lets the function call itself.
const factorial = function fact(n) {
    return n <= 1 ? 1 : n * fact(n - 1);
};

console.log(factorial(5)); // 120
