// Every call runs the code inside the function again, with its own arguments.
function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet('Ben'); // Hello, Ben!
greet('Luna'); // Hello, Luna!
greet('World'); // Hello, World!
