// A generator object is an iterator and an iterable, and it runs only once.
function* checkoutSteps() {
    yield 'cart';
    yield 'shipping';
    yield 'payment';
}

for (const step of checkoutSteps()) {
    console.log(step);
}
// cart
// shipping
// payment

console.log([...checkoutSteps()]); // [ 'cart', 'shipping', 'payment' ]

const [first] = checkoutSteps();
console.log(first); // cart

const steps = checkoutSteps();
console.log(steps[Symbol.iterator]() === steps); // true
console.log([...steps].length); // 3
console.log([...steps].length); // 0
