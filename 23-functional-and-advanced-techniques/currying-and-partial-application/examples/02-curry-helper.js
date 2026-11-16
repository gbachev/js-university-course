// A generic curry helper that waits for fn.length arguments.
const curry = fn => {
    const curried = (...args) =>
        args.length >= fn.length
            ? fn(...args)
            : (...more) => curried(...args, ...more);
    return curried;
};

const lineTotal = (price, quantity, discount) =>
    price * quantity - discount;
const curriedTotal = curry(lineTotal);

console.log(curriedTotal(20)(3)(5)); // 55
console.log(curriedTotal(20, 3)(5)); // 55
console.log(curriedTotal(20)(3, 5)); // 55

const forBook = curriedTotal(20);
console.log(forBook(2)(0)); // 40
