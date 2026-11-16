// A Map or Object.create(null) for keys that come from user data.
const visits = new Map();

for (const page of ['home', '__proto__', 'constructor', 'home']) {
    visits.set(page, (visits.get(page) ?? 0) + 1);
}

console.log(visits.get('home')); // 2
console.log(visits.get('__proto__')); // 1
console.log(visits.get('constructor')); // 1

const prices = Object.create(null);
prices.lamp = 24.5;

console.log(Object.hasOwn(prices, 'lamp')); // true
console.log(typeof prices.hasOwnProperty); // undefined
