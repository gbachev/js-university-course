// A string method says the same thing as a regex for a fixed piece of text.
const url = 'https://shop.example.com/cart';

// works, but makes the reader decode a pattern
console.log(/^https:\/\//.test(url)); // true

// better: the method name says what we check
console.log(url.startsWith('https://')); // true
console.log(url.includes('/cart')); // true
