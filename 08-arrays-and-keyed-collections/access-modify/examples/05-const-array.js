const items = [1, 2, 3];

items[0] = 10; // allowed
console.log(items); // [ 10, 2, 3 ]

try {
    items = [4, 5]; // error - can't reassign a const reference
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // TypeError: Assignment to constant variable.
}
