// The arrow function takes this from greet, where this is person.
const person = {
    name: 'Sam',
    greet: function() {
        setTimeout(() => {
            console.log(`Hello, I'm ${this.name}`); // Sam
        }, 1000);
    }
};

person.greet();
// Hello, I'm Sam
