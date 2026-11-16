const arrayLike = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3
};

const realArray = Array.from(arrayLike);
console.log(realArray); // [ 'a', 'b', 'c' ]
