// Every call runs the code inside the function again, with its own arguments.
function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet('John'); // Hello, John!
greet('Jane'); // Hello, Jane!
greet('World'); // Hello, World!
