// variable instanceof Type: the right-hand side must be a constructor.
console.log(new Number(123) instanceof Number); // true

try {
    console.log(new Number(123) instanceof number);
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // ReferenceError: number is not defined - there is no constructor called number,
    // the constructor is Number
}
