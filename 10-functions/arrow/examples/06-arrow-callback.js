// The arrow function takes this from greet, where this is person.
const person = {
    name: 'John',
    greet: function() {
        setTimeout(() => {
            console.log(`Hello, I'm ${this.name}`); // John
        }, 1000);
    }
};

person.greet();
// Hello, I'm John
