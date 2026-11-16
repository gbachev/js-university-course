// Strings iterate by code point, a Map gives [key, value] pairs, a plain object refuses.
const greeting = 'Hi😀';
console.log(greeting.length); // 4
console.log([...greeting]); // [ 'H', 'i', '😀' ]

const prices = new Map([['book', 12], ['pen', 2]]);
for (const [item, price] of prices) {
    console.log(item, price);
}
// book 12
// pen 2

const settings = { theme: 'dark' };
try {
    for (const value of settings) {
        console.log(value);
    }
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // TypeError: settings is not iterable
}
