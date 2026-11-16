// An arrow function assigned to a variable takes the variable's name.
const sayHi = (name) => {
    return `Hi, ${name}`;
};

console.log(sayHi('Jane')); // Hi, Jane
console.log(sayHi.name); // sayHi
