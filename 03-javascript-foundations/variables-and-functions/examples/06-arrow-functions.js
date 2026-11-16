// A single expression after the arrow is returned automatically.
const addShipping = (price) => price + 5;
console.log(addShipping(20)); // 25

// With curly braces we write return ourselves.
const welcome = (firstName, lastName) => {
    const fullName = firstName + ' ' + lastName;
    return 'Welcome back, ' + fullName;
};
console.log(welcome('Jane', 'Doe')); // Welcome back, Jane Doe
