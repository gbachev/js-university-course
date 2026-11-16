function testSpread() {
    const args1 = Array.from(arguments);
    const args2 = [...arguments];
    console.log(args1); // [ 1, 2, 3 ]
    console.log(args2); // [ 1, 2, 3 ]
}

testSpread(1, 2, 3);

const arrayLike = { 0: 'a', 1: 'b', length: 2 };
const letters1 = Array.from(arrayLike);
console.log(letters1); // [ 'a', 'b' ]

try {
    const letters2 = [...arrayLike];
    console.log(letters2);
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // TypeError: arrayLike is not iterable
}
