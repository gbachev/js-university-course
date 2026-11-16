console.log(String(true)); // true
console.log(String(false)); // false
console.log(String(0)); // 0
console.log(String(1)); // 1
console.log(String(123n)); // 123
console.log(String({})); // [object Object]
console.log(String([])); // prints an empty line
console.log(String([1, 2, 3])); // 1,2,3
console.log(String(undefined)); // undefined
console.log(String(null)); // null
console.log(String(Symbol('description'))); // Symbol(description)
console.log(String(function () { return 1; })); // function () { return 1; }
