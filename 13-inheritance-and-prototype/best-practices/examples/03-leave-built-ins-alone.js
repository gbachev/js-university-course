// considered bad practice: changes every array in the program
Array.prototype.last = function () {
    return this[this.length - 1];
};

const tags = ['js', 'css'];
const indexes = [];

for (const index in tags) {
    indexes.push(index);
}

console.log(tags.last()); // css
console.log(indexes); // [ '0', '1', 'last' ]

// better: a plain function
function lastItem(list) {
    return list[list.length - 1];
}

console.log(lastItem(tags)); // css
