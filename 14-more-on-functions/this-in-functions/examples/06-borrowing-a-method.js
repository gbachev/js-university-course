// Borrowing Object.prototype.toString() gives the type tag of any value.
const toString = Object.prototype.toString;

console.log(toString.call([])); // [object Array]
console.log(toString.call(null)); // [object Null]
console.log(toString.call(new Date())); // [object Date]
