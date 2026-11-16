// Destructuring, Array.from, spread and the Set constructor all accept any iterable.
const tags = new Set(['js', 'css', 'js']);

const [first, second] = tags;
console.log(first, second); // js css
console.log(Array.from(tags)); // [ 'js', 'css' ]
console.log(Math.max(...new Set([3, 9, 3]))); // 9
console.log(new Set('hello').size); // 4
