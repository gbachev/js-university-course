// variable instanceof Type: the right-hand side must be a constructor.
console.log(new Number(123) instanceof Number); // true

try {
    console.log(new Number(123) instanceof 'number');
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // TypeError: Right-hand side of 'instanceof' is not an object
}
