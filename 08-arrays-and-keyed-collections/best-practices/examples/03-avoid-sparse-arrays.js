// Avoid: index 10 leaves 10 empty slots in front of it
const arr = [];
arr[10] = 'x'; // inefficient and error-prone
console.log(arr.length); // 11

// Good: add elements in order, so the array has no holes
const items = [];
items.push('x');
console.log(items); // [ 'x' ]
console.log(items.length); // 1
