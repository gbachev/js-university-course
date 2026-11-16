const scores = [80, 92, 70];

const allPassed = scores.every(score => score >= 60);
const anyPerfect = scores.some(score => score === 100);

console.log(allPassed); // true
console.log(anyPerfect); // false
