// The rest operator collects the remaining items into a new array.
const scores = [90, 85, 70, 60];

const [top1, top2, ...others] = scores;

console.log(top1); // 90
console.log(top2); // 85
console.log(others); // [ 70, 60 ]
