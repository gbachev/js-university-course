function greet(name = 'Guest') {
    console.log(`Hello, ${name}`);
}

greet('John'); // Hello, John
greet(); // Hello, Guest
greet(undefined); // Hello, Guest
