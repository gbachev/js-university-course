// A function can return another function.
function createGreeting(name) {
    return function() {
        console.log(`Hi, ${name}`);
    };
}

const greetJohn = createGreeting('John');
greetJohn(); // Hi, John
