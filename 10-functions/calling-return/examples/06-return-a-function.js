// A function can return another function.
function createGreeting(name) {
    return function() {
        console.log(`Hi, ${name}`);
    };
}

const greetSam = createGreeting('Sam');
greetSam(); // Hi, Sam
