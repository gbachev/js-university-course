// The limits of JSON and joined keys.
console.log(JSON.stringify([{ id: 1, qty: 2 }]));
// [{"id":1,"qty":2}]
console.log(JSON.stringify([{ qty: 2, id: 1 }]));
// [{"qty":2,"id":1}]
console.log(JSON.stringify([undefined])); // [null]
console.log(JSON.stringify([null])); // [null]
console.log(JSON.stringify([(x) => x * 2])); // [null]
console.log(['a|b', 'c'].join('|')); // a|b|c
console.log(['a', 'b|c'].join('|')); // a|b|c
