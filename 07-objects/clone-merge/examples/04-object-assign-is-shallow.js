// Object.assign() copies only the top level: a nested object is shared.
let obj = { nested: { a: 1 } };
let shallowCopy = Object.assign({}, obj);

shallowCopy.nested.a = 99;
console.log(obj.nested.a); // 99 - same reference
