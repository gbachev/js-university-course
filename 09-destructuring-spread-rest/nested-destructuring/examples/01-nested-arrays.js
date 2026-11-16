// The pattern mirrors the arrays inside the array.
const coordinates = [[10, 20], [30, 40]];

const [[x1, y1], [x2, y2]] = coordinates;

console.log(x1, y1); // 10 20
console.log(x2, y2); // 30 40
