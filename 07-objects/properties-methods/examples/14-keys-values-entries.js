// Object.keys(), Object.values() and Object.entries() return arrays of the own properties.
let obj = { a: 1, b: 2 };

Object.keys(obj).forEach((key) => {
    console.log(key, obj[key]); // a 1, then b 2
});

let point = { x: 10, y: 20 };

Object.values(point).forEach((value) => {
    console.log(value); // 10, 20
});

Object.entries(point).forEach(([key, value]) => {
    console.log(key, value); // x 10, y 20
});
