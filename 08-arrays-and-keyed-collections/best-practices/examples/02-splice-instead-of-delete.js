// Avoid: delete leaves a hole and the length stays the same
const arr = [1, 2, 3];
delete arr[1];
console.log(arr); // [ 1, <1 empty item>, 3 ]
console.log(arr.length); // 3

// Good: splice() removes the element and shifts the others
const numbers = [1, 2, 3];
numbers.splice(1, 1);
console.log(numbers); // [ 1, 3 ]
console.log(numbers.length); // 2
