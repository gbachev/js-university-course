// Better: we choose the arguments of parseInt ourselves, instead of map(parseInt).
const pages = ['1', '2', '3'];

console.log(pages.map((page) => parseInt(page, 10))); // [ 1, 2, 3 ]
