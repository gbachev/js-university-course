const numbers = [1, 2, 3, 4, 5];

const isOdd = function(n) {
    return n % 2 !== 0;
};

const odd = numbers.filter(isOdd);

console.log(odd); // [ 1, 3, 5 ]
