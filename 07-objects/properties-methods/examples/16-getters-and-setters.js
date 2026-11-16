// A getter runs when we read fullName, a setter when we assign to it.
let person = {
    firstName: 'John',
    lastName: 'Doe',
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    },
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(' ');
    }
};

console.log(person.fullName); // John Doe
person.fullName = 'Jane Doe';
console.log(person.firstName); // Jane
