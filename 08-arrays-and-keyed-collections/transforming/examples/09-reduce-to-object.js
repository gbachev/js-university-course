const entries = [['a', 1], ['b', 2]];
const obj = entries.reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
}, {});

console.log(obj); // { a: 1, b: 2 }
