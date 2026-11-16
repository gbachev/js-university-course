// Before arrow functions: keep this in a variable the callback can see.
const person = {
    name: 'John',
    greet: function() {
        const self = this; // Store the context

        setTimeout(function() {
            console.log(`Hello, I'm ${self.name}`); // John
        }, 1000);
    }
};
person.greet();
// Hello, I'm John
