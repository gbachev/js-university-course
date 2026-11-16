const numbers = [1, 2, 3];

function square1(n) {
    return n * n;
}

const square2 = function(n) {
    return n * n;
};

const squared1 = numbers.map(square1);
const squared2 = numbers.map(square2);
const squared3 = numbers.map(n => n * n);

console.log(squared1); // [ 1, 4, 9 ]
console.log(squared2); // [ 1, 4, 9 ]
console.log(squared3); // [ 1, 4, 9 ]
