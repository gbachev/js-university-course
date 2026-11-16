let a;
var b;
const c = undefined;
let obj = { someProp: 'some value' };
let arr = ['one', 'two', 'three'];

console.log(a, b, c); // undefined undefined undefined
console.log(obj.nonExistingProperty); // undefined
console.log(arr[4]); // undefined
