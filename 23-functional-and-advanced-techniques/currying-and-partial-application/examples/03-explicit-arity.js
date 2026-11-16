// fn.length stops at a default value, so curry() takes an optional arity.
const curry = (fn, arity = fn.length) => {
    const curried = (...args) =>
        args.length >= arity
            ? fn(...args)
            : (...more) => curried(...args, ...more);
    return curried;
};

const withDefault = (price, quantity, discount = 0) =>
    price * quantity - discount;
const sum = (...prices) => prices.reduce((a, b) => a + b, 0);

console.log(withDefault.length); // 2
console.log(sum.length); // 0

const curriedThree = curry(withDefault, 3);
console.log(curriedThree(20)(3)(5)); // 55

const curriedDefault = curry(withDefault);
console.log(curriedDefault(20)(3)); // 60

// After two arguments we already have 60, a number, and we try to call it.
try {
    console.log(curriedDefault(20)(3)(5));
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // TypeError: curriedDefault(...)(...) is not a function
}
