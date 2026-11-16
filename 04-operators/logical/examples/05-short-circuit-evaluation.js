console.log(true && 1 === 1 && false); // false, evaluates all conditions
console.log(true && 1 === 2 && 1 + 1 === 2); // false, stops at the second condition
console.log(false && 1 === 1 && true); // false, stops at the first condition
console.log(true && 1 === 1 && 1 + 1 === 2); // true, all conditions are evaluated
// nonExistent() is not defined, but we never get to the call, so there is no error.
console.log(false && nonExistent()); // false, stops at the first condition

console.log(false || 1 !== 1 || !true); // false, evaluates all conditions
console.log(false || 1 === 1 || true); // true, stops at the second condition
console.log(false || 1 === 1 || !true); // true, stops at the second condition
console.log(true || nonExistent()); // true, stops at the first condition, no error
