// The iteration protocol by hand: get the iterator, then call next() until done.
const cart = ['book', 'pen', 'lamp'];
const iterator = cart[Symbol.iterator]();

console.log(iterator.next()); // { value: 'book', done: false }
console.log(iterator.next()); // { value: 'pen', done: false }
console.log(iterator.next()); // { value: 'lamp', done: false }
console.log(iterator.next()); // { value: undefined, done: true }
