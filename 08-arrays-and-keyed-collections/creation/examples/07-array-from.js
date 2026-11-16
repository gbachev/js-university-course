let str = 'hello';
let chars = Array.from(str);
console.log(chars); // [ 'h', 'e', 'l', 'l', 'o' ]

// A mapping function as the second argument transforms the values.
let doubled = Array.from([1, 2, 3], x => x * 2);
console.log(doubled); // [ 2, 4, 6 ]
