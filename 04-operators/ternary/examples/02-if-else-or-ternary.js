const score = 85;

// With if ... else
let result;

if (score >= 50) {
    result = 'pass';
} else {
    result = 'fail';
}

console.log(result); // pass

// The same with the ternary operator
const ternaryResult = score >= 50 ? 'pass' : 'fail';

console.log(ternaryResult); // pass
