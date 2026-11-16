// for await...of over an array of promises: the values in array order, about 300 ms in all.
const delay = (ms, value) =>
    new Promise((resolve) => setTimeout(() => resolve(value), ms));

const start = Date.now();
const requests = [
    delay(300, 'user'),
    delay(100, 'cart'),
    delay(200, 'stock'),
];

for (const request of requests) {
    console.log(request instanceof Promise);
}
// true
// true
// true

for await (const result of requests) {
    console.log(result);
}
// user
// cart
// stock

console.log(Date.now() - start); // about 300 (it varies)

console.log(await Promise.all(requests));
// [ 'user', 'cart', 'stock' ]
