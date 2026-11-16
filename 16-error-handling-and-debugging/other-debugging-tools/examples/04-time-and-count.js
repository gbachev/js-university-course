// console.time() and console.timeEnd() measure, console.count() counts calls per label.
const prices = Array.from({ length: 100000 }, () => Math.random());

console.time('sort');
prices.sort((a, b) => a - b);
console.timeEnd('sort'); // sort: 31.908ms (the time differs on every run)

function addToCart(title) {
    console.count(title);
}

addToCart('Keyboard'); // Keyboard: 1
addToCart('Mouse'); // Mouse: 1
addToCart('Keyboard'); // Keyboard: 2
