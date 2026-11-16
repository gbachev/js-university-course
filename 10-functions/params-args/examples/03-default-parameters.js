function greet(name = 'Guest') {
    console.log(`Hello, ${name}`);
}

greet('Leo'); // Hello, Leo
greet(); // Hello, Guest
greet(undefined); // Hello, Guest
