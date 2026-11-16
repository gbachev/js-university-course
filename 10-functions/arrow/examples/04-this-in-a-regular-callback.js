// setTimeout calls the regular function on its own, not as a method of person,
// so this inside it is not person.
const person = {
    name: 'Sam',
    greet: function() {
        setTimeout(function() {
            console.log(`Hello, I'm ${this.name}`); // this is not person here
        }, 1000);
    }
};

person.greet();
// Hello, I'm undefined (in Node this is the Timeout object, in a browser it is window
// and we get window.name, usually an empty string)
