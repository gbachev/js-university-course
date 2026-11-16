// Language features: the same in every engine
const items = 3;
const price = 12.5;
console.log(items * price); // 37.5

// Runtime APIs: provided by the host, not by the engine
console.log(typeof setTimeout); // function (in browsers and Node.js)
console.log(typeof document); // undefined in Node.js, object in a browser
