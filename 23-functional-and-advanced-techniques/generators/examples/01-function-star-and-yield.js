// Calling a generator function runs nothing: each next() runs the body to the next yield.
function* checkoutSteps() {
    console.log('start');
    yield 'cart';
    yield 'shipping';
    yield 'payment';
}

const steps = checkoutSteps(); // nothing is logged yet

console.log(steps.next());
// start
// { value: 'cart', done: false }
console.log(steps.next()); // { value: 'shipping', done: false }
console.log(steps.next()); // { value: 'payment', done: false }
console.log(steps.next()); // { value: undefined, done: true }
