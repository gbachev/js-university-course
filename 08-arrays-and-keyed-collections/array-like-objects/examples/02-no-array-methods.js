const str = 'hello';

console.log(Array.isArray(str)); // false

console.log(str.map); // undefined
console.log(str.filter); // undefined
console.log(str.reduce); // undefined
console.log(str.push); // undefined
console.log(str.pop); // undefined

console.log(str[1]); // e
console.log(str.length); // 5
