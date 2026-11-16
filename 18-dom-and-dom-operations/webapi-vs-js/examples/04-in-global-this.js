// The in operator on globalThis tells us if a global exists. Run it in Node.js,
// then paste it into the browser console and compare.
console.log('fetch' in globalThis); // true
console.log('Buffer' in globalThis);
// false in a browser, true in Node.js
console.log(typeof navigator); // "object" in both
